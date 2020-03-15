/******************************************************************************************
 * teambuilder.js for custom mon metas
 * By Volco
 * Credits to Hoeen for Teambuilder constructor outline (from ssb file) and some functions
 * ****************************************************************************************/
'use strict';

const FS = require("../../.lib-dist/fs").FS;

// add new tier name here make sure it matches the mod folder's name
let tiersList = ['digimon'];

/*
 * add more tiers pokedexes with this
 * const tierNameDex = require('../../data/mods/modfoldername/pokedex').BattlePokedex;
 */
const digiDex = require('../../data/mods/digimon/pokedex').BattlePokedex;

/*
 * add the tier id  and dex in here
 * tier id must match the mod folder's name
 * {tierID1: dexVariable1, tierID2: dexVariable2...}
 */ 
let tierDexList = {digimon: digiDex};

let TB = {};

function writeTB() {
	FS("config/chat-plugins/teambuilder.json").write(JSON.stringify((TB ? TB : {})));
}

// Shamlessly ripped from teambuilder client.
function getStat(stat, set, tier, evOverride, natureOverride) {
	if (!set) set = this.curSet;
	if (!set) return 0;

	if (!set.ivs) {
		set.ivs = {
			hp: 31,
			atk: 31,
			def: 31,
			spa: 31,
			spd: 31,
			spe: 31,
		};
	}
	if (!set.evs) set.evs = {};

	// do this after setting set.evs because it's assumed to exist
	// after getStat is run
	let template = Dex.mod(tier).getTemplate(set.species);
	if (!template.exists) return 0;

	if (!set.level) set.level = 100;
	if (typeof set.ivs[stat] === 'undefined') set.ivs[stat] = 31;

	let baseStat = Dex.mod(tier).getTemplate(set.species).baseStats[stat];
	let iv = (set.ivs[stat] || 0);
	let ev = set.evs[stat];
	if (evOverride !== undefined) ev = evOverride;
	if (ev === undefined) ev = (this.curTeam.gen > 2 ? 0 : 252);

	if (stat === 'hp') {
		if (baseStat === 1) return 1;
		return Math.floor(Math.floor(2 * baseStat + iv + Math.floor(ev / 4) + 100) * set.level / 100 + 10);
	}
	let val = Math.floor(Math.floor(2 * baseStat + iv + Math.floor(ev / 4)) * set.level / 100 + 5);
	if (natureOverride) {
		val *= natureOverride;
	} else if (Dex.mod(tier).getNature(set.nature) && Dex.mod(tier).getNature(set.nature).plus === stat) {
		val *= 1.1;
	} else if (Dex.mod(tier).getNature(set.nature) && Dex.mod(tier).getNature(set.nature).minus === stat) {
		val *= 0.9;
	}
	return Math.floor(val);
}

function buildMenu(userid, num, tier) {
	if (!TB[userid]) return '<span style="color:red"><b>Error: </b>User "' + userid + '" not found in TeamBuilder.</span>';
	num = parseInt(num);
	let speciesName = toID(TB[userid].monArray[tier][num].species);
	let split = TB[userid].monArray[tier][num].species.split('-');
	if (split.length > 1) {
		speciesName = toID(split[0]) + '-' + speciesName.substring(toID(split[0]).length);
	}
	let output = '';
	for (let u = 0; u < TB[userid].monArray[tier].length; u++) {
		output += '<button name="send" value="/teambuilder edit ' + tier + ', ' + (u + 1) + '"><img src="//play.pokemonshowdown.com/sprites/' + (tier != 'digimon' ? 'bw/' : 'digimon/sprites/digimon/') + toID(TB[userid].monArray[tier][u].species) + '.png" height="32" width="32"></button>&nbsp;';
	}
	if (TB[userid].monArray[tier].length !== 6) output += '<button name="send" value="/teambuilder addmon ' + tier + ', ' + Object.keys(tierDexList[tier])[0] + '"><i class="fa fa-plus"></i></button>';
	output += '<button name="send" class="button" value="/teambuilder export ' + tier + '">Export Team</button><button name="send" class="button" value="/teambuilder removemon ' + tier + ', ' + (num + 1) + '"><i class="fa fa-trash"></i>Delete</button><button name="send" class="button" value="/dt ' + toID(TB[userid].monArray[tier][num].species) + ', ' + tier + '">Mon data</button><div class="setchart" style="height: 155px;">';
	output += '<div class="setcol setcol-icon"><div class="setcell-sprite"><img src="//play.pokemonshowdown.com/sprites/' + (tier != 'digimon' ? 'bw/' : 'digimon/sprites/digimon/') + speciesName + '.png" height=80 width=80></div><div class="setcell setcell-pokemon"><label>Pok&eacute;mon</label><button class="textbox chartinput" style="width:104px; height: 20px; text-align: left" name="send" value="/teambuilder monlist ' + tier + '">' + TB[userid].monArray[tier][num].species + '</button></div></div>';
	output += '<div class="setcol setcol-details"><div class="setrow"><div class="setcell setcell-details"><label>Details</label><button class="textbox setdetails" tabindex="-1" name="send" value="/teambuilder details main ' + tier + ', ' + (num + 1) + '"><span class="detailcell detailcell-first"><label>Level</label>' + TB[userid].monArray[tier][num].level + '</span><span class="detailcell"><label>Gender</label>' + (TB[userid].monArray[tier][num].gender === 'random' ? '-' : TB[userid].monArray[tier][num].gender) + '</span><span class="detailcell"><label>Happiness</label>' + TB[userid].monArray[tier][num].happiness + '</span><span class="detailcell"><label>Shiny</label>' + (TB[userid].monArray[tier][num].shiny ? 'Yes' : 'No') + '</span></button><span class="itemicon" style="background: none"></span></div></div><div class="setrow"><div class="setcell setcell-item"><label>Item</label><button class="textbox chartinput" style="width:104px; height: 20px; text-align: left" name="send" value="/teambuilder itemlist ' + tier + ', ' + (num + 1) + '">' + (TB[userid].monArray[tier][num].item ? TB[userid].monArray[tier][num].item : '') + '</button></div><div class="setcell setcell-ability"><label>Ability</label><button class="textbox chartinput" style="width:104px; height: 20px; text-align: left" name="send" value="/teambuilder ability ' + tier + ', blank, ' + (num + 1) + '">' + TB[userid].monArray[tier][num].ability + '</button></div></div></div>';
	output += '<div class="setcol setcol-moves"><div class="setcell"><label>Moves</label><button class="textbox chartinput" style="width:129px; height: 20px; text-align: left;" name="send" value="/teambuilder move ' + tier + ', blank, ' + (num + 1) + '">' + (TB[userid].monArray[tier][num].moves[0] ? TB[userid].monArray[tier][num].moves[0] : '') + '</button></div><div class="setcell"><button class="textbox chartinput" style="width:129px; height: 20px; text-align: left;" name="send" value="/teambuilder move ' + tier + ', blank, ' + (num + 1) + '">' + (TB[userid].monArray[tier][num].moves[1] ? TB[userid].monArray[tier][num].moves[1] : '') + '</button></div><div class="setcell"><button class="textbox chartinput" style="width:129px; height: 20px; text-align: left;" name="send" value="/teambuilder move ' + tier + ', blank, ' + (num + 1) + '">' + (TB[userid].monArray[tier][num].moves[2] ? TB[userid].monArray[tier][num].moves[2] : '') + '</button></div><div class="setcell"><button class="textbox chartinput" style="width:129px; height: 20px; text-align: left; " name="send" value="/teambuilder move ' + tier + ', blank, ' + (num + 1) + '">' + (TB[userid].monArray[tier][num].moves[3] ? TB[userid].monArray[tier][num].moves[3] : '') + '</button></div></div>';
	output += '<div class="setcol setcol-stats"><div class="setrow"><label>Stats</label><button class="textbox setstats" name="send" value="/teambuilder stats main ' + tier + ', ' + (num + 1) + '"><span class="statrow statrow-head"><label></label><span class="statgraph"></span> <em>EV</em></span>';
	let statNames = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];
	let stats = {};
	for (let i = 0; i < statNames.length; i++) {
		stats[toID(statNames[i])] = getStat(toID(statNames[i]), {
			species: TB[userid].monArray[tier][num].species,
			evs: TB[userid].monArray[tier][num].evs,
			ivs: TB[userid].monArray[tier][num].ivs,
			nature: TB[userid].monArray[tier][num].nature,
			level: TB[userid].monArray[tier][num].level,
		});
		let evBuf = '<em>' + (TB[userid].monArray[tier][num].evs[toID(statNames[i])] === 0 ? '' : TB[userid].monArray[tier][num].evs[toID(statNames[i])]) + '</em>';
		if (Dex.mod(tier).getNature(TB[userid].monArray[tier][num].nature).plus === toID(statNames[i])) {
			evBuf += '<small>+</small>';
		} else if (Dex.mod(tier).getNature(TB[userid].monArray[tier][num].nature).minus === toID(statNames[i])) {
			evBuf += '<small>&minus;</small>';
		}
		let width = stats[toID(statNames[i])] * 75 / 504;
		if (statNames[i] === 'HP') width = stats[toID(statNames[i])] * 75 / 704;
		if (width > 75) width = 75;
		let color = Math.floor(TB[userid].monArray[tier][num].evs[toID(statNames[i])] * 180 / 714);
		if (color > 360) color = 360;
		output += '<span class="statrow"><label>' + statNames[i] + '</label> <span class="statgraph"><span style="width:' + width + 'px;background:hsl(' + color + ',40%,75%);"></span></span> ' + evBuf + '</span>';
	}
	output += '</div></div></div>';
	return output;
}

function moveMenu(userid, num, tier) {
	num = parseInt(num);
	let output = '';
	output += '<div class="setchart" style="text-align:center; height: 150px;"><h3><u>Move Menu</u><br /><button name="send" class="button" value="/dt ' + toID(TB[userid].monArray[tier][num].species) + ',' + tier + '">Mon data</button></h3><div style="padding-bottom: 2px">To remove a move click the button with the move name<br /><i>Current Moves:</i> ';
	for (let i = 0; i < TB[userid].monArray[tier][num].moves.length; i++) {
		if (TB[userid].monArray[tier][num].moves.length === 0) break;
		output += '<button name="send" class="button" value="/teambuilder removemove ' + tier + ', ' + TB[userid].monArray[tier][num].moves[i] + ', ' + (num + 1) + '">' + TB[userid].monArray[tier][num].moves[i] + '</button> , ';
	}
	output += '<br /><button name="send" class="button" value="/teambuilder edit ' + tier + ', ' + (num + 1) + '">Main Menu</button></div></div>';
	return output;
}

function abilityMenu(userid, num, tier) {
	num = parseInt(num);
	let output = '<div class="setchart" style="text-align:center"><h3><u>Ability Menu</u></h3><div style="padding-bottom: 2px"><i>Current Ability:</i> ' + TB[userid].monArray[tier][num].ability + '</div><div style="padding-bottom: 2px"></div>';
	let pokemon = Dex.mod(tier).getTemplate(TB[userid].monArray[tier][num].species);
	for (let i in pokemon.abilities) {
		output += '<button name="send" class="button"value="/teambuilder abilityinfo ' + tier + ', ' + pokemon.abilities[i] + '">Information on ' + pokemon.abilities[i] + '</button><br />';
		output += '<button name="send" value="/teambuilder ability ' + tier + ', ' + pokemon.abilities[i] + ', ' + (num + 1) + '" class="button">Set to ' + pokemon.abilities[i] + '</button> | ';
	}
	output += '<button name="send" value="/teambuilder edit ' + tier + ', ' + (num + 1) + '" class="button">Main Menu</button></div>';
	return output;
}

function statMenu(userid, num, tier) {
	num = parseInt(num);
	let output = '<div class="setchart" style="text-align:center; height: 300px">';
	output += '<table style="border:1px solid black; display: inline-block; float: left"><tr><th colspan="3" style="border-right: 1px solid black;">EVs</th><th colspan="3" style="border-left: 1px solid black;">IVs</th></tr>';
	let values = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];
	for (let i = 0; i < values.length; i++) {
		output += '<tr><td><button class="button" name="send" value="/teambuilder stats ev ' + tier + ', ' + values[i] + ', 0, ' + (num + 1) + '">Set 0</button></td><th>' + values[i] + ': ' + TB[userid].monArray[tier][num].evs[toID(values[i])] + '</th><td style="border-right:1px solid black"><button class="button" name="send" value="/teambuilder stats ev ' + tier + ', ' + values[i] + ', 252, ' + (num + 1) + '">Set 252</button></td>';
		output += '<td style="border-left:1px solid black"><button class="button" name="send" value="/teambuilder stats iv ' + tier + ', ' + values[i] + ', 0, ' + (num + 1) + '">Set 0</button></td><th>' + values[i] + ': ' + TB[userid].monArray[tier][num].ivs[toID(values[i])] + '</th><td><button class="button" name="send" value="/teambuilder stats iv ' + tier + ', ' + values[i] + ', 31, ' + (num + 1) + '">Set 31</button></td></tr>';
	}
	output += '<div style="float: right; display: inline-block; width: 30%"><b><u>Stat Menu</u></b><br/><button class="button" name="send" value="/help teambuilder stats ev">Set EVs to a custom value</button><br/><button class="button" name="send" value="/help teambuilder stats iv">Set IVs to a custom value</button><br/><br/><i>Current Nature:</i> ' + TB[userid].monArray[tier][num].nature + '<br/><br/><button class="button" name="send" value="/help teambuilder stats nature">Set Nature</button><br/><button name="send" class="button" value="/dt ' + toID(TB[userid].monArray[tier][num].species) + ', ' + tier + '">Mon data</button><br/><button class="button" name="send" value="/teambuilder edit ' + tier + ', ' + (num + 1) + '">Main Menu</button></div></div>';
	return output;
}

function detailMenu(userid, num, tier) {
	num = parseInt(num);
	let output = '<div class="setchart" style="text-align:center; height:140px"><h3><u>Details Menu</u></h3>';
	output += '<i>Level: </i>' + TB[userid].monArray[tier][num].level + ' | <button name="send" value="/teambuilder details level ' + tier + ', 1, ' + (num + 1) + '" class="button">Set to 1</button> <button name="send" value="/teambuilder details level ' + tier + ', 5, ' + (num + 1) + '" class="button">Set to 5</button> <button name="send" value="/teambuilder details level ' + tier + ', 50, ' + (num + 1) + '" class="button">Set to 50</button> <button class="button" name="send" value="/teambuilder details level ' + tier + ', 100, ' + (num + 1) + '">Set to 100</button><br/>';
	output += '<i>Gender: </i>' + TB[userid].monArray[tier][num].gender + ' | <button name="send" value="/teambuilder details gender ' + tier + ', male, ' + (num + 1) + '" class="button">Set to Male</button> <button name="send" value="/teambuilder details gender ' + tier + ', female, ' + (num + 1) + '" class="button">Set to Female</button> <button class="button" name="send" value="/teambuilder details gender ' + tier + ', random, ' + (num + 1) + '">Set to Random</button> <button name="send" value="/teambuilder details gender ' + tier + ', genderless, ' + (num + 1) + '" class="button">Set to Genderless</button><br/>';
	output += '<i>Happiness: </i>' + TB[userid].monArray[tier][num].happiness + ' | <button name="send" value="/teambuilder details happiness ' + tier + ', 0, ' + (num + 1) + '" class="button">Set to 0</button> <button class="button" name="send" value="/teambuilder details happiness ' + tier + ', 255, ' + (num + 1) + '">Set to 255</button> <button name="send" value="/help teambuilder details happiness" class="button">Set to custom value</button><br/>';
	output += '<button class="button" name="send" value="/teambuilder edit ' + tier + ', ' + (num + 1) + '">Main Menu</button></div>';
	return output;
}

class TeamBuilder {
	constructor(userid, tier) {
		this.userid = userid;
		this.lastMonNum = 0;
		let species = null;
		let ability = null;
		if (tierDexList[tier]) {
			species = Object.keys(tierDexList[tier])[0];
			ability = tierDexList[tier][species].abilities[0];
		}
		this.monArray = {};
		this.monArray[tier] = [{
			gender: 'random',
			level: 100,
			happiness: 160,
			item: false,
			ability: ability,
			moves: [],
			species: toID(species),
			name: toID(species).charAt(0).toUpperCase() + toID(species).slice(1),
			evs: {
				hp: 0,
				atk: 0,
				def: 0,
				spa: 0,
				spd: 0,
				spe: 0,
			},
			nature: 'Serious',
			ivs: {
				hp: 31,
				atk: 31,
				def: 31,
				spa: 31,
				spd: 31,
				spe: 31,
			},
		}];
	}

	species(mon, monSlot, tier) {
		let speciesId = toID(mon);
		let dex = tierDexList[tier];
		for (let p in dex) {
			if (dex[p].num < -200 && toID(dex[p].species).includes('pokestar') || dex[p].species === 'Missingno.') continue;
			let pokemon = dex[p];
			if (toID(pokemon.species) === speciesId) {
				this.monArray[tier][monSlot].species = pokemon.species;
				this.monArray[tier][monSlot].name = pokemon.species;
			}
		}
		this.monArray[tier][monSlot].ability = Dex.mod(tier).getTemplate(mon).abilities['0'];
		this.monArray[tier][monSlot].moves = [];
		for (let i in this.monArray[tier][monSlot].evs) this.monArray[tier][monSlot].evs[i] = 0;
		for (let j in this.monArray[tier][monSlot].ivs) this.monArray[tier][monSlot].ivs[j] = 31;
		this.monArray[tier][monSlot].level = 100;
		this.monArray[tier][monSlot].happiness = 255;
		this.monArray[tier][monSlot].nature = 'Serious';
		this.monArray[tier][monSlot].item = false;
		return true;
	}

	gender(gender, monSlot, tier) {
		switch (toID(gender)) {
		case 'm':
		case 'boy':
		case 'male':
			this.monArray[tier][monSlot].gender = 'M';
			break;
		case 'f':
		case 'girl':
		case 'female':
			this.monArray[tier][monSlot].gender = 'F';
			break;
		case 'n':
		case 'genderless':
		case 'none':
			this.monArray[tier][monSlot].gender = 'N';
			break;
		case 'random':
		case 'rand':
		case 'r':
			this.monArray[tier][monSlot].gender = 'random';
			break;
		default:
			return false;
		}
		return true;
	}

	happiness(num, monSlot, tier) {
		if (num < 0 || num > 160) return false;
		this.monArray[tier][monSlot].happiness = lvl;
		return true;
	}

	level(lvl, monSlot, tier) {
		if (lvl < 1 || lvl > 100) return false;
		this.monArray[tier][monSlot].level = lvl;
		return true;
	}

	item(item, monSlot, tier) {
		item = Dex.mod(tier).getItem(toID(item));
		if (!item.exists) return false;
		this.monArray[tier][monSlot].item = item.name;
		return true;
	}

	ability(ability, monSlot, tier) {
		for (let i in Dex.getTemplate(this.monArray[tier][monSlot].species).abilities) {
			if (toID(Dex.getTemplate(this.monArray[tier][monSlot].species).abilities[i]) === toID(ability)) {
				this.monArray[tier][monSlot].ability = ability;
				return true;
			}
		}
		return false;
	}

	async addMove(move, self, monSlot, tier) {
		move = Dex.mod(tier).getMove(toID(move));
		if (!move.exists) return self.errorReply('The move "' + move.name + '" does not exist.'); //Only normal moves here.
		if (this.monArray[tier][monSlot].moves.length >= 4) return self.errorReply('You already have 4 moves.');
		if (Object.keys(Dex.mod(tier).getTemplate(toID(this.monArray[tier][monSlot].species)).learnset).indexOf(move.id) === -1) return self.errorReply(this.monArray[tier][monSlot].species + ' cannot learn ' + move.name + '.');
		if (this.monArray[tier][monSlot].moves.indexOf(move.name) > -1) return self.errorReply(this.monArray[tier][monSlot].species + ' already knows ' + move.name + '.');
		this.monArray[tier][monSlot].moves.push(move.name);
		writeTB();
		self.sendReply('Added the move ' + move.name + ' to your moves.');
	}

	removeMove(move, monSlot, tier) {
		move = Dex.mod(tier).getMove(toID(move));
		if (move.exists) {
			if (this.monArray[tier][monSlot].moves.length < 1) return false;
			if (this.monArray[tier][monSlot].moves.indexOf(move.name) === -1) return false;
			this.monArray[tier][monSlot].moves.splice(this.monArray[tier][monSlot].moves.indexOf(move.name), 1);
		    return true;
		} else {
		    return false;
		}
	}

	evs(ev, value, monSlot, tier) {
		ev = toID(ev);
		value = parseInt(value);
		if (isNaN(value)) return false;
		if (!this.monArray[tier][monSlot].evs[ev] && this.monArray[tier][monSlot].evs[ev] !== 0) return false;
		let currentVal = 0;
		for (let i in this.monArray[tier][monSlot].evs) {
			if (i === ev) continue;
			currentVal += this.monArray[tier][monSlot].evs[i];
		}
		if (value > 255 || value < 0 || currentVal + value > 510) return false;
		this.monArray[tier][monSlot].evs[ev] = value;
		return true;
	}

	ivs(iv, value, monSlot, tier) {
		iv = toID(iv);
		value = parseInt(value);
		if (isNaN(value)) return false;
		if (!this.monArray[tier][monSlot].ivs[iv] && this.monArray[tier][monSlot].ivs[iv] !== 0) return false;
		if (value < 0 || value > 31) return false;
		this.monArray[tier][monSlot].ivs[iv] = value;
		return true;
	}

	nature(nature, monSlot, tier) {
		nature = Dex.mod(tier).getNature(toID(nature));
		if (!nature.exists) return false;
		this.monArray[tier][monSlot].nature = nature.name;
		return true;
	}

	/*nickname(name, monSlot) {

	}*/

	getMonArray(slot, userid, tier) {
		if (!TB[userid].monArray[tier][slot - 1]) return "That slot does not have a mon!";
		return slot - 1;
	}
}
exports.TeamBuilder = TeamBuilder;

try {
	FS("config/chat-plugins/teambuilder.json").readIfExistsSync();
} catch (e) {
	FS("config/chat-plugins/teambuilder.json").write("{}", function (err) {
		if (err) {
			console.error('Error while loading teambuilder.json ' + err);
			TB = {};
		} else {
			console.log('config/chat-plugins/teambuilder.json is not found, making a new one');
		}
	});
}

try {
	let raw = JSON.parse(FS('config/chat-plugins/teambuilder.json').readSync());
	TB = {};
	for (let first in raw) {
		for (let u in raw[first].monArray) {
			TB[first] = new TeamBuilder(first, u);
		}
		for (let second in TB[first]) {
			TB[first][second] = raw[first][second];
		}
	}
} catch (e) {
	console.error('Error Loading Teambuilder.json ' + e.stack);
	TB = {};
}

exports.commands = {
	tb: 'teambuilder',
	teambuilder: {
		main: 'edit',
		edit(target, room, user) {
			if (!user.named) return this.errorReply(`You need a name!`);
			let [tier, slot] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier) return this.errorReply(`You need to choose a teambuilder tier. Available tiers are: ${tiersList.join(', ')}`);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!slot) slot = 0;
			if (!TB[user.id]) {
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			if (!TB[user.id].monArray[tier]) {
				let species = null;
				let ability = null;
				if (tierDexList[tier]) {
					species = Object.keys(tierDexList[tier])[0];
					ability = tierDexList[tier][species].abilities[0];
				}

				TB[user.id].monArray[tier] = [{
					gender: 'random',
					level: 100,
					happiness: 160,
					item: false,
					ability: ability,
					moves: [],
					species: toID(species),
					name: toID(species).charAt(0).toUpperCase() + toID(species).slice(1),
					evs: {
						hp: 0,
						atk: 0,
						def: 0,
						spa: 0,
						spd: 0,
						spe: 0,
					},
					nature: 'Serious',
					ivs: {
						hp: 31,
						atk: 31,
						def: 31,
						spa: 31,
						spd: 31,
						spe: 31,
					},
				}];
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			if (slot === 0) ++slot;
			let num = TB[user.id].getMonArray(slot, user.id, tier);
			if (isNaN(num)) return this.errorReply(num);
			TB[user.id].lastMonNum = num;
			writeTB();
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, num, tier)}`);
		},

		monlist(target, room, user) {
			if (!user.named) return this.errorReply('You need a name!');
			let tier = toID(target);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!TB[user.id]) {
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			let mons = [];
			let dex = tierDexList[tier];
			// exclude dex numbers for this to work.
			for (let u in dex) {
				if (dex[u] && dex[u].species && dex[u].species !== 'Missingno.' && dex[u].num < -200 && !toID(dex[u].species).includes('pokestar') && mons.indexOf(dex[u].species) === -1) mons.push(`<td>${dex[u].species}</td><td><button name="send" class="button" value="/dt ${toID(dex[u].species)}, ${tier}">Mon data</button></td>&nbsp;<td><button name="send" class="button" value="/teambuilder addmon ${tier}, ${toID(dex[u].species)}">Add to teambuilder as new mon</button></td>&nbsp;<td><button name="send" class="button" value="/teambuilder species ${tier}, ${toID(dex[u].species)}, ${(TB[user.id].lastMonNum + 1)}">Replace current mon slot</button></td>`);
			}
			let monListDisplay = '<table><tr><td>Pokemon</td><td><center>Data</center></td><td><center>Add as new</center></td><td><center>Replace current</center></td></tr>';
			mons = mons.sort();
			for (let u in mons) {
			    monListDisplay += `<tr>${mons[u]}</tr>`;
			}
			monListDisplay += `</table>`;
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, TB[user.id].lastMonNum, tier)}<br />${tier[0].toUpperCase() + tier.slice(1)} Pokemon list: <br />${monListDisplay}`);
		},

		abilityinfo(target, room, user) {
			let [tier, ability] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier || !ability) return this.errorReply(`You need a to choose both an ability and the tier the ability belongs to!`);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${abilityMenu(user.id, TB[user.id].lastMonNum, tier)}<br />Ability ${ability}: ${Dex.mod(tier).getAbility(ability).desc}`);
		},

		itemlist(target, room, user) {
			if (!user.named) return this.errorReply(`You need a name!`);
			let [tier, slot] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier || !slot) return this.errorReply(`You need a to choose both an ability and the tier the ability belongs to!`);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!TB[user.id]) {
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			let itemDisplay = '<table><tr><td><center>Item</center></td><td><center>Description</center></td><td><center>Add Button</center></td></tr>';
			let items = '';
			if (FS('../../data/mods/' + tier + '/items').readIfExistsSync()) items = require('../../data/mods/' + tier + '/items').BattleItems;
			if (!items.length) return;
			for (let u in items) {
				if (!items[u].gen && !items[u].num) itemDisplay += '<tr><td>' + Dex.mod(tier).getItem(u).name + '</td><td>' + Dex.mod(tier).getItem(u).desc + '</td><td>' + (slot >= 0 ? '<button name="send" class="button" value="/teambuilder item ' + tier + ', ' + u + ', ' + parseInt(slot) + '">Add item to mon slot ' + parseInt(slot) + '</button>' : '') + '</td></tr>';
			}
			itemDisplay += '</table>';
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, TB[user.id].lastMonNum, tier)}<br />${tier[0].toUpperCase() + tier.slice(1)} Item list: <br />${itemList.sort().join('<br />')}`);
		},

		addmon(target, room, user, connection, cmd) {
			let [tier, pkmn] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier || !pkmn) return this.parse(`/help teambuilder addmon`);
			tier = toID(tier);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!user.named) return this.errorReply('You need a name!');
			if (!TB[user.id]) {
				this.sendReply('Could not find your teambuilder pokemon, creating a new one...');
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			let mons = [];
			let dex = tierDexList[tier];
			// exclude dex numbers for this to work.
			for (let u in dex) {
				if (dex[u] && dex[u].species && dex[u].species !== 'Missingno.' && dex[u].num < -200 && !toID(dex[u].species).includes('pokestar') && mons.indexOf(dex[u].species) === -1) mons.push(toID(dex[u].species));
			}
			if (mons.indexOf(pkmn) === -1) return this.sendReplyBox(`That is not a mon in ${tier[0].toUpperCase() + tier.slice(1)}! Please use one of these mons: ${mons.join(', ')}`);
			if (TB[user.id].monArray[tier].length === 6) return this.errorReply(`You already have 6 pokemon!`);
			TB[user.id].monArray[tier][TB[user.id].monArray[tier].length] = {
				gender: 'random',
				level: 100,
				happiness: 160,
				item: false,
				ability: Dex.mod(tier).getTemplate(toID(pkmn)).abilities['0'],
				moves: [],
				species: toID(pkmn),
				name: toID(pkmn).charAt(0).toUpperCase() + toID(pkmn).slice(1),
				evs: {
					hp: 0,
					atk: 0,
					def: 0,
					spa: 0,
					spd: 0,
					spe: 0,
				},
				nature: 'Serious',
				ivs: {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31,
				},
			};
			TB[user.id].lastMonNum = TB[user.id].monArray[tier].length - 1;
			writeTB();
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, TB[user.id].monArray[tier].length - 1, tier)}`);
		},
		addmonhelp: [`/teambuilder addmon (tier), (pokemon), (mon slot) - adds a new mon to the teambuilder! Must be one number higher than your current amount of pokemon in the teambuilder.`],

		species(target, room, user) {
			if (!user.named) return this.errorReply(`You need a name!`);
			let [tier, pkmn, slot] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier || !pkmn) return this.parse(`/help teambuilder species`);
			tier = toID(tier);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!slot) slot = 0;
			if (!TB[user.id]) {
				slot = 0;
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			let mons = [];
			let dex = tierDexList[tier];
			// exclude dex numbers for this to work.
			for (let u in dex) {
				if (dex[u] && dex[u].species && dex[u].species !== 'Missingno.' && dex[u].num < -200 && !toID(dex[u].species).includes('pokestar') && mons.indexOf(dex[u].species) === -1) mons.push(toID(dex[u].species));
			}
			if (mons.indexOf(toID(pkmn)) === -1) return this.sendReplyBox(`That is not a mon in ${tier[0].toUpperCase() + tier.slice(1)}! Please use one of these mons: ${mons.join(', ')}`);
			if (parseInt(slot) === 0) slot = parseInt(slot) + 1;
			let num = TB[user.id].getMonArray(parseInt(slot), user.id, tier);
			if (isNaN(num)) return this.errorReply(num);
			TB[user.id].species(pkmn, num, tier);
			TB[user.id].lastMonNum = num;
			writeTB();
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, num, tier)}`);
		},
		specieshelp: [`/teambuilder species (tier), (pokemon), (mon slot) - changes the current species of the selected pokemon. Mon slot is 1-6`],

		removemon(target, room, user) {
			if (!user.named) return this.errorReply(`You need a name!`);
			let [tier, slot] = target.split(',').map(p => {
				return p.trim();
			});
			tier = toID(tier);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!TB[user.id]) {
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			if (slot === 0) ++slot;
			let num = TB[user.id].getMonArray(slot, user.id, tier);
			if (isNaN(num)) return this.errorReply(num);
			if (TB[user.id].monArray[tier].length === 1) return this.errorReply(`You need more than 1 pokemon to remove a pokemon!`);
			TB[user.id].monArray[tier].splice(num, 1);
			let next = num - 1;
			if (num === 0 && TB[user.id].monArray[tier].length !== 1) next = num + 1;
			if (num === 0 && TB[user.id].monArray[tier].length === 1) next = num;
			TB[user.id].lastMonNum = next;
			writeTB();
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, next, tier)}`);
		},

		stats: {
			main(target, room, user) {
				if (!user.named) return this.errorReply(`You need a name!`);
				let [tier, slot] = target.split(',').map(p => {
					return p.trim();
				});
				tier = toID(tier);
				if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
				if (!TB[user.id]) {
					this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
					TB[user.id] = new TeamBuilder(user.id, tier);
					writeTB();
					return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
				}
				if (slot === 0) ++slot;
				let num = TB[user.id].getMonArray(slot, user.id, tier);
				if (isNaN(num)) return this.errorReply(num);
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${statMenu(user.id, num, tier)}`);
			},

			ev(target, room, user) {
				if (!user.named) return this.errorReply(`You need a name!`);
				let [tier, stat, evs, slot] = target.split(',').map(p => {
					return p.trim();
				});
				if (!tier || !stat || !evs) return this.parse(`/help teambuilder stats ev`);
				tier = toID(tier);
				if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
				if (!slot) slot = 0;
				if (!TB[user.id]) {
					this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
					TB[user.id] = new TeamBuilder(user.id, tier);
					writeTB();
					return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
				}
				if (slot === 0) ++slot;
				let num = TB[user.id].getMonArray(slot, user.id, tier);
				if (isNaN(num)) return this.errorReply(num);
				TB[user.id].evs(stat, evs, num, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${statMenu(user.id, num, tier)}`);
			},
			evhelp: [`/teambuilder stats ev (tier), (stat), (ev amount), (mon slot) - sets specific evs for the selected mon. Mon slot is 1-6`],

			iv(target, room, user) {
				if (!user.named) return this.errorReply(`You need a name!`);
				let [tier, stat, ivs, slot] = target.split(',').map(p => {
					return p.trim();
				});
				if (!tier || !stat || !ivs) return this.parse(`/help teambuilder stats iv`);
				tier = toID(tier);
				if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
				if (!slot) slot = 0;
				if (!TB[user.id]) {
					this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
					TB[user.id] = new TeamBuilder(user.id, tier);
					writeTB();
					return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
				}
				if (slot === 0) ++slot;
				let num = TB[user.id].getMonArray(slot, user.id, tier);
				if (isNaN(num)) return this.errorReply(num);
				TB[user.id].ivs(stat, ivs, num, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${statMenu(user.id, num, tier)}`);
			},
			ivhelp: [`/teambuilder stats iv (tier), (stat), (iv amount), (mon slot) - sets specific ivs for the selected mon. Mon slot is 1-6`],

			nature(target, room, user) {
				if (!user.named) return this.errorReply(`You need a name!`);
				let [tier, nature, slot] = target.split(',').map(p => {
					return p.trim();
				});
				if (!tier || !nature) return this.parse(`/help teambuilder stats nature`);
				tier = toID(tier);
				if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
				if (!slot) slot = 0;
				if (!TB[user.id]) {
					target = 0;
					this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
					TB[user.id] = new TeamBuilder(user.id, tier);
					writeTB();
					return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
				}
				if (slot === 0) ++slot;
				let num = TB[user.id].getMonArray(slot, user.id, tier);
				if (isNaN(num)) return this.errorReply(num);
				TB[user.id].nature(nature, num, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${statMenu(user.id, num, tier)}`);
			},
			naturehelp: [`/teambuilder stats nature (tier), (nature), (mon slot) - sets a nature for the selected mon. Mon slot is 1-6`],
		},

		ability(target, room, user) {
			if (!user.named) return this.errorReply(`You need a name!`);
			let [tier, ability, slot] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier || !ability) return this.parse(`/help teambuilder ability`);
			tier = toID(tier);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!slot) slot = 0;
			if (!TB[user.id]) {
				slot = 0;
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			if (slot === 0) ++slot;
			let num = TB[user.id].getMonArray(slot, user.id, tier);
			if (isNaN(num)) return this.errorReply(num);
			if (toID(ability) === 'blank') return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${abilityMenu(user.id, num, tier)}`);
			TB[user.id].ability(ability, num, tier);
			writeTB();
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${abilityMenu(user.id, num, tier)}`);
		},
		abilityhelp: [`/teambuilder ability (tier), (ability), (mon slot) - sets an ability from the specified tier that the mon is able to use. Mon slot is 1-6`],

		move(target, room, user) {
			if (!user.named) return this.errorReply(`You need a name!`);
			let [tier, move, slot] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier || !move) return this.parse(`/help teambuilder move`);
			tier = toID(tier);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!slot) slot = 0;
			if (!TB[user.id]) {
				slot = 0;
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			if (slot === 0) ++slot;
			let num = TB[user.id].getMonArray(slot, user.id, tier);
			if (isNaN(num)) return this.errorReply(num);
			let display = '<table><tr><td>Moves</td><td><center>Description</center></td><td><center></center>Add Button</td>';
			let learnset = Dex.mod(tier).getTemplate(toID(TB[user.id].monArray[tier][num].species)).learnset;
			if (!learnset) return this.errorReply(`${toID(TB[user.id].monArray[tier][num].species)} does not seem to have a learnset. Make sure there is a learnset file for this format and includes every mon.`);
			learnset = Object.keys(learnset).sort();
			for (let u of learnset) {
				display += '<tr><td>' + Dex.mod(tier).getMove(u).name + '</td><td>' + Dex.mod(tier).getMove(u).shortDesc + '</td><td><button name="send" class="button" value="/teambuilder move ' + tier + ', ' + Dex.mod(tier).getMove(u).id + ', ' + (num + 1) + '">Add to ' + TB[user.id].monArray[tier][num].species + '</button></td></tr>';
			}
			display += '</table>';
			if (toID(move) === 'blank') return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${moveMenu(user.id, num, tier)}<br />${display}`);
			TB[user.id].addMove(move, this, num, tier);
			writeTB();
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${moveMenu(user.id, num, tier)}<br />${display}`);
		},
		movehelp: [`/teambuilder move (tier), (move), (mon slot) - sets a move from the mon's repesctive tier. Mon slot is 1-6`],

		removemove(target, room, user) {
			if (!user.named) return this.errorReply(`You need a name!`);
			let [tier, move, slot] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier || !move) return this.parse(`/help teambuilder removemove`);
			tier = toID(tier);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!slot) slot = 0;
			if (!TB[user.id]) {
				slot = 0;
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			if (slot === 0) ++slot;
			let num = TB[user.id].getMonArray(slot, user.id, tier);
			if (isNaN(num)) return this.errorReply(num);
			let display = '';
			let learnset = Dex.mod(tier).getTemplate(toID(TB[user.id].monArray[tier][num].species)).learnset;
			learnset = Object.keys(learnset).sort();
			for (let u of learnset) {
				display += 'Move: ' + Dex.mod(tier).getMove(u).name + ' Description: ' + Dex.mod(tier).getMove(u).shortDesc + ' <button name="send" class="button" value="/teambuilder move ' + tier + ', ' + Dex.mod(tier).getMove(u).id + ', ' + (num + 1) + '">Add to ' + TB[user.id].monArray[tier][num].species + '</button><br /><br />';
			}
			TB[user.id].removeMove(toID(move), num, tier);
			writeTB();
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${moveMenu(user.id, num, tier)}<br />${display}`);
		},
		removemovehelp: [`/teambuilder removemove (tier), (move name), (mon slot) - removes a move from the selected mon in your teambuilder. Mon slot is 1-6.`],

		item(target, room, user) {
			if (!user.named) return this.errorReply(`You need a name!`);
			let [tier, item, slot] = target.split(',').map(p => {
				return p.trim();
			});
			if (!tier || !item) return this.parse(`/help teambuilder item`);
			tier = toID(tier);
			if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!item) return this.parse(`/help teambuilder item`);
			if (!slot) slot = 0;
			if (!TB[user.id]) {
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			if (slot === 0) ++slot;
			let num = TB[user.id].getMonArray(slot, user.id, tier);
			if (isNaN(num)) return this.errorReply(num);
			TB[user.id].item(toID(item), num, tier);
			writeTB();
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, num, tier)}`);
		},
		itemhelp: [`/teambuilder item (tier), (item), (mon slot) - sets an item from the specified tier. Mon slot is 1-6`],

		details: {
			main(target, room, user) {
				if (!user.named) return this.errorReply(`You need a name!`);
				let [tier, slot] = target.split(',').map(p => {
					return p.trim();
				});
				tier = toID(tier);
				if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
				if (!slot) slot = 0;
				if (!TB[user.id]) {
					this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
					TB[user.id] = new TeamBuilder(user.id, tier);
					writeTB();
					return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
				}
				if (slot === 0) ++slot;
				let num = TB[user.id].getMonArray(slot, user.id, tier);
				if (isNaN(num)) return this.errorReply(num);
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${detailMenu(user.id, num, tier)}`);
			},

			gender(target, room, user) {
				if (!user.named) return this.errorReply(`You need a name!`);
				if (!target) return this.parse(`/help teambuilder details gender`);
				let [tier, gender, slot] = target.split(',').map(p => {
					return p.trim();
				});
				if (!tier || !gender) return this.parse(`/help teambuilder details gender`);
				tier = toID(tier);
				if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
				if (!tier || !gender) return this.parse(`/help teambuilder details gender`);
				if (!slot) slot = 0;
				if (!TB[user.id]) {
					this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
					TB[user.id] = new TeamBuilder(user.id, tier);
					writeTB();
					return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
				}
				if (slot === 0) ++slot;
				let num = TB[user.id].getMonArray(slot, user.id, tier);
				if (isNaN(num)) return this.errorReply(num);
				TB[user.id].gender(gender, num, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${detailMenu(user.id, num, tier)}`);
			},
			genderhelp: [`/teambuilder details gender (tier), (M/F/N/Random), (mon slot) - sets a gender for the selected mon. Mon slot is 1-6`],

			level(target, room, user) {
				if (!user.named) return this.errorReply(`You need a name!`);
				if (!target) return this.parse(`help teambuilder details level`);
				let [tier, level, slot] = target.split(',').map(p => {
					return p.trim();
				});
				if (!tier || !level) return this.parse(`/help teambuilder details level`);
				tier = toID(tier);
				if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
				if (!slot) slot = 0;
				if (!TB[user.id]) {
					this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
					TB[user.id] = new TeamBuilder(user.id, tier);
					writeTB();
					return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, slot, tier)}`);
				}
				if (slot === 0) ++slot;
				let num = TB[user.id].getMonArray(slot, user.id, tier);
				if (isNaN(num)) return this.errorReply(num);
				TB[user.id].level(level, num, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${detailMenu(user.id, num, tier)}`);
			},
			levelhelp: [`/teambuilder details level (tier), (level), (mon slot) - sets a specific level for the selected mon. Mon slot is 1-6`],

			happiness(target, room, user) {
				if (!user.named) return this.errorReply(`You need a name!`);
				if (!target) return this.parse(`/help teambuilder details happiness`);
				let [tier, hap, slot] = target.split(',').map(p => {
					return p.trim();
				});
				if (!tier || !hap) return this.parse(`/help teambuilder details happiness`);
				tier = toID(tier);
				if (!tiersList.includes(tier)) return this.errorReply(`${toID(tier)} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
				if (!slot) slot = 0;
				if (!TB[user.id]) {
					this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
					TB[user.id] = new TeamBuilder(user.id, tier);
					writeTB();
					return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
				}
				if (slot === 0) ++slot;
				let num = TB[user.id].getMonArray(slot, user.id, tier);
				if (isNaN(num)) return this.errorReply(num);
				TB[user.id].happiness(hap, num, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${detailMenu(user.id, num, tier)}`);
			},
			happinesshelp: [`/teambuilder details happiness (tier), (happiness number), (mon slot) - sets a happiness for the selected mon. Mon slot is 1-6`],
		},
		export(target, room, user) {
			let tier = toID(target);
			if (!tiersList.includes(tier)) return this.errorReply(`${tier} is not a custom teambuilder tier. Available tiers: ${tiersList.join(',')}`);
			if (!TB[user.id]) {
				this.sendReply(`Could not find your teambuilder pokemon, creating a new one...`);
				TB[user.id] = new TeamBuilder(user.id, tier);
				writeTB();
				return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuilder\n|pagehtml|${buildMenu(user.id, 0, tier)}`);
			}
			return user.send(`>view-teambuilder\n|init|html\n|title|${tier[0].toUpperCase() + tier.slice(1)} Teambuiler\n|pagehtml|${buildMenu(user.id, TB[user.id].lastMonNum, tier)}<br /><strong>Teambuilder team</strong>:<br/><br/><div style="width: 500px; overflow-x: scroll;" class="textbox chartinput">${Dex.packTeam(TB[user.id].monArray[tier])}</div><br/><br/>Paste the above into the import team section in teambuilder.`);
		},
		'': 'help',
		help(target, room, user) {
			this.parse(`/help teambuilder`);
		},
	},
	teambuilderhelp: [
        `|raw|Custom Meta Teambuilder created by Volco:
        /teambuilder edit (tier), (mon slot) - Edit a mon in the teambuiler. Mon slot is 1-6
        /teambuilder monlist (tier) - displays the list of usable pokemon for the chosen custom tier.
        /teambuilder itemlist (tier) - displays the item list of the chosen custom tier.
        /teambuilder addmon (tier), (mon species), (current team count plus 1) - Adds a new mon to the teambuilder. Example: /teambuilder addmon fakeMonName, 2.
        /teambuilder removemon (tier), (mon slot) - Removes a mon from the teambuilder with the selected number. Mon slot is 1-6. Note: Cannot remove if only 1 mon left!
        /teambuilder details main (tier), (mon slot) - Pulls up detail menu to be editted. Mon slot is 1-6.
        /teambuilder stats main (tier), (mon slot) - Pulls up stat menu to be editted. Mon slot is 1-6.
        /teambuilder moves (tier), (name), (mon slot) - Sets a move for the selected mon. Mon slot is 1-6.
        /teambuilder ability (tier), (name), (mon slot) - Sets an ability for the selected mon. Mon slot is 1-6.
        /teambuilder species (tier), (mon species), (mon slot) - Change the species of the selected mon. Mon slot is 1-6.
        /teambuilder item (tier), (item), (mon slot)  - Set an item for the selected mon. Mon slot is 1-6.
        /teambuilder export (tier) - Exports your team to so you can import it to the real teambuilder client`],
};
