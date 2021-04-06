/**
 * Digimon Plugin for Digimon Showdown
 * Programmed by AlfaStorm & Ashely the Pikachu
 * With contributions from mathfreak231, fliegenfuerst & Slayer95
 **/

'use strict';
const https = require('https');

const colorTable = {
	Red: ['#A60B0B', '#E24242', '#EC8484'],
	Blue: ['#0B0BA6', '#6464FF', '#94DBEE'],
	Yellow: ['#A68C21', '#FFD733', '#FFFF99'],
	Green: ['#0B7A0B', '#11BB11', '#64D364'],
	Black: ['#2C2C2C', '#858585', '#BBBBBB'],
	Brown: ['#704214', '#A52A2A', '#CC9966'],
	Purple: ['#682A68', '#A040A0', '#C183C1'],
	Gray: ['#787887', '#B8B8D0', '#D1D1E0'],
	White: ['#929292', '#E3CED0', '#FFFFFF'],
	Pink: ['#9B6470', '#EE99AC', '#F4BDC9'],
};

function getSpecies(digimon) {
	switch (digimon.name) {
	case 'Meicrackmon VM':
		return 'Meicrackmon [Vicious Mode]';
	case 'Cherubimon Evil':
		return 'Cherubimon [Evil]';
	case 'Cherubimon Good':
		return 'Cherubimon [Good]';
	case 'MetalGreymon Vaccine':
		return 'MetalGreymon [Vaccine]';
	case 'MetalGreymon Virus':
		return 'MetalGreymon [Virus]';
	default:
		return digimon.name;
	}
}

function getTypeChart(digimon) {
	const dex = Dex;
	const weaknesses = [];
	const resistances = [];
	const immunities = [];
	for (const type in dex.data.TypeChart) {
		const notImmune = dex.getImmunity(type, digimon);
		if (notImmune) {
			const typeMod = dex.getEffectiveness(type, digimon);
			switch (typeMod) {
			case 1:
				weaknesses.push(type);
				break;
			case 2:
				weaknesses.push("<b>" + type + "</b>");
				break;
			case 3:
				weaknesses.push("<b><i>" + type + "</i></b>");
				break;
			case -1:
				resistances.push(type);
				break;
			case -2:
				resistances.push("<b>" + type + "</b>");
				break;
			case -3:
				resistances.push("<b><i>" + type + "</i></b>");
				break;
			}
		} else {
			immunities.push(type);
		}
	}

	return {weaknesses, resistances, immunities};
}

function getTypeImgSrc(type) {
	return `https://play.pokemonshowdown.com/sprites/types/${type}.png`;
}

function getAbilityImgSrc(ability) {
	switch (ability) {
	case 'Vaccine':
		return 'https://play.pokemonshowdown.com/sprites/digimon/plugin-css/vaccine-icon.png';
	case 'Virus':
		return 'https://play.pokemonshowdown.com/sprites/digimon/plugin-css/virus-icon.png';
	case 'Data':
		return 'https://play.pokemonshowdown.com/sprites/digimon/plugin-css/data-icon.png';
	default:
		return '';
	}
}

function getBst(target) {
	const mod = Dex.mod('digimon');
	const newTargets = mod.dataSearch(target);
	const digimon = mod.getSpecies(newTargets[0].name);
	const bstnumber = digimon.baseStats.hp + digimon.baseStats.atk + digimon.baseStats.def + digimon.baseStats.spa + digimon.baseStats.spe + digimon.baseStats.spd;
	return bstnumber;
}

exports.commands = {
	fieldguide: 'digiprofile',
	digiprofile(target, room, user) {
		if (!this.runBroadcast()) return;
		target = toID(target);
		const mod = Dex.mod('digimon');
		if (!target) return this.parse(`/digipediahelp`);
		if (!mod.dataSearch(target, ['Pokedex'], true)) return this.errorReply(`That digimon does not exist.`);
		const newTargets = mod.dataSearch(target);
		const digimon = mod.getSpecies(newTargets[0].name);
		const color = digimon.color;
		const [firstcolor, secondcolor, thirdcolor] = colorTable[color];
		let display = `<div><center><table style="width: 480px; background-color: ${firstcolor}; border-color: ${thirdcolor};" border="2"><tbody><tr><td style="width: 159px; text-align: center;"><table style="width: 468px; background-color: #ffffff; border-color: ${secondcolor};" border="1"><tbody><tr><td style="width: 462px;"><span style="color: #333333;"><strong>Digimon Field Guide</strong></span></td>`;
		display += `</tr></tbody></table><table style="width: 468px; background-color: #ffffff; border-color: ${secondcolor}; margin-left: auto; margin-right: auto;" border="1"><tbody><tr><td style="width: 198px;"><span style="font-size: small; color: #333333;"><strong>${digimon.stage}</strong></span></td><td style="width: 131px;"><span style="font-size: small; color: #333333;"><strong>Stats</strong></span>`;
		display += `</td></tr><tr><td style="width: 198px;"><p><strong><img src="https://play.pokemonshowdown.com/sprites/digimon/sprites/digimonani/${target}.gif" title="${target}" width="56" height="56"></strong></p><p><strong><span style="color: #333333;">${getSpecies(digimon)} </span></strong></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><p style="text-align: left;">`;
		display += `<span style="color: #333333;"><strong><span style="font-size: small;">Type: </span></strong><span style="font-size: small;">${digimon.types.join(', ')}</span></span></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><p style="text-align: left;"><span style="color: #333333;"><strong><span style="font-size: small;">Ability:</span></strong><span style="font-size: small;"> ${digimon.abilities[0]}</span>`;
		let templates = mod.getSpecies(target);
		templates = mod.getSpecies(templates.baseSpecies);
		let sigmove = Object.keys(mod.getLearnsetData(templates.id).learnset);
		sigmove = sigmove.map(id => mod.getMove(id).name);
		sigmove = sigmove[sigmove.length - 2];
		const bstdigimon = getBst(target);
		display += `</span></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><p style="text-align: left;"><span style="color: #333333;"><strong><span style="font-size: small;">Signature: </span></strong><span style="font-size: small;">${sigmove}</span></span></p></td><td style="text-align: left; width: 131px;"><p style="text-align: center;"><span style="color: #ff0000;"><strong>`;
		display += `<span style="font-size: small;">HP</span></strong>:</span><span style="font-size: small;"><span style="font-size: small;"><span style="color: #ff0000;"> ${digimon.baseStats.hp}</span><br><span style="color: #f08030;"><strong><span style="font-size: small;">ATK</span></strong>: ${digimon.baseStats.atk}</span><br><span style="color: #f8d030;"><strong>DEF</strong></span><span style="font-size: small;"><span style="color: #f8d030;">: ${digimon.baseStats.def}</span>`;
		display += `<br><span style="color: #6890f0;"><strong>SPA</strong></span><span style="font-size: small;"><span style="color: #6890f0;">: ${digimon.baseStats.spa}</span><br><span style="color: #78c850;"><strong>SPD</strong></span><span style="font-size: small;"><span style="color: #78c850;">: ${digimon.baseStats.spd}</span><br><span style="color: #f85888;"><strong>SPE</strong></span><span style="font-size: small;"><span style="color: #f85888;">: ${digimon.baseStats.spe}</span>`;
		display += `<br /></span></span></span></span></span></span></p><p style="text-align: center;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="color: #f85888;"><strong><font color="Black">BST</strong><font color="black">: ${bstdigimon}</span></span></span></span></span></span></span></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;">`;
		display += `<p><span style="color: #333333;"><strong style="font-size: small;">Height</strong><span style="font-size: small;">: ${digimon.heightm} m</span></span></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><span style="font-size: small; color: #333333;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;">`;
		display += `<span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><strong><span style="font-size: small;"><span style="font-size: small;">Weight:</span></span></strong><span style="font-size: small;"> ${digimon.weightkg} kg</span></span></span></span></span></span></span></span><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><span style="font-size: small; color: #333333;">`;
		display += `<span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><strong><span style="font-size: small;">Color:</span></strong><span style="font-size: small;"> ${digimon.color}</span>`;

		const {weaknesses, immunities, resistances} = getTypeChart(digimon);

		display += `</span></span></span></span></span></span></span></td></tr></tbody></table><table style="height: 207px; background-color: #ffffff; border-color: ${secondcolor}; margin-left: auto; margin-right: auto;" border="1" width="466"><tbody><tr><td style="width: 456px;"><span style="color: #333333; font-size: small;"><strong>Type Interactions</strong></span><hr style="border-top: 1px solid ${secondcolor}; background: transparent;">`;
		display += `<span style="color: #333333; font-size: small;"><strong>Weaknesses<br></strong>${(weaknesses.join(', ') || '<font color=#999999>None</font>')}<strong><br>Resistances<br></strong>${(resistances.join(', ') || '<font color=#999999>None</font>')}<strong><br>Immunities<br></strong>${(immunities.join(', ') || '<font color=#999999>None</font>')}</span></td></tr><tr><td style="text-align: center; width: 456px;"><span style="color: #333333; font-size: small;"><strong><strong><strong><strong>Move Pool</strong></strong></strong></strong></span>`;
		let template = mod.getSpecies(target);
		template = mod.getSpecies(template.baseSpecies);
		let move = Object.keys(mod.getLearnsetData(template.id).learnset);
		move = move.map(id => mod.getMove(id).name);
		let movestring = 0;
		movestring = move.join(', ');
		display += `<hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><span style="color: #333333; font-size: small;">${movestring}</span></td></tr></tbody></table></td></tr></tbody></table></center></div>`;

		return this.sendReplyBox(display);
	},
	digiprofilehelp: ['/digipedia [digimon] - Gives information on the digimon selected.'],

	digisearchdisplay: 'digipedia',
	digisearch: 'digipedia',
	digimonsearch: 'digipedia',
	searchchange: 'digipedia',
	digipedia(target, room, user, connection, cmd) {
		room = this.requireRoom();
		const mod = Dex.mod('digimon');
		/*
		/digimonsearch Section:value, Section:value
		/digisearchdisplay digimon
		*/
		if (cmd !== 'digisearchdisplay') user.lastDigiSearch = target;
		const change = !!target || cmd === 'searchchange';
		const choices = {
			alphabetical: 'abcdefghijklmnopqrstuvwxyz'.split(''),
			stage: ['Fresh', 'In-Training', 'Rookie', 'Champion', 'Ultimate', 'Mega', 'X-Evolution'],
			type: Object.keys(Dex.data.TypeChart),
			color: ['Red', 'Blue', 'Yellow', 'Green', 'Black', 'Brown', 'Purple', 'Gray', 'White', 'Pink'],
			ability: ['Vaccine', 'Virus', 'Data'],
		};
		let menu = `<div class="infobox"><center><strong>Digimon Search</strong></center><br/>`;
		if (cmd !== 'digisearchdisplay') {
			target = target.split(',').map(x => x.trim());
			for (const type in choices) {
				menu += `<div><summary>${type.substring(0, 1).toUpperCase() + type.substring(1)}</summary>`;
				for (let i = 0; i < choices[type].length; i++) {
					let newTarget = false;
					if (target.indexOf(type + ':' + choices[type][i]) > -1) {
						newTarget = target.slice(0);
						newTarget.splice(newTarget.indexOf(type + ':' + choices[type][i]), 1).join(',');
					}
					menu += `<button class="button" name="send" value="${newTarget ? `/searchchange ${newTarget}" style="background: #4286f4"` : `/searchchange ${target.join(',')}${change ? `,` : ``}${type}:${choices[type][i]}"`}>${choices[type][i]}</button>`;
				}
				menu += `</div>`;
			}
			if (toID(target.join(''))) {
				// Show found digimon
				const reqs = {alphabetical: '', stage: '', type: '', color: '', ability: ''};
				let invalidSearch = false;
				target.map(y => {
					if (invalidSearch) return y;
					y = y.split(':');
					if (choices[y[0]] && choices[y[0]].includes(y[1])) {
						if (reqs[y[0]]) {
							invalidSearch = true;
							return y.join(':');
						}
						reqs[y[0]] = y[1];
					}
					return y.join(':');
				});
				if (invalidSearch) {
					menu += `No digimon were found. (Your search was invalid)</div>`;
					return user.sendTo(room, `${change ? `|uhtmlchange|cs${user.id}|` : `|uhtml|cs${user.id}|`}${menu}`);
				}
				menu += `<center><div style='max-height: 300px; overflow-y: scroll;'>`;
				let foundDigimon = 0;
				for (const digimon in mod.data.Pokedex) {
					const template = mod.getSpecies(digimon);
					if (template.num > -2000 || template.num < -3100) continue;
					if (reqs.alphabetical && !template.id.startsWith(reqs.alphabetical)) continue;
					if (reqs.stage && reqs.stage !== template.stage) continue;
					if (reqs.type && !template.types.includes(reqs.type)) continue;
					if (reqs.color && reqs.color !== template.color) continue;
					if (reqs.ability && reqs.ability !== template.abilities[0]) continue;
					// Valid
					foundDigimon++;
					const digiParts = getSpecies(template).split(' ', 2);
					const first = digiParts[0];
					const second = (digiParts.length >= 2 ? digiParts[1] : '');

					const typeImages = template.types.map(getTypeImgSrc);
					const type1 = typeImages[0];
					const type2 = typeImages.length >= 2 ? typeImages[1] : '';
					const type3 = typeImages.length >= 3 ? typeImages[2] : '';

					const ability = getAbilityImgSrc(template.abilities[0]);

					if (!template.types[1]) {
						menu += `<button class="button" name="send" value="/digisearchdisplay ${template.id}"><table style="width: 135px; background-color: #011f55; border-color: #008dc5; float: left;" border="2"><tbody><tr>`;
						menu += `<td style="width: 135px; text-align: center;"><table style="width: 123px; background-color: #ffffff; border-color: #011f55; float: left;" border="1"><tbody><tr style="height: 17px;">`;
						menu += `<td style="height: 17px; text-align: center;"><strong><img style="float: left;" src="${type1}">`;
						menu += `<img style="float: right;" src="${ability}"><br></strong></td></tr><tr style="height: 98px;">`;
						menu += `<td style="width: 122px; height: 98px;"><strong><img src="https://play.pokemonshowdown.com/sprites/digimon/sprites/digimon/${template.id}.png"><br><span style="font-size: xx-small; color: #000000;">${template.name}<br></span></strong></td></tr></tbody></table></td></tr></tbody></table> `;
					} else if (!template.types[2] && (template.id === 'meicrackmonvm' || template.id === 'cherubimonevil' || template.id === 'cherubimongood')) {
						menu += `<button class="button" name="send" value="/digisearchdisplay ${template.id}"><table style="width: 135px; background-color: #011f55; border-color: #008dc5; float: left;" border="2"><tbody><tr>`;
						menu += `<td style="width: 135px; text-align: center;"><table style="width: 123px; background-color: #ffffff; border-color: #011f55; float: left;" border="1"><tbody><tr style="height: 17px;">`;
						menu += `<td style="height: 17px; text-align: center;"><strong><img style="float: left;" src="${type1}"><img style="float: left;" src="${type2}">`;
						menu += `<img style="float: right;" src="${ability}"><br></strong></td></tr><tr style="height: 98px;">`;
						menu += `<td style="width: 122px; height: 98px;"><strong><img src="https://play.pokemonshowdown.com/sprites/digimon/sprites/digimon/${template.id}.png"><br><span style="font-size: xx-small; color: #000000;">${first}<br>${second}<br></span></strong></td></tr></tbody></table></td></tr></tbody></table> `;
					} else if (!template.types[2]) {
						menu += `<button class="button" name="send" value="/digisearchdisplay ${template.id}"><table style="width: 135px; background-color: #011f55; border-color: #008dc5; float: left;" border="2"><tbody><tr>`;
						menu += `<td style="width: 135px; text-align: center;"><table style="width: 123px; background-color: #ffffff; border-color: #011f55; float: left;" border="1"><tbody><tr style="height: 17px;">`;
						menu += `<td style="height: 17px; text-align: center;"><strong><img style="float: left;" src="${type1}"><img style="float: left;" src="${type2}">`;
						menu += `<img style="float: right;" src="${ability}"><br></strong></td></tr><tr style="height: 98px;">`;
						menu += `<td style="width: 122px; height: 98px;"><strong><img src="https://play.pokemonshowdown.com/sprites/digimon/sprites/digimon/${template.id}.png"><br><span style="font-size: xx-small; color: #000000;">${template.name}<br></span></strong></td></tr></tbody></table></td></tr></tbody></table> `;
					} else if (template.id === 'metalgreymonvaccine' || template.id === 'metalgreymonvirus') {
						menu += `<button class="button" name="send" value="/digisearchdisplay ${template.id}"><table style="width: 135px; background-color: #011f55; border-color: #008dc5; float: left;" border="2"><tbody><tr>`;
						menu += `<td style="width: 135px; text-align: center;"><table style="width: 123px; background-color: #ffffff; border-color: #011f55; float: left;" border="1"><tbody><tr style="height: 17px;">`;
						menu += `<td style="height: 17px; text-align: center;"><strong><img style="float: left;" src="${type1}"><img style="float: left;" src="${type2}">`;
						menu += `<img style="float: left;" src="${type3}"><img style="float: right;" src="${ability}"><br></strong></td></tr><tr style="height: 98px;">`;
						menu += `<td style="width: 122px; height: 98px;"><strong><img src="https://play.pokemonshowdown.com/sprites/digimon/sprites/digimon/${template.id}.png"><br><span style="font-size: xx-small; color: #000000;">${first}<br>${second}<br></span></strong></td></tr></tbody></table></td></tr></tbody></table> `;
					} else {
						menu += `<button class="button" name="send" value="/digisearchdisplay ${template.id}"><table style="width: 135px; background-color: #011f55; border-color: #008dc5; float: left;" border="2"><tbody><tr>`;
						menu += `<td style="width: 135px; text-align: center;"><table style="width: 123px; background-color: #ffffff; border-color: #011f55; float: left;" border="1"><tbody><tr style="height: 17px;">`;
						menu += `<td style="height: 17px; text-align: center;"><strong><img style="float: left;" src="${type1}"><img style="float: left;" src="${type2}">`;
						menu += `<img style="float: left;" src="${type3}"><img style="float: right;" src="${ability}"><br></strong></td></tr><tr style="height: 98px;">`;
						menu += `<td style="width: 122px; height: 98px;"><strong><img src="https://play.pokemonshowdown.com/sprites/digimon/sprites/digimon/${template.id}.png"><br><span style="font-size: xx-small; color: #000000;">${template.name}<br></span></strong></td></tr></tbody></table></td></tr></tbody></table> `;
					}
				}
				if (!foundDigimon) menu += `No digimon were found.`;
				menu += `</div></div></center>`;
			}
		} else {
			menu += `<button class="button" name="send" value="${user.lastDigiSearch ? `/digipedia ${user.lastDigiSearch}` : `/digipedia`}">Back</button><br/>`;
			const digimons = mod.dataSearch(target);
			if (!digimons) {
				menu += `The digimon "${toID(target)}" does not exist.</div>`;
				return user.sendTo(room, `${change ? `|uhtmlchange|cs${user.id}|` : `|uhtml|cs${user.id}|`}${menu}`);
			}
			const newTargets = mod.dataSearch(target);
			const digimon = mod.getSpecies(newTargets[0].name);
			const color = digimon.color;
			const [firstcolor, secondcolor, thirdcolor] = colorTable[color];
			menu += `<div><center><table style="width: 480px; background-color: ${firstcolor}; border-color: ${thirdcolor};" border="2"><tbody><tr><td style="width: 159px; text-align: center;"><table style="width: 468px; background-color: #ffffff; border-color: ${secondcolor};" border="1"><tbody><tr><td style="width: 462px;"><span style="color: #333333;"><strong>Digimon Field Guide</strong></span></td>`;
			menu += `</tr></tbody></table><table style="width: 468px; background-color: #ffffff; border-color: ${secondcolor}; margin-left: auto; margin-right: auto;" border="1"><tbody><tr><td style="width: 198px;"><span style="font-size: small; color: #333333;"><strong>${digimon.stage}</strong></span></td><td style="width: 131px;"><span style="font-size: small; color: #333333;"><strong>Stats</strong></span>`;
			menu += `</td></tr><tr><td style="width: 198px;"><p><strong><img src="https://play.pokemonshowdown.com/sprites/digimon/sprites/digimonani/${target}.gif" title="${target}" width="56" height="56"></strong></p><p><strong><span style="color: #333333;">${getSpecies(digimon)} </span></strong></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><p style="text-align: left;">`;
			menu += `<span style="color: #333333;"><strong><span style="font-size: small;">Type: </span></strong><span style="font-size: small;">${digimon.types.join(', ')}</span></span></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><p style="text-align: left;"><span style="color: #333333;"><strong><span style="font-size: small;">Ability:</span></strong><span style="font-size: small;"> ${digimon.abilities[0]}</span>`;
			let templates = mod.getSpecies(target);
			if (templates.basename) templates = mod.getSpecies(templates.basename);
			let sigmove = Object.keys(mod.getLearnsetData(templates.id).learnset);
			sigmove = sigmove.map(id => mod.getMove(id).name);
			sigmove = sigmove[sigmove.length - 2];
			const bstdigimon = getBst(target);
			menu += `</span></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><p style="text-align: left;"><span style="color: #333333;"><strong><span style="font-size: small;">Signature: </span></strong><span style="font-size: small;">${sigmove}</span></span></p></td><td style="text-align: left; width: 131px;"><p style="text-align: center;"><span style="color: #ff0000;"><strong>`;
			menu += `<span style="font-size: small;">HP</span></strong>:</span><span style="font-size: small;"><span style="font-size: small;"><span style="color: #ff0000;"> ${digimon.baseStats.hp}</span><br><span style="color: #f08030;"><strong><span style="font-size: small;">ATK</span></strong>: ${digimon.baseStats.atk}</span><br><span style="color: #f8d030;"><strong>DEF</strong></span><span style="font-size: small;"><span style="color: #f8d030;">: ${digimon.baseStats.def}</span>`;
			menu += `<br><span style="color: #6890f0;"><strong>SPA</strong></span><span style="font-size: small;"><span style="color: #6890f0;">: ${digimon.baseStats.spa}</span><br><span style="color: #78c850;"><strong>SPD</strong></span><span style="font-size: small;"><span style="color: #78c850;">: ${digimon.baseStats.spd}</span><br><span style="color: #f85888;"><strong>SPE</strong></span><span style="font-size: small;"><span style="color: #f85888;">: ${digimon.baseStats.spe}</span>`;
			menu += `<br /></span></span></span></span></span></span></p><p style="text-align: center;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="color: #f85888;"><strong><font color="Black">BST</strong><font color="black">: ${bstdigimon}</span></span></span></span></span></span></span></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;">`;
			menu += `<p><span style="color: #333333;"><strong style="font-size: small;">Height</strong><span style="font-size: small;">: ${digimon.heightm} m</span></span></p><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><span style="font-size: small; color: #333333;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;">`;
			menu += `<span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><strong><span style="font-size: small;"><span style="font-size: small;">Weight:</span></span></strong><span style="font-size: small;"> ${digimon.weightkg} kg</span></span></span></span></span></span></span></span><hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><span style="font-size: small; color: #333333;">`;
			menu += `<span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><span style="font-size: small;"><strong><span style="font-size: small;">Color:</span></strong><span style="font-size: small;"> ${digimon.color}</span>`;

			const {weaknesses, immunities, resistances} = getTypeChart(digimon);

			menu += `</span></span></span></span></span></span></span></td></tr></tbody></table><table style="height: 207px; background-color: #ffffff; border-color: ${secondcolor}; margin-left: auto; margin-right: auto;" border="1" width="466"><tbody><tr><td style="width: 456px;"><span style="color: #333333; font-size: small;"><strong>Type Interactions</strong></span><hr style="border-top: 1px solid ${secondcolor}; background: transparent;">`;
			menu += `<span style="color: #333333; font-size: small;"><strong>Weaknesses<br></strong>${(weaknesses.join(', ') || '<font color=#999999>None</font>')}<strong><br>Resistances<br></strong>${(resistances.join(', ') || '<font color=#999999>None</font>')}<strong><br>Immunities<br></strong>${(immunities.join(', ') || '<font color=#999999>None</font>')}</span></td></tr><tr><td style="text-align: center; width: 456px;"><span style="color: #333333; font-size: small;"><strong><strong><strong><strong>Move Pool</strong></strong></strong></strong></span>`;
			let template = mod.getSpecies(target);
			if (template.basename) template = mod.getSpecies(template.basename);
			let move = Object.keys(mod.getLearnsetData(template.id).learnset);
			move = move.map(id => mod.getMove(id).name);
			let movestring = 0;
			movestring = move.join(', ');
			menu += `<hr style="border-top: 1px solid ${secondcolor}; background: transparent;"><span style="color: #333333; font-size: small;">${movestring}</span></td></tr></tbody></table></td></tr></tbody></table></center></div>`;
		}
		return user.sendTo(room, `${change ? `|uhtmlchange|cs${user.id}|` : `|uhtml|cs${user.id}|`}${menu}`);
	},
	digipediahelp: ['/digimonsearch - sends a display to search for a list of digimon.'],

	digimovesearchdisplay: 'movedatabase',
	dms: 'movedatabase',
	digimovesearch: 'movedatabase',
	digimonmovesearch: 'movedatabase',
	movesearchchange: 'movedatabase',
	movedatabase(target, room, user, connection, cmd) {
		room = this.requireRoom();
		const mod = Dex.mod('digimon');
		/*
		/digimonsearch Section:value, Section:value
		/digisearchdisplay digimon
		*/
		if (cmd !== 'digimovesearchdisplay') user.lastDigiSearch = target;
		const change = !!target || cmd === 'movesearchchange';
		const choices = {
			alphabetical: 'abcdefghijklmnopqrstuvwxyz'.split(''),
			type: Object.keys(Dex.data.TypeChart),
			category: ['Status', 'Physical', 'Special'],
			signature: ['Signature', 'Not Signature'],
		};
		let menu = `<div class="infobox"><center><strong>Digimon Move Search</strong></center><br/>`;
		if (cmd !== 'digimovesearchdisplay') {
			target = target.split(',').map(x => x.trim());
			for (const type in choices) {
				menu += `<div><summary>${type.substring(0, 1).toUpperCase() + type.substring(1)}</summary>`;
				for (let i = 0; i < choices[type].length; i++) {
					let newTarget = false;
					if (target.indexOf(type + ':' + choices[type][i]) > -1) {
						newTarget = target.slice(0);
						newTarget.splice(newTarget.indexOf(type + ':' + choices[type][i]), 1).join(',');
					}
					menu += `<button class="button" name="send" value="${newTarget ? `/movesearchchange ${newTarget}" style="background: #4286f4"` : `/movesearchchange ${target.join(',')}${change ? `,` : ``}${type}:${choices[type][i]}"`}>${choices[type][i]}</button>`;
				}
				menu += `</div><br>`;
			}
			if (toID(target.join(''))) {
				// Show found digimon
				const reqs = {alphabetical: '', type: '', category: '', signature: ''};
				let invalidSearch = false;
				target.map(y => {
					if (invalidSearch) return y;
					y = y.split(':');
					if (choices[y[0]] && choices[y[0]].includes(y[1])) {
						if (reqs[y[0]]) {
							invalidSearch = true;
							return y.join(':');
						}
						reqs[y[0]] = y[1];
					}
					return y.join(':');
				});
				if (invalidSearch) {
					menu += `No digimon moves were found. (Your search was invalid)</div>`;
					return user.sendTo(room, `${change ? `|uhtmlchange|cs${user.userid}|` : `|uhtml|cs${user.userid}|`}${menu}`);
				}
				menu += `<center><div style='max-height: 300px; overflow-y: scroll;'>`;
				let foundDigimonMove = 0;
				for (const digimonmove in mod.data.Moves) {
					const digimove = mod.getMove(digimonmove);
					if (digimove.signature === true) digimove.signature = 'Signature';
					if (digimove.signature === false) digimove.signature = 'Not Signature';
					if (digimove.num > -100 || digimove.num < -400) continue;
					if (reqs.alphabetical && !digimove.id.startsWith(reqs.alphabetical)) continue;
					if (reqs.type && reqs.type !== digimove.type) continue;
					if (reqs.category && reqs.category !== digimove.category) continue;
					if (reqs.signature && reqs.signature !== digimove.signature) continue;
					// Valid
					foundDigimonMove++;
					menu += `<button class="button" name="send" value="/digimovesearchdisplay ${digimove.id}">${digimove.name}</button>&nbsp;`;
				}
				if (!foundDigimonMove) menu += `No digimon moves were found.`;
				menu += `</div></div></center>`;
			}
		} else {
			menu += `<button class="button" name="send" value="${user.lastDigiSearch ? `/movedatabase ${user.lastDigiSearch}` : `/movedatabase`}">Back</button><br/>`;
			const digimonsmove = mod.dataSearch(target);
			if (!digimonsmove) {
				menu += `The digimon "${toID(target)}" does not exist.</div>`;
				return user.sendTo(room, `${change ? `|uhtmlchange|cs${user.id}|` : `|uhtml|cs${user.id}|`}${menu}`);
			}
			const digimonmove = mod.getMove(target);
			const digimovetype = digimonmove.type;
			const typeimage = getTypeImgSrc(digimovetype);
			// let signature = '';
			// if (digimonmove.signature === 'Signature') signature = 'True';
			// if (digimonmove.signature === 'Not Signature') signature = 'False';
			menu += `<div><center><table style="width: 480px ; background-color: #011f55 ; border-color: #008dc5" border="2"><tbody><tr><td style="width: 159px ; text-align: center"><table style="width: 468px ; background-color: #f2faff ; border-color: #008dc5 ; margin-left: auto ; margin-right: auto" border="3"><tbody><tr><td style="width: 462px"><span style="color: #333333"><strong><img style="float: left" src="${typeimage}" width="32" height="14"><span style="color: black">Digimon Move Database<img style="float: right" src="${typeimage}" width="32" height="14"></span></strong></span>`;
			menu += `</td></tr></tbody></table><table style="width: 468px ; border-color: #008dc5 ; background-color: #ffffff" border="2"><tbody><tr><td style="width: 463px"><strong><span style="color: black">${digimonmove.name}</span></strong></td></tr></tbody></table><table style="border-color: #008dc5 ; background-color: #ffffff ; width: 468px" border="1"><tbody><tr><td style="width: 457px"><strong><span style="color: #008dc5">Type</span></strong><span style="color: black">: ${digimonmove.type}</span></td><td style="width: 457px"><strong><span style="color: #008dc5">Category</span></strong>`;
			menu += `<span style="color: black">: ${digimonmove.category}</span></td></tr><tr><td style="width: 457px"><strong><span style="color: #008dc5">Base Power</span></strong><span style="color: black">: ${digimonmove.basePower}</span></td><td style="width: 457px"><strong><span style="color: #008dc5">Accuracy</span></strong><span style="color: black">: ${digimonmove.accuracy}</span></td></tr><tr><td style="width: 457px"><strong><span style="color: #008dc5">Priority</span></strong>`;
			menu += `<span style="color: black">: ${digimonmove.priority}</span></td><td style="width: 457px"><strong><span style="color: #008dc5">Power Points</span></strong><span style="color: black">: ${digimonmove.pp}</span></td></tr></tbody></table><table style="width: 468px ; background-color: #edf8ff ; border-color: #008dc5" border="3"><tbody><tr><td style="width: 465px"><strong><span style="color: black">${digimonmove.desc}</span></strong></td></tr></tbody></table></td></tr></tbody></table></center></div>`;
		}
		return user.sendTo(room, `${change ? `|uhtmlchange|cs${user.id}|` : `|uhtml|cs${user.id}|`}${menu}`);
	},
	digimovesearchhelp: ['/digimovesearch - sends a display to search for a list of digimon moves.'],

	digiweak(target, room, user) {
		if (!target) return this.parse('/help weakness');
		if (!this.runBroadcast()) return;
		target = target.trim();
		const mod = Dex.mod('digimon');
		const targets = target.split(/ ?[,/] ?/);
		/** @type {{types: string[], [k: string]: any}} */
		let digimon = mod.getSpecies(targets[0]);
		const type1 = mod.getType(targets[0]);
		const type2 = mod.getType(targets[1]);
		const type3 = mod.getType(targets[2]);

		if (digimon.exists) {
			target = digimon.name;
		} else {
			const types = [];
			if (type1.exists) {
				types.push(type1.name);
				if (type2.exists && type2 !== type1) {
					types.push(type2.name);
				}
				if (type3.exists && type3 !== type1 && type3 !== type2) {
					types.push(type3.name);
				}
			}

			if (types.length === 0) {
				return this.sendReplyBox(Chat.html`${target} isn't a recognized type or digimon${Dex.gen > mod.gen ? ` in Gen ${mod.gen}` : ""}.`);
			}
			digimon = {types: types};
			target = types.join("/");
		}

		const weaknesses = [];
		const resistances = [];
		const immunities = [];
		for (const type in mod.data.TypeChart) {
			const notImmune = mod.getImmunity(type, digimon);
			if (notImmune) {
				const typeMod = mod.getEffectiveness(type, digimon);
				switch (typeMod) {
				case 1:
					weaknesses.push(type);
					break;
				case 2:
					weaknesses.push("<b>" + type + "</b>");
					break;
				case 3:
					weaknesses.push("<b><i>" + type + "</i></b>");
					break;
				case -1:
					resistances.push(type);
					break;
				case -2:
					resistances.push("<b>" + type + "</b>");
					break;
				case -3:
					resistances.push("<b><i>" + type + "</i></b>");
					break;
				}
			} else {
				immunities.push(type);
			}
		}

		const buffer = [];
		buffer.push(digimon.exists ? "" + target + ' (ignoring abilities):' : '' + target + ':');
		buffer.push('<span class="message-effect-weak">Weaknesses</span>: ' + (weaknesses.join(', ') || '<font color=#999999>None</font>'));
		buffer.push('<span class="message-effect-resist">Resistances</span>: ' + (resistances.join(', ') || '<font color=#999999>None</font>'));
		buffer.push('<span class="message-effect-immune">Immunities</span>: ' + (immunities.join(', ') || '<font color=#999999>None</font>'));
		this.sendReplyBox(buffer.join('<br />'));
	},
	'!dsprite': true,
	digisprite: 'dsprite',
	digimonsprite: 'dsprite',
	dsprite(target, room, user, connection, cmd) {
		room = this.requireRoom();
		if (!this.checkBroadcast()) return;
		if (!toID(target)) return this.sendReply('/digisprite [Digimon] - Allows you to view the sprite of a Digimon Showdown digimon');
		target = target.toLowerCase().split(',');
		const alt = '';
		const type = toID(target[1]);
		let sprite = target[0].trim();

		const mod = Dex.mod('digimon');
		if (mod.data.Pokedex[toID(sprite)]) {
			sprite = mod.data.Pokedex[toID(sprite)].name.toLowerCase();
		} else {
			return this.sendReply("There isn't any Digimon called '" + sprite + "'...");
		}

		const spritesFolder = type === 'back' ? '/sprites/digimon/sprites/digimonani-back/' : '/sprites/digimon/sprites/digimonani/';
		const reqOpts = {
			hostname: 'play.pokemonshowdown.com',
			path: `${spritesFolder}${sprite}${alt}.gif`,
			method: 'HEAD',
		};

		return new Promise((resolve, reject) => {
			https.request(reqOpts, res => {
				if (res.statusCode >= 200 && res.statusCode < 300) {
					return resolve(null);
				}
				return reject(new Error(`HTTP ${res.statusCode}`));
			}).setTimeout(5000).on('error', reject).end();
		}).then(() => {
			if (!this.runBroadcast()) return;
			this.sendReply(Chat.html`|raw|<img src="//play.pokemonshowdown.com${spritesFolder}${sprite}${alt}.gif">`);
			if (room) room.update();
		}, () => {
			if (!this.runBroadcast()) return;
			this.sendReply('The sprite for ' + sprite + alt + ' is unavailable.');
			if (room) room.update();
		});
	},
	digispritehelp: ['/digisprite [Digimon] - Allows you to view the sprite of a Digimon Showdown digimon.'],

	"!digicredits": true,
	digimoncredits: "digicredits",
	digicredits() {
		if (!this.runBroadcast()) return;
		const popup = `<font size="4"><u><strong>Digimon Plugins Credits:</strong></u></font><br />` +
			`<br />` +
			`<u><strong>Contributors:</u></strong><br />` +
			`- <strong>Ashley the Pikachu</strong> (Graphics Design, HTML, Coding, Development, Project Manager)<br />` +
			`- <strong>AlfaStorm</strong> (Coding, HTML, Functionality, Development)<br />` +
			`- <strong>Slayer95</strong> (Development, Refactor)<br />` +
			`- <strong>mathfreak231</strong> (Development, Assistance)<br />` +
			`- <strong>fliegenfuerst</strong> (Assistance, Ideas)<br />` +
			`- <strong>C733937 123</strong> (Jr. JavaScript Coder)<br />` +
			`- <strong>DJinntoTonic</strong> (Game Balance and Document Clean Uppe)<br />` +
			`- <strong>Fender</strong> (Client Coder)<br />` +
			`- <strong>Forrce</strong> (JavaScript Coder)<br />` +
			`- <strong>HoeenHero</strong> (JavaScript Coder)<br />` +
			`- <strong>Insist</strong> (Alpha Build Head Developer)<br />` +
			`- <strong>Kraken Mare</strong> (Javascript Coder)<br />` +
			`- <strong>Kris</strong> (Client Advice and Coder)<br />` +
			`- <strong>Meicoo</strong> (Move Animation Selector)<br />` +
			`- <strong>Paperlanty</strong> (Jr. Javascript and Code Reviewer)<br />` +
			`- <strong>Pokemonvortex</strong> (Spread Sheet Revisions, Coder)<br />` +
			`- <strong>Ruru</strong> (Jr. Javascript and Code Reviewer)<br />` +
			`- <strong>SaplingArcher</strong> (Jr. Javascript and Code Reviewer)<br />` +
			`- <strong>Volco</strong> (Javascript Coder, Client Code)<br />` +
			`- <strong>Waffaru</strong> (Jr. Javascript coder)<br />` +
			`- <strong>Alpha Ninja</strong> (Developer)<br />` +
			`- <strong>Dragotic</strong> (Developer)<br />`;
		this.sendReplyBox(popup);
	},
	digicreditshelp: ['/digicredits - Shows a list of all that contributed to the creation of these commands.'],

	playersguide: 'playerguide',
	digimonguide: 'playerguide',
	digimonplayerguide: 'playerguide',
	digiguide: 'playerguide',
	playerguide(target, room, user) {
		if (!this.runBroadcast()) return;
		const display = `|html|<center><table style="background-color: #ffffff; border-color: #111111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: white;">Digimon Showdown Players Guide</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;">[A Digimon Fan Game]</td></tr><tr><td style="text-align: center;"><strong><span style="font-size: small;">DIGIMON TYPES &amp;&nbsp;ABILITIES</span></strong><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" /><br />[Stat Hovering Does Not Work]</td></tr><tr><td style="text-align: center;"><table style="height: 28px; border-color: #111111; margin-left: auto; margin-right: auto;" border="0" width="267"><tbody><tr><td style="width: 94px; text-align: center;"><span style="font-size: small;"><a title="Digimon Showdown Type Chart" href="https://i.imgur.com/5P5Q8eF.png" target="_blank" rel="noopener"><strong>Types/Ability Chart</strong></a></span></td><td style="width: 82px;"><span style="font-size: small;"><strong><a href="https://i.imgur.com/TtTMfx5.png">Roster</a></strong></span></td><td style="text-align: center; width: 69px;"><span style="font-size: small;"><strong><a href="https://discord.gg/xGVJe6y" target="_blank" rel="noopener">Discord</a></strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="font-size: small;"><a href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t" target="_blank" rel="noopener">Digimon Showdown Credits</a></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: white;">Official Digimon Media</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="height: 26px; margin-left: auto; margin-right: auto;" border="0" width="265"><tbody><tr><td style="width: 119px;"><a href="https://wikimon.net/List_of_Video_Games" target="_blank" rel="noopener"><span style="font-size: small;">Game List</span></a></td><td style="width: 130px;"><a href="https://wikimon.net/Category:Anime" target="_blank" rel="noopener"><span style="font-size: small;">Anime List</span></a></td></tr></tbody></table></td></tr></tbody></table></center>`;
		this.sendReply(display);
	},
	playerguidehelp: ['/playerguide - Shows a guide for the digimon showdown metagame.'],

	digi() {
		this.parse('/help digi');
	},
	digihelp: ['These are the commands for the Digimon Showdown chat-plugin:',
		'/digiprofile [digimon] - Gives information on the digimon selected.',
		'/digipedia - Shows a list of all selected digimon.',
		'/digimovesearch - Shows a list of all selected digimon moves.',
		'/digiweak [digimon] - Shows the weaknesses, resistances, and immunities of a digimon.',
		'/digisprite [digimon] - Allows you to view the sprite of a Digimon Showdown digimon.',
		'/digicredits - Shows a list of all that contributed to the creation of these commands.',
		'/playerguide - Shows the digimon showdown players guide.',
		'/digihelp - Shows the digimon help commands.'],
};
