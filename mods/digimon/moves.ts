export const Moves: {[k: string]: ModdedMoveData} = {
	// Normal & Fighting Moves //
	"machjab": {
		num: -100,
		accuracy: 90,
		basePower: 0,
		damage: 20,
		category: "Physical",
		desc: "Deals 20 HP of damage to the target. Contact move.",
		shortDesc: "20 HP of DMG to Target, Contact Move.",
		id: "machjab",
		name: "Mach Jab",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sonicboom", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	"sonicjab": {
		num: -101,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Priority +1, Contact move.",
		shortDesc: "Priority +1, Contact move.",
		id: "sonicjab",
		name: "Sonic Jab",
		pp: 30,
		priority: 1,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "quickattack", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	"tremor": {
		num: -102,
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		desc: "30% chance to Flinch all adjacent foe(s).",
		shortDesc: "30% chance to Flinch adjacent foe(s).",
		id: "tremor",
		name: "Tremor",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "rockslide", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Rock",
	},
	"dynamitekick": {
		num: -103,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
		shortDesc: "Destroys screens, Contact Move.",
		id: "dynamitekick",
		name: "Dynamite Kick",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "brickbreak", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			if (pokemon.runImmunity('Fighting')) {
				pokemon.side.removeSideCondition('reflect');
				pokemon.side.removeSideCondition('lightscreen');
				pokemon.side.removeSideCondition('auroraveil');
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	"spinattack": {
		num: -104,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "No additional effect, Contact move.",
		shortDesc: "No additional effect, Contact move.",
		id: "spinattack",
		name: "Spin Attack",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "rapidspin", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	"megatonpunch": {
		num: -105,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		desc: "10% to Flinch the target, Contact move.",
		shortDesc: "10% to Flinch the target, Contact move.",
		id: "spinattack",
		name: "Megaton Punch",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "megapunch", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
	},
	spiraldriver: {
		num: -106,
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage. Contact move.",
		shortDesc: "User -1/2 Max HP if missed, Contact Atk.",
		id: "spiraldriver",
		name: "Spiral Driver",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "crosschop", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCustomRecoil: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.getEffect('High Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	fightingaura: {
		num: -107,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		desc: "Combines Fighting in its type effectiveness and it is a Bullet Move. If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User Recharges, Bullet + Fighting DMG.",
		id: "fightingaura",
		name: "Fighting Aura",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "aurasphere", target);
		},
		flags: {recharge: 1, bullet: 1, protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Fighting', type);
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	busterdive: {
		num: -108,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This attack charges on the first turn and executes on the second. Raises the user's Defense by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn. Contact move.",
		shortDesc: "DEF+1 turn 1, hits turn 2. Contact move.",
		id: "busterdive",
		name: "Buster Dive",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "skullbash", target);
		},
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, "Skull Bash");
			this.boost({def: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},

	// Fire & Dragon Moves //

	"spitfire": {
		num: -109,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to BRN the target.",
		id: "spitfire",
		name: "Spit Fire",
		pp: 25,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "ember", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
	},
	"heatlaser": {
		num: -110,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 10% chance to burn adjacent foe(s).",
		shortDesc: "10% chance to BRN adjacent foe(s).",
		id: "heatlaser",
		name: "Heat Laser",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "heatwave", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Fire",
	},
	"heatbreath": {
		num: -111,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		desc: "10% chance to burn and flinch. Fangs and Contact move.",
		shortDesc: "10% BRN/Flinch target, Fang/Contact Atk.",
		name: "Heat Breath",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "firefang", target);
		},
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'brn',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Dragon",
	},
	"firetower": {
		num: -112,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 10% chance to burn the target, 10% chance to flinch the target.",
		shortDesc: "10% chance to BRN/Flinch the target.",
		name: "Fire Tower",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "firelash", target);
		},
		flags: {protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'brn',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Fire",
	},
	"redinferno": {
		num: -113,
		accuracy: 90,
		basePower: 95,
		category: "Special",
		desc: "Has a 10% chance to burn the adjacent foe(s).",
		shortDesc: "10% chance to BRN the adjacent foe(s).",
		name: "Red Inferno",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "inferno", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Fire",
	},
	"magmabomb": {
		num: -114,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "Has a 10% chance to confuse the target. Bullet Move.",
		shortDesc: "Bullet, 10% chance to Confuse target.",
		name: "Magma Bomb",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dragonrage", target);
		},
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
				chance: 10,
				volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Dragon",
	},
	"flamestorm": {
		num: -115,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps/DMGs the Target for 4-5 turns.",
		name: "Flame Storm",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "magmastorm", target);
		},
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	"prominencebeam": {
		num: -116,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		desc: "Has a 10% chance to burn the target. 10% chance to BUG the target",
		shortDesc: "10% chance to BRN/BUG the target.",
		name: "Prominence Beam",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "fireblast", target);
		},
		flags: {protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'brn',
			}, {
				chance: 10,
				volatileStatus: 'bug',
			},
		],
		target: "normal",
		type: "Fire",
	},
	"infinityburn": {
		num: -117,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Has a 10% chance to flinch the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "33% Recoil/Thaw User. 10% Flinch Target.",
		name: "Infinity Burn",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "flareblitz", target);
		},
		flags: {protect: 1, mirror: 1, defrost: 1},
		recoil: [33, 100],
		secondary: {
				chance: 10,
				volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fire",
	},

	// Water & Ice Moves //

	"bubblebreath": {
		num: -118,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 10% chance to lower adjacent foe(s) Speed by 1 stage.",
		shortDesc: "10% to lower adjacent foe(s) SPE by 1.",
		name: "Bubble Breath",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "bubblebeam", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
	},
	"teardrop": {
		num: -119,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 10% chance to BUG the target.",
		shortDesc: "10% chance to BUG the target.",
		name: "Tear Drop",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "faketears", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'bug',
		},
		target: "normal",
		type: "Water",
	},
	"winterblast": {
		num: -120,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "10% chance to Freeze adjacent foe(s).",
		shortDesc: "10% FRZ adjacent foe(s).",
		name: "Winter Blast",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "avalance", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
	},
	"hailspear": {
		num: -121,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "30% chance to lower the targets Speed.",
		shortDesc: "30% chance to lower the targets SPE.",
		name: "Hail Spear",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "iciclespear", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
				chance: 30,
				boosts: {
					spe: -1,
				},
		},
		target: "normal",
		type: "Ice",
	},
	"gigafreeze": {
		num: -122,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "10% chance to Freeze the target.",
		shortDesc: "10% chance to FRZ the target.",
		name: "Giga Freeze",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "blizzard", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
	},
	"waterblitz": {
		num: -123,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		name: "Water Blitz",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "scald", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
	},
	"dgwaterfall": {
		num: -124,
		accuracy: 85,
		basePower: 100,
		category: "Physical",
		desc: "Has a 10% chance to flinch the adjacent foe(s). Contact move.",
		shortDesc: "10% Flinch adjacent foe(s), Contact Atk.",
		name: "DG Waterfall",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "waterfall", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Water",
	},
	"heavyrain": {
		num: -125,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		desc: "Has a 10% chance to confuse the foe(s).",
		shortDesc: "10% chance to Confuse the foe(s).",
		name: "Heavy Rain",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "waterspout", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confuse',
		},
		target: "allAdjacentFoes",
		type: "Water",
	},
	"aurorafreeze": {
		num: -126,
		accuracy: 90,
		basePower: 110,
		category: "Special",
		desc: "Charges turn 1. Hits turn 2. 10% freeze. Hit's Adjacent Foes.",
		shortDesc: "10% FRZ Adjacent Foes, User Charges Atk.",
		name: "Aurora Freeze",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "blizzard", target);
		},
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, "Blizzard");
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
	},

	// Grass, Poison (1) & Bug Moves //

	"insectplague": {
		num: -127,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 40% chance to poison the target.",
		shortDesc: "40% chance to PSN the target.",
		name: "Insect Plague",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "attackorder", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			status: 'psn',
		},
		target: "normal",
		type: "Bug",
	},
	"poisonclaw": {
		num: -128,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Has a 50% chance to poison the target. Contact move.",
		shortDesc: "50% PSN the target, Contact move.",
		name: "Poison Claw",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "crushclaw", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	"dgpoisonpowder": {
		num: -129,
		accuracy: 75,
		basePower: 70,
		category: "Special",
		desc: "Poisons all adjacent. Grass is immune",
		shortDesc: "PSN all adjacent, Grass is immune.",
		name: "DG Poison Powder",
		pp: 35,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "poisonpowder", target);
		},
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'psn',
		},
		target: "allAdjacent",
		type: "Poison",
	},
	"charmperfume": {
		num: -130,
		accuracy: 75,
		basePower: 70,
		category: "Special",
		desc: "Confuses all adjacent. Grass is immune to this reflectable Powder Move.",
		shortDesc: "Confuses all adjacent, Grass is immune.",
		name: "Charm Perfume",
		pp: 35,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "ragepowder", target);
		},
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "allAdjacent",
		type: "Grass",
	},
	"dangersting": {
		num: -131,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 30% chance to BUG the target, Contact move.",
		shortDesc: "30% chance to BUG target, Contact Move.",
		name: "Danger Sting",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "poisonsting", target);
		},
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'bug',
		},
		target: "normal",
		type: "Bug",
	},
	biofield: {
		num: -132,
		accuracy: 90,
		basePower: 95,
		category: "Special",
		desc: "Has a 15% chance to poison adjacent foe(s).",
		shortDesc: "15% chance to PSN adjacent foe(s).",
		name: "Bio Field",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "frenzyplant", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 15,
			status: 'psn',
		},
		target: "allAdjacentFoes",
		type: "Grass",
	},
	"greentrap": {
		num: -133,
		accuracy: 85,
		basePower: 110,
		category: "Physical",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field. Contact Move.",
		shortDesc: "Contact, Prevents the Target switching.",
		name: "Green Trap",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "leafage", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},
		},
		target: "normal",
		type: "Bug",
	},
	"rootbind": {
		num: -134,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower target's SPE by 1.",
		name: "Root Bind",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "grassknot", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	"venomdisaster": {
		num: -135,
		accuracy: 100,
		basePower: 200,
		category: "Special",
		desc: "30% Chance to Poison the target. If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "30% PSN the target. User Recharges.",
		name: "Venom Disaster",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sludgewave", target);
		},
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Grass",
	},

	// Electric & Flying Moves //

	"staticelectricity": {
		num: -136,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Has a 50% chance to paralyze the target. Contact move.",
		shortDesc: "50% chance to PAR target. Contact move.",
		id: "staticelectricity",
		name: "Static Electricity",
		pp: 25,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "thundershock", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
	},
	"electricchute": {
		num: -137,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		desc: "100% chance to paralyze the target.",
		shortDesc: "100% chance to PAR the target.",
		id: "electricchute",
		name: "Electric Chute",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nuzzle", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
	},
	"windcutter": {
		num: -138,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "Any target.",
		shortDesc: "Any target.",
		id: "windcutter",
		name: "Wind Cutter",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "airslash", target);
		},
		flags: {protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
	},
	"thunderstorm": {
		num: -139,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to PAR the target.",
		id: "thunderstorm",
		name: "Thunderstorm",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "thunderbolt", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
	},
	"confusedstorm": {
		num: -140,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		desc: "30% chance to Confuse adjacent foe(s), plus Electric Damage in calculation.",
		shortDesc: "30% Confuse adjacent foes + Electric DMG.",
		id: "confusedstorm",
		name: "Confused Storm",
		pp: 10,
		priority: 0,
		secondary: {
			chance: 30,
			volatileStatus: 'confuse',
			onPrepareHit(target, source, move) {
				this.attrLastMove('[still]');
				this.add('-anim', source, "hurricane", target);
			},
			flags: {protect: 1, mirror: 1, distance: 1},
			onEffectiveness(typeMod, target, type, move) {
				return typeMod + this.dex.getEffectiveness('Electric', type);
			},
		},
		target: "allAdjacentFoes",
		type: "Flying",
	},
	"spinningshot": {
		num: -141,
		accuracy: 70,
		basePower: 110,
		category: "Physical",
		desc: "Any Target.",
		shortDesc: "Any Target.",
		id: "spinningshot",
		name: "Spinning Shot",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "aircutter", target);
		},
		flags: {protect: 1, mirror: 1, distance: 1},
		target: "any",
		type: "Flying",
	},
	"megalospark": {
		num: -142,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		desc: "Has a 10% chance to paralyze the target. Punch and contact move.",
		shortDesc: "10% PAR target, Punch and Contact move.",
		id: "megalospark",
		name: "Megalo Spark",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "thunderpunch", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
	},
	"thunderjustice": {
		num: -143,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		desc: "10% Paralyze the target, plus Fairy Damage in calculation.",
		shortDesc: "10% PAR the Target + Fairy DMG.",
		id: "thunderjustice",
		name: "Thunder Justice",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "thunder", target);
		},
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Fairy', type);
		},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
	},

	// Steel Moves //

	"mechanicalclaw": {
		num: -144,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		Desc: "No additional effect, Contact move.",
		shortDesc: "No additional effect, Contact move.",
		name: "Mechanical Claw",
		pp: 35,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "metalclaw", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	"metalsprinter": {
		num: -145,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		Desc: "Targets adjacent foe(s).",
		shortDesc: "Targets adjacent foe(s).",
		name: "Metal Sprinter",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "metalburst", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Steel",
	},
	"reverseprogram": {
		num: -146,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 30% chance to BUG the target.",
		shortDesc: "30% chance to BUG the target.",
		name: "Reverse Program",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "smartstrike", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'bug',
		},
		target: "normal",
		type: "Steel",
	},
	"dgdimensionv3": {
		num: -147,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move. 20% chance to BUG the target.",
		shortDesc: "User can't go next turn. 20% BUG target.",
		name: "DG Dimension V3",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hyperspacehole", target);
		},
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: {
			chance: 20,
			volatileStatus: 'bug',
		},
		target: "normal",
		type: "Steel",
	},

	// Poison (2) & Ground Moves //

	"odorspray": {
		num: -148,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to Flinch the target.",
		name: "Odor Spray",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "poisongas", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Poison",
	},
	"cootieskick": {
		num: -149,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "Has a 30% chance to confuse the target. Contact move.",
		shortDesc: "30% Confuse target. Contact Move.",
		name: "Cooties Kick",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "lowkick", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'confuse',
		},
		target: "normal",
		type: "Poison",
	},
	"bigpooptoss": {
		num: -150,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 20% chance to flinch the target.",
		shortDesc: "20% chance to Flinch the target.",
		name: "Big Poop Toss",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sludgebomb", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Poison",
	},
	"comethammer": {
		num: -151,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Hits NonSky. Hits all adjacent targets.",
		shortDesc: "Hits NonSky. Hits all adjacent targets.",
		name: "Comet Hammer",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "rocktomb", target);
		},
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "alladjacent",
		type: "Ground",
	},
	"ultimatepoophell": {
		num: -152,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		desc: "Has a 20% chance to all BUG adjacent Foe(s).",
		shortDesc: "20% chance to BUG adjacent Foe(s).",
		name: "Ultimate Poop Hell",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "brutalswing", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'bug',
		},
		target: "allAdjacentFoes",
		type: "Poison",
	},
	"awesomequake": {
		num: -153,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		name: "Awesome Quake",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "drillrun", target);
		},
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
	},
	"grandrock": {
		num: -154,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		desc: "No Additional Effect.",
		shortDesc: "No Additional Effect.",
		name: "Grand Rock",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "earthquake", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
	},

	// Fairy Moves //

	"lightsoul": {
		num: -155,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "20% chance to confuse the target.",
		shortDesc: "20% chance to Confuse target.",
		name: "Light Soul",
		pp: 25,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "fairywind", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fairy",
	},

	"saintray": {
		num: -156,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "10% chance to confuse the adjacent foe(s).",
		shortDesc: "10% chance to Confuse adjacent foe(s).",
		name: "Saint Ray",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "moonblast", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "allAdjacentFoes",
		type: "Fairy",
	},
	"dgflash": {
		num: -157,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "Targets the adjacent foe(s).",
		shortDesc: "Targets the adjacent foe(s).",
		name: "DG Flash",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dazzlinggleam", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
	},
	"saintshield": {
		num: -158,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Targets all adjacent. Contact Move.",
		shortDesc: "Targets all adjacent. Contact Move.",
		name: "Saint Shield",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gigaimpact", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "alladjacent",
		type: "Fairy",
	},
	"shiningnova": {
		num: -159,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User can't go next turn.",
		name: "Shining Nova",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hypervoice", target);
		},
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
	},
	"dgjudgement": {
		num: -160,
		accuracy: 85,
		basePower: 110,
		category: "Physical",
		desc: "No Additional Effect.",
		shortDesc: "No Additional Effect.",
		name: "DG Judgement",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "judgment", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fairy",
	},

	// Dark & Ghost Moves //

	"darkspirit": {
		num: -161,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "No additional effect. Contact move.",
		shortDesc: "No additional effect. Contact Move.",
		name: "Dark Spirit",
		pp: 25,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "shadowsneak", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	"blackout": {
		num: -162,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 30% chance to confuse the target, Contact move.",
		shortDesc: "30% Confuse target, Contact Move.",
		name: "Blackout",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nightshade", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Dark",
	},
	"dgnightmare": {
		num: -163,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "No Additional Effect.",
		shortDesc: "No Additional Effect.",
		name: "DG Nightmare",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nightmare", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	"chaoscloud": {
		num: -164,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "Has a 20% chance to Confuse the target.",
		name: "Chaos Cloud",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "omninouswind", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Ghost",
	},
	"shadowfall": {
		num: -165,
		accuracy: 90,
		basePower: 95,
		category: "Physical",
		desc: "Targets all adjacent foe(s).",
		shortDesc: "Targets all adjacent foe(s).",
		name: "Shadow Fall",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "darkpulse", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
	},

	// Status Moves //

	"attackcharge": {
		num: -166,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises attack of the chosen ally or user by 1.",
		shortDesc: "Raises ATK of chosen ally or user by 1.",
		name: "Attack Charge",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sharpen", target);
		},
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"attackbreak": {
		num: -167,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers attack of the target by 1.",
		shortDesc: "Lowers ATK of the target by 1.",
		name: "Attack Break",
		pp: 35,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "curse", target);
		},
		flags: {snatch: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "Normal",
		type: "Normal",
	},
	"attackbreakfield": {
		num: -168,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers attack of adjacent foe(s) by 1.",
		shortDesc: "Lowers ATK of adjacent foe(s) by 1.",
		name: "Attack Break Field",
		pp: 40,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "curse", target);
		},
		flags: {snatch: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
	},
	"attackchargefield": {
		num: -169,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises attack of the allies by 1.",
		shortDesc: "Raises ATK of the allies side by 1.",
		name: "Attack Charge Field",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sharpen", target);
		},
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
	},
	"mentalcharge": {
		num: -170,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises Special Attack & Special Defense of the chosen ally or user by 1.",
		shortDesc: "+1 SPA & SPD to chosen ally or user.",
		name: "Mental Charge",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "calmmind", target);
		},
		flags: {snatch: 1},
		boosts: {
			spa: 1,
			spd: 1,
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"mentalchargefield": {
		num: -171,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises special attack and special defense of allies by 1.",
		shortDesc: "Raises SPA & SPD of allies by 1.",
		name: "Mental Charge Field",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "calmmind", target);
		},
		flags: {snatch: 1},
		boosts: {
			spa: 1,
			spd: 1,
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
	},
	"guardcharge": {
		num: -172,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises defense of the chosen ally or user by 1.",
		shortDesc: "Raises DEF of chosen ally or user by 1.",
		name: "Guard Charge",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "harden", target);
		},
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"guardchargefield": {
		num: -173,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises defense of the chosen allies by 1.",
		shortDesc: "Raises DEF of the chosen allies by 1.",
		name: "Guard Charge Field",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "harden", target);
		},
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
	},
	"guardbreakfield": {
		num: -174,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers defense of foe(s) by 1.",
		shortDesc: "Lowers DEF of adjacent foe(s) by 1.",
		name: "Guard Break Field",
		pp: 30,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "scaryface", target);
		},
		flags: {snatch: 1},
		boosts: {
			def: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
	},
	"speedchargefield": {
		num: -175,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises speed of the chosen allies by 1.",
		shortDesc: "Raises SPE of the chosen allies by 1.",
		name: "Speed Charge Field",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "agility", target);
		},
		flags: {snatch: 1},
		boosts: {
			spe: 1,
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
	},
	"speedbreakfield": {
		num: -176,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "lowers speed of foe(s) by 1.",
		shortDesc: "Lowers SPE of adjacent foe(s) by 1.",
		name: "Speed Break Field",
		pp: 40,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "stringshot", target);
		},
		flags: {snatch: 1},
		boosts: {
			spe: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
	},
	"agilitycharge": {
		num: -177,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises evasion of the chosen ally or user by 1.",
		shortDesc: "Raises EVA of chosen ally or user by 1.",
		name: "Attack Charge",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "agility", target);
		},
		flags: {snatch: 1},
		boosts: {
			evasion: 1,
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"finalheal": {
		num: -178,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		name: "Final Heal",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "recover", target);
		},
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"restore": {
		num: -179,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Cures Ally or User's status. Heals 10% of their max HP, rounded half up.",
		shortDesc: "Ally/Self cured, target recovers 10% HP.",
		name: "Restore",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "healbell", target);
		},
		flags: {protect: 1, reflectable: 1, heal: 1},
		onHit(target, source) {
			if (!target.cureStatus()) return false;
			this.heal(Math.ceil(source.maxhp * 0.1), source);
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"statusbarrier": {
		num: -180,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user and its party members cannot have major status conditions or confusion inflicted on them by other Pokemon. It is removed from the user's side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, protects party from status.",
		name: "Status Barrier",
		pp: 25,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "safeguard", target);
		},
		flags: {snatch: 1},
		sideCondition: 'safeguard',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.id === 'yawn') return;
				if (effect.effectType === 'Move' && effect.infiltrates && target.side !== source.side) return;
				if (target !== source) {
					this.debug('interrupting setStatus');
					if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Safeguard');
					}
					return null;
				}
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.effectType === 'Move' && effect.infiltrates && target.side !== source.side) return;
				if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
					return null;
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'Safeguard');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd(side) {
				this.add('-sideend', side, 'Safeguard');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
	},
	"safetyguard": {
		num: -181,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The chosen ally or user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Ally/User survives with at least 1 HP.",
		name: "Safety Guard",
		pp: 5,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "endure", target);
		},
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'endure',
		onTryHit(pokemon) {
			return this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Endure');
			},
			onDamagePriority: -10,
			onDamage(damage, target, source, effect) {
				if (effect?.effectType === 'Move' && damage >= target.hp) {
					this.add('-activate', target, 'move: Endure');
					return target.hp - 1;
				}
			},
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"critcharge": {
		num: -182,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the chosen ally or user chance for a critical hit by 2 stages. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally.",
		shortDesc: "Raises the Ally/User crit ratio by 2.",
		name: "Crit Charge",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "focusenergy", target);
		},
		flags: {snatch: 1},
		volatileStatus: 'focusenergy',
		condition: {
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-start', target, 'move: Focus Energy', '[zeffect]');
				} else if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', target, 'move: Focus Energy', '[silent]');
				} else {
					this.add('-start', target, 'move: Focus Energy');
				}
			},
			onModifyCritRatio(critRatio) {
				return critRatio + 2;
			},
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
	},
	"dispel": {
		num: -183,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Resets the stat stages of the chosen ally or user Pokemon to 0.",
		shortDesc: "Removes stat changes of the Ally/User.",
		isViable: true,
		name: "Dispel",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "haze", target);
		},
		flags: {authentic: 1},
		onHitField() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"crosscounter": {
		num: -184,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['counter']) return 0;
			return pokemon.volatiles['counter'].damage || 1;
		},
		category: "Physical",
		desc: "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn.",
		shortDesc: "If hit by physical Atk, return 2x DMG.",
		name: "Cross Counter",
		pp: 20,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "counter", target);
		},
		priority: -5,
		flags: {contact: 1, protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('counter');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['counter']) return false;
			if (source.volatiles['counter'].position === null) return false;
		},
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectData.position = null;
				this.effectData.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectData.target) return;
				return source.side.foe.active[this.effectData.position];
			},
			onDamagingHit(damage, target, source, move) {
				if (source.side !== target.side && this.getCategory(move) === 'Physical') {
					this.effectData.position = source.position;
					this.effectData.damage = 2 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Normal",
		maxMove: {basePower: 75},
	},
	"mirrorreflection": {
		num: -185,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['mirrorcoat']) return 0;
			return pokemon.volatiles['mirrorcoat'].damage || 1;
		},
		category: "Special",
		desc: "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn.",
		shortDesc: "If hit by special Atk, returns 2x DMG.",
		name: "Mirror Reflection",
		pp: 20,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "mirrorcoat", target);
		},
		priority: -5,
		flags: {protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('mirrorcoat');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['mirrorcoat']) return false;
			if (source.volatiles['mirrorcoat'].position === null) return false;
		},
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectData.position = null;
				this.effectData.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectData.target) return;
				return source.side.foe.active[this.effectData.position];
			},
			onDamagingHit(damage, target, source, move) {
				if (source.side !== target.side && this.getCategory(move) === 'Special') {
					this.effectData.position = source.position;
					this.effectData.damage = 2 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Normal",
	},
	"antisleep": {
		num: -186,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Cures the user or allies SLP, heals 10% max HP. Rounded half up.",
		shortDesc: "Cures User/Ally SLP, heals 10% max HP.",
		name: "Anti-Sleep",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "healbell", target);
		},
		flags: {protect: 1, reflectable: 1, heal: 1},
		onHit(target, source) {
			if (target.status === 'slp') target.cureStatus();
			this.heal(Math.ceil(source.maxhp * 0.1), source);
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"antipoison": {
		num: -187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Cures the user or allies PSN, heals 10% max HP. Rounded half up.",
		shortDesc: "Cures User/Ally PSN, heals 10% max HP.",
		name: "Anti-Poison",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "healbell", target);
		},
		flags: {protect: 1, reflectable: 1, heal: 1},
		onHit(target, source) {
			if (target.status === 'psn') target.cureStatus();
			this.heal(Math.ceil(source.maxhp * 0.1), source);
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"antiparalysis": {
		num: -188,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Cures the user or allies PAR, heals 10% max HP. Rounded half up.",
		shortDesc: "Cures User/Ally PAR, heals 10% max HP.",
		name: "Anti-Paralysis",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "healbell", target);
		},
		flags: {protect: 1, reflectable: 1, heal: 1},
		onHit(target, source) {
			if (target.status === 'par') target.cureStatus();
			this.heal(Math.ceil(source.maxhp * 0.1), source);
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"antipanic": {
		num: -189,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Cures the user or allies Confusion, heals 10% max HP. Rounded half up.",
		shortDesc: "Cures User/Ally Confusion, heals 10% HP.",
		name: "Anti-Panic",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "healbell", target);
		},
		flags: {protect: 1, reflectable: 1, heal: 1},
		onHit(target, source) {
			if (target.status === 'confusion') target.cureStatus();
			this.heal(Math.ceil(source.maxhp * 0.1), source);
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"antibug": {
		num: -190,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Cures the user or allies BUG Status, heals 10% max HP. Rounded half up.",
		shortDesc: "Cures User/Ally BUG, heals 10% max HP.",
		name: "Anti-BUG",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "healbell", target);
		},
		flags: {protect: 1, reflectable: 1, heal: 1},
		onHit(target, source) {
			if (target.status === 'bug') target.cureStatus();
			this.heal(Math.ceil(source.maxhp * 0.1), source);
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
	},
	"accelerationboost": {
		num: -191,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the next turn, the user's attacks will be critical hits.",
		shortDesc: "Users crits until end of the next turn.",
		name: "Acceleration Boost",
		pp: 48,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "laserfocus", target);
		},
		flags: {snatch: 1},
		volatileStatus: 'laserfocus',
		condition: {
			duration: 2,
			onStart(pokemon, source, effect) {
				if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', pokemon, 'move: Laser Focus', '[silent]');
				} else {
					this.add('-start', pokemon, 'move: Laser Focus');
				}
			},
			onRestart(pokemon) {
				this.effectData.duration = 2;
				this.add('-start', pokemon, 'move: Laser Focus');
			},
			onModifyCritRatio(critRatio) {
				return 5;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Laser Focus', '[silent]');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	lgpeabsorb: {
		num: 71,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		name: "LGPE Absorb",
		pp: 25,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "absorb", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	lgpemegadrain: {
		num: 72,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		name: "LGPE Mega Drain",
		pp: 15,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "megadrain", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 120},
		contestType: "Clever",
	},
	lgpeteleport: {
		num: 100,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
		shortDesc: "User switches out.",
		name: "LGPE Teleport",
		pp: 20,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "teleport", target);
		},
		priority: -6,
		flags: {},
		selfSwitch: true,
		onTryHit: true,
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'heal'},
		contestType: "Cool",
	},
	lgpeskyattack: {
		num: 143,
		accuracy: 90,
		basePower: 200,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Hits turn 2. 30% flinch. High crit.",
		name: "LGPE Sky Attack",
		pp: 5,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "skyattack", target);
		},
		flags: {charge: 1, protect: 1, mirror: 1, distance: 1},
		critRatio: 2,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, "Sky Attack");
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	lgpesolarbeam: {
		num: 76,
		accuracy: 100,
		basePower: 200,
		category: "Special",
		desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.",
		shortDesc: "Hits turn 2. No charge in sunlight.",
		name: "LGPE Solar Beam",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "solarbeam", target);
		},
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, "Solar Beam");
			if (['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea', 'sandstorm', 'hail'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
};
