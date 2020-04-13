'use strict';

/** @type {{[k: string]: ModdedMoveData & {signature?: boolean}}} */
let BattleMovedex = {
	"acidbubble": {
		accuracy: 90,
		basePower: 60,
		category: "Special",
		desc: "25% chance to flinch the target.",
		shortDesc: "25% chance to flinch the target.",
		id: "acidbubble",
		name: "Acid Bubble",
		num: -100,
		signature: true,
		pp: 45,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "bubble", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 25,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Aqua",
	},
	"dangerousbite": {
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "dangerousbite",
		name: "Dangerous Bite",
		num: -320,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "crunch", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Evil",
	},
	"blackice": {
		accuracy: 100,
		basePower: 105,
		category: "Physical",
		desc: "50% chance to lower the target’s Speed by 1.",
		shortDesc: "50% chance to lower the target’s Speed by 1.",
		id: "blackice",
		name: "Black Ice",
		num: -321,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "freezeshock", target);
		},
		flags: {protect: 1, mirror: 1, bullet: 1},
		secondary: {
			chance: 50,
			boosts: {spe: -1},
		},
		target: "any",
		type: "Aqua",
	},
	"bugblaster": {
		accuracy: 95,
		basePower: 100,
		category: "Special",
		desc: "20% chance to burn the target.",
		shortDesc: "20% chance to burn the target.",
		id: "bugblaster",
		name: "Bug Blaster",
		num: -322,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "ember", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "any",
		type: "Evil",
	},
	"misconnecting": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Bugs the target. Does not check accuracy.",
		shortDesc: "Bugs the target. Does not check accuracy.",
		id: "misconnecting",
		name: "Misconnecting",
		num: -323,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sleeppowder", target);
		},
		flags: {protect: 1, mirror: 1, reflectable: 1},
		status: 'bug',
		target: "normal",
		type: "Evil",
	},
	"bitfire": {
		accuracy: 100,
		basePower: 115,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "bitfire",
		name: "Bit Fire",
		num: -324,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "fireblast", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flame",
	},
	"foxfire": {
		accuracy: 100,
		basePower: 105,
		category: "Special",
		desc: "50% chance to raise the user’s Speed by 2.",
		shortDesc: "50% chance to raise the user’s Speed by 2.",
		id: "foxfire",
		name: "Fox Fire",
		num: -325,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sacredfire", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {spe: 2},
			},
		},
		target: "any",
		type: "Flame",
	},
	"spidershooter": {
		accuracy: 95,
		basePower: 120,
		category: "Special",
		desc: "20% chance to paralyze the target.",
		shortDesc: "20% chance to paralyze the target.",
		id: "spidershooter",
		name: "Spider Shooter",
		num: -326,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "metalburst", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "any",
		type: "Evil",
	},
	"webwrecker": {
		accuracy: 95,
		basePower: 120,
		category: "Physical",
		desc: "20% chance to burn the target.",
		shortDesc: "20% chance to burn the target.",
		id: "webwrecker",
		name: "Web Wrecker",
		num: -327,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "chargebeam", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "any",
		type: "Evil",
	},
	"transcendentsword": {
		name: "Transcendent Sword",
		num: -328,
		signature: true,
		id: "transcendentsword",
		priority: 0,
		basePower: 120,
		category: "Physical",
		type: "Flame",
		target: "any",
		desc: "High critical hit ratio.",
		shortDesc: "High critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "charge", source);
			this.add('-anim', source, "secretsword", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		critRatio: 2,
	},
	"supremecannon": {
		basePower: 120,
		category: "Physical",
		desc: "High critical hit ratio.",
		shortDesc: "High critical hit ratio.",
		id: "supremecannon",
		name: "Supreme Cannon",
		num: -329,
		signature: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "iceball", target);
		},
		flags: {protect: 1, mirror: 1, bullet: 1},
		secondary: null,
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		critRatio: 2,
		target: "normal",
		type: "Aqua",
	},
	"pepperbreath": {
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "pepperbreath",
		name: "Pepper Breath",
		num: -101,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "ember", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flame",
	},
	"nemesisivy": {
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		desc: "User recovers 50% of the damage dealt. 1.3 HP if Big Root is held by the user.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "nemesisivy",
		name: "Nemesis Ivy",
		num: -102,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hornleech", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Nature",
	},
	"electricshock": {
		accuracy: 95,
		basePower: 100,
		category: "Special",
		desc: "20% chance to paralyze the target.",
		shortDesc: "20% chance to paralyze the target.",
		id: "electricshock",
		name: "Electric Shock",
		num: -103,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "chargebeam", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "any",
		type: "Air",
	},
	"spiraltwister": {
		accuracy: 90,
		basePower: 80,
		category: "Special",
		desc: "100% chance to raise the user's Special Attack by 1.",
		shortDesc: "Raises the user's Sp.Atk by 1.",
		id: "spiraltwister",
		name: "Spiral Twister",
		num: -104,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "firespin", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {spa: 1},
			},
		},
		target: "any",
		type: "Flame",
	},
	"preciousflame": {
		accuracy: 90,
		basePower: 105,
		category: "Physical",
		desc: "100% chance to lower the target's Special Defense by 1.",
		shortDesc: "Lowers the target's Sp.Def by 1.",
		id: "preciousflame",
		name: "Precious Flame",
		num: -105,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "ember", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {spd: -1},
		},
		target: "normal",
		type: "Flame",
	},
	"demidart": {
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		desc: "User recovers 50% of the damage dealt to foes. 1.3 HP if Big Root is held by the user. Hits all adjacent foes.",
		shortDesc: "User recovers 50% of the damage dealt to foes.",
		id: "demidart",
		name: "Demi Dart",
		num: -106,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "spikecannon", target);
			this.add('-anim', source, "mefirst", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1, contact: 1},
		secondary: null,
		drain: [1, 2],
		target: "allAdjacentFoes",
		type: "Evil",
	},
	"wormvenom": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Poisons the target. Does not check accuracy.",
		shortDesc: "Poisons the target. Does not check accuracy.",
		id: "wormvenom",
		name: "Worm Venom",
		num: -107,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "toxic", target);
		},
		flags: {protect: 1, mirror: 1, reflectable: 1},
		status: 'psn',
		target: "normal",
		type: "Nature",
	},
	"metalcannon": {
		accuracy: 90,
		basePower: 115,
		category: "Physical",
		desc: "50% chance to raise the user’s Defense by 2.",
		shortDesc: "50% chance to raise the user’s Def by 2.",
		id: "metalcannon",
		name: "Metal Cannon",
		num: -108,
		signature: true,
		pp: 2,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "fling", target);
		},
		flags: {protect: 1, mirror: 1, bullet: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {def: 2},
			},
		},
		target: "normal",
		type: "Mech",
	},
	"superthunderstrike": {
		accuracy: 95,
		basePower: 55,
		category: "Special",
		desc: "Hits 2 times in one turn.",
		shortDesc: "Hits 2 times in one turn.",
		id: "superthunderstrike",
		name: "Super Thunder Strike",
		num: -109,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "chargebeam", target);
		},
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		target: "any",
		type: "Air",
	},
	"blueblaster": {
		accuracy: 100,
		basePower: 105,
		category: "Physical",
		desc: "100% chance to lower the target’s Defense by 1.",
		shortDesc: "Lowers the target’s Def by 1.",
		id: "blueblaster",
		name: "Blue Blaster",
		num: -110,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "willowisp", target);
		},
		flags: {protect: 1, mirror: 1, bullet: 1},
		secondary: {
			chance: 100,
			boosts: {def: -1},
		},
		target: "any",
		type: "Flame",
	},
	"goblinstrike": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "goblinstrike",
		name: "Goblin Strike",
		num: -111,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "brickbreak", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Battle",
	},
	"marchingfishes": {
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		desc: "Hits adjacent foe(s) 2-3 times in one turn. Hits all adjacent foes.",
		shortDesc: "Hits adjacent foe(s) 2-3 times in one turn.",
		id: "marchingfishes",
		name: "Marching Fishes",
		num: -112,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "razorshell", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		multihit: [2, 3],
		target: "allAdjacentFoes",
		type: "Aqua",
	},
	"rockfist": {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "100% chance to raise the user’s Defense by 1.",
		shortDesc: "Raises the user’s Def by 1.",
		id: "rockfist",
		name: "Rock Fist",
		num: -113,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "smackdown", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1, punch: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {def: 1},
			},
		},
		target: "normal",
		type: "Nature",
	},
	"electricthread": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Paralyzes the target. Does not check accuracy.",
		shortDesc: "Paralyzes the target. Does not check accuracy.",
		id: "electricthread",
		name: "Electric Thread",
		num: -114,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "electroweb", target);
		},
		flags: {protect: 1, mirror: 1},
		status: 'par',
		target: "normal",
		type: "Air",
	},
	"aquatower": {
		accuracy: 100,
		basePower: 95,
		category: "Special",
		desc: "75% chance to force the target to randomly switch. The target will fail to switch if they have fainted, have used Ingrain, have the Suction Cups ability or is using a substitute.",
		shortDesc: "75% chance to force the target to randomly switch.",
		id: "aquatower",
		name: "Aqua Tower",
		num: -115,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "watergun", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 75,
			onHit(target, source, move) {
				move.forceSwitch = true;
			},
		},
		target: "normal",
		type: "Aqua",
	},
	"tropicalbeak": {
		accuracy: 95,
		basePower: 40,
		category: "Physical",
		desc: "Hits 1-3 times in one turn.",
		shortDesc: "Hits 1-3 times in one turn.",
		id: "tropicalbeak",
		name: "Tropical Beak",
		num: -116,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hornattack", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		multihit: [1, 3],
		target: "normal",
		type: "Battle",
	},
	"lullabybubble": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "20% chance to put the target to sleep.",
		shortDesc: "20% chance to put the target to sleep.",
		id: "lullabybubble",
		name: "Lullaby Bubble",
		num: -117,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "growl", target);
			this.add('-anim', source, "bubble", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1},
		secondary: {
			chance: 20,
			status: "slp",
		},
		target: "normal",
		type: "Aqua",
	},
	"poisonivy": {
		accuracy: 100,
		basePower: 105,
		category: "Physical",
		desc: "50% chance to poison the target. 1.3 HP if Big Root is held by the user.",
		shortDesc: "50% chance to poison the target.",
		id: "poisonivy",
		name: "Poison Ivy",
		num: -118,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "poisonjab", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'psn',
		},
		target: "normal",
		type: "Nature",
	},
	"boombubble": {
		accuracy: 90,
		basePower: 80,
		category: "Special",
		desc: "50% chance to raise the user’s Speed by 2.",
		shortDesc: "50% chance to raise the user’s Speed by 2.",
		id: "boombubble",
		name: "Boom Bubble",
		num: -119,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "present", target);
		},
		flags: {protect: 1, mirror: 1, bullet: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {spe: 2},
			},
		},
		target: "any",
		type: "Air",
	},
	"eternalslapping": {
		accuracy: 95,
		basePower: 25,
		category: "Physical",
		desc: "Hits 2-5 times in one turn.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "eternalslapping",
		name: "Eternal Slapping",
		num: -120,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "doubleslap", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		multihit: [2, 5],
		target: "normal",
		type: "Battle",
	},
	"coloredsparkle": {
		accuracy: 100,
		basePower: 105,
		category: "Physical",
		desc: "100% chance to lower the target’s Defense by 1.",
		shortDesc: "Lowers the target’s Def by 1.",
		id: "coloredsparkle",
		name: "Colored Sparkle",
		num: -121,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "psybeam", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {def: -1},
		},
		target: "any",
		type: "Air",
	},
	"puppyhowl": {
		accuracy: 90,
		basePower: 125,
		category: "Special",
		desc: "Ignores target’s stat changes. 50% paralyze chance, is a sound move.",
		shortDesc: "Ignores target’s stat changes. 50% paralyze chance.",
		id: "puppyhowl",
		name: "Puppy Howl",
		num: -122,
		signature: true,
		pp: 2,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "tailwind", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 50,
			status: "par",
		},
		ignoreEvasion: true,
		ignoreDefensive: true,
		target: "any",
		type: "Holy",
	},
	"dancingbone": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "dancingbone",
		name: "Dancing Bone",
		num: -123,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "boneclub", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Evil",
	},
	"littleblizzard": {
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "littleblizzard",
		name: "Little Blizzard",
		num: -124,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "iceball", target);
		},
		flags: {protect: 1, mirror: 1},
		target: "normal",
		type: "Aqua",
	},
	"snowgobbolt": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "snowgobbolt",
		name: "Snowgob Bolt",
		num: -125,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "iceball", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Aqua",
	},
	"supershocker": {
		accuracy: 100,
		basePower: 110,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "supershocker",
		name: "Super Shocker",
		num: -126,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "shockwave", target);
		},
		flags: {protect: 1, mirror: 1},
		target: "any",
		type: "Air",
	},
	"plasticblaze": {
		accuracy: 90,
		basePower: 105,
		category: "Physical",
		desc: "100% chance to lower the target's Special Defense by 1.",
		shortDesc: "Lowers the target's Sp.Def by 1.",
		id: "plasticblaze",
		name: "Plastic Blaze",
		num: -127,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dragonbreath", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {spd: -1},
		},
		target: "normal",
		type: "Mech",
	},
	"evilspell": {
		accuracy: 90,
		basePower: 80,
		category: "Special",
		desc: "50% chance to raise the user's Special Attack by 2.",
		shortDesc: "50% chance to raise the user's Sp.Atk by 2.",
		id: "evilspell",
		name: "Evil Spell",
		num: -128,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "spite", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {spa: 2},
			},
		},
		target: "any",
		type: "Evil",
	},
	"spinningneedle": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "50% chance to raise Speed by 2. Hits all adjacent foes.",
		shortDesc: "50% chance to raise Speed by 2.",
		id: "spinningneedle",
		name: "Spinning Needle",
		num: -129,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "aeroblast", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (this.random(100) < 50) this.boost({spe: 2}, pokemon, pokemon, move);
		},
		target: "allAdjacentFoes",
		type: "Air",
	},
	"scarredeye": {
		accuracy: 85,
		basePower: 0,
		category: "Status",
		desc: "Causes the foe(s) to flinch. Hits all adjacent foes.",
		shortDesc: "Causes the foe(s) to flinch.",
		id: "scarredeye",
		name: "Scar-Red Eye",
		num: -130,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "glare", target);
		},
		flags: {protect: 1, mirror: 1, reflectable: 1, authentic: 1},
		volatileStatus: 'flinch',
		onTryHit(target, source, move) {
			//this is implemented solely to have a failure message. since flinch doesn't already have one
			if (!this.queue.willMove(target)) return false;
			this.add('-message', target.name + ' is disrupted!');
		},
		target: "normal",
		type: "Flame",
	},
	"handoffate": {
		accuracy: 90,
		basePower: 105,
		category: "Physical",
		desc: "50% chance to raise the user’s Attack and Special Attack by 2.",
		shortDesc: "50% chance to raise the user’s Atk and Sp.Atk by 2.",
		id: "handoffate",
		name: "Hand Of Fate",
		num: -131,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "lusterpurge", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {atk: 2, spa: 2},
			},
		},
		target: "normal",
		type: "Holy",
	},
	"evilcharm": {
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.dex.clampIntRange(Math.floor(target.hp / 2), 1);
		},
		category: "Special",
		desc: "Does damage equal to 1/2 target’s current HP. 1.3 HP if Big Root is held by the user.",
		shortDesc: "Does damage equal to 1/2 target’s current HP.",
		id: "evilcharm",
		name: "Evil Charm",
		num: -132,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nightshade", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		secondary: null,
		target: "normal",
		type: "Evil",
	},
	"meteorwing": {
		accuracy: 90,
		basePower: 100,
		category: "Special",
		desc: "100% chance to raise the user's Speed by 1. Hits all adjacent foes.",
		shortDesc: "Raises the user's Speed by 1.",
		id: "meteorwing",
		name: "Meteor Wing",
		num: -133,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "flameburst", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			this.boost({spe: 1}, pokemon, pokemon, move);
		},
		target: "allAdjacentFoes",
		type: "Flame",
	},
	"darkpaw": {
		accuracy: 90,
		basePower: 0,
		damage: 150,
		category: "Physical",
		desc: "Priority +1, always does 150 HP of damage. 80% flinch chance.",
		shortDesc: "Priority +1, always does 150 HP of damage. 80% flinch chance.",
		id: "darkpaw",
		name: "Dark Paw",
		num: -134,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 1,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "lowkick", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 80,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Battle",
	},
	"solarray": {
		accuracy: true,
		basePower: 110,
		category: "Special",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy.",
		id: "solarray",
		name: "Solar Ray",
		num: -135,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dragonpulse", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "any",
		type: "Mech",
	},
	"variabledarts": {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		desc: "100% chance to lower the target's Special Defense by 1.",
		shortDesc: "Lowers the target's Sp.Def by 1.",
		id: "variabledarts",
		name: "Variable Darts",
		num: -136,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "spikecannon", target);
			this.add('-anim', source, "spikecannon", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {spd: -1},
		},
		target: "any",
		type: "Aqua",
	},
	"dreadfire": {
		accuracy: 90,
		basePower: 90,
		category: "Special",
		desc: "30% chance to confuse the target.",
		shortDesc: "30% chance to confuse the target.",
		id: "dreadfire",
		name: "Dread Fire",
		num: -137,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "blastburn", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Flame",
	},
	"deathhand": {
		accuracy: 95,
		basePower: 120,
		category: "Special",
		desc: "User recovers 50% of the damage dealt. 1.3 HP if Big Root is held by the user.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "deathhand",
		name: "Death Hand",
		num: -138,
		signature: true,
		pp: 2,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nightslash", target);
			this.add('-anim', source, "mefirst", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1, contact: 1},
		secondary: null,
		drain: [1, 2],
		target: "normal",
		type: "Evil",
	},
	"pulseblast": {
		accuracy: 95,
		basePower: 90,
		category: "Special",
		desc: "20% chance to put the target to sleep.",
		shortDesc: "20% chance to put the target to sleep.",
		id: "pulseblast",
		name: "Pulse Blast",
		num: -139,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "supersonic", target);
		},
		flags: {protect: 1, mirror: 1, pulse: 1},
		secondary: {
			chance: 20,
			status: "slp",
		},
		target: "any",
		type: "Aqua",
	},
	"powermetal": {
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		desc: "50% chance to raise the user's Attack by 2.",
		shortDesc: "50% chance to raise the user's Atk by 2.",
		id: "powermetal",
		name: "Power Metal",
		num: -140,
		signature: true,
		pp: 2,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "powergem", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {atk: 2},
			},
		},
		target: "normal",
		type: "Mech",
	},
	"drillspin": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Ignores target’s stat changes.",
		shortDesc: "Ignores target’s stat changes.",
		id: "drillspin",
		name: "Drill Spin",
		num: -141,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "geargrind", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		ignoreEvasion: true,
		ignoreDefensive: true,
		target: "normal",
		type: "Mech",
	},
	"blazebuster": {
		accuracy: 95,
		basePower: 90,
		category: "Special",
		desc: "100% chance to lower the target's Special Defense by 1.",
		shortDesc: "Lowers the target's Sp.Def by 1.",
		id: "blazebuster",
		name: "Blaze Buster",
		num: -142,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "blueflare", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {spd: -1},
		},
		target: "normal",
		type: "Flame",
	},
	"subzeroicepunch": {
		accuracy: 80,
		basePower: 85,
		category: "Physical",
		desc: "80% chance to flinch the target.",
		shortDesc: "80% chance to flinch the target.",
		id: "subzeroicepunch",
		name: "Sub Zero Ice Punch",
		num: -143,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "icepunch", target);
		},
		flags: {protect: 1, mirror: 1, punch: 1, contact: 1},
		secondary: {
			chance: 80,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Aqua",
	},
	"evilhurricane": {
		accuracy: 95,
		basePower: 110,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "evilhurricane",
		name: "Evil Hurricane",
		num: -144,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "roost", source);
			this.add('-anim', source, "megapunch", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Air",
	},
	"howlingblaster": {
		accuracy: 100,
		basePower: 105,
		category: "Special",
		desc: "50% chance to raise the user’s Speed by 2.",
		shortDesc: "50% chance to raise the user’s Speed by 2.",
		id: "howlingblaster",
		name: "Howling Blaster",
		num: -145,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sacredfire", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {spe: 2},
			},
		},
		target: "any",
		type: "Flame",
	},
	"lightningpaw": {
		accuracy: 90,
		basePower: 0,
		damage: 150,
		category: "Physical",
		desc: "Always does 150 HP damage. 80% chance to confuse.",
		shortDesc: "Always does 150 HP damage. 80% chance to confuse.",
		id: "lightningpaw",
		name: "Lightning Paw",
		num: -146,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 1,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "playrough", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 80,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Battle",
	},
	"symphonycrusher": {
		accuracy: 90,
		basePower: 80,
		category: "Special",
		desc: "30% chance to put the target to sleep, is a sound move.",
		shortDesc: "30% chance to put the target to sleep.",
		id: "symphonycrusher",
		name: "Symphony Crusher",
		num: -147,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "uproar", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 30,
			status: 'slp',
		},
		target: "normal",
		type: "Battle",
	},
	"hypersmell": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "30% chance to confuse or paralyze the target.",
		shortDesc: "30% chance to confuse or paralyze the target.",
		id: "hypersmell",
		name: "Hyper Smell",
		num: -148,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nastyplot", source);
			this.add('-anim', source, "smog", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			onHit(target, source) {
				if (this.random(2) === 0) {
					target.addVolatile('confusion', source);
				} else {
					target.trySetStatus('par', source);
				}
			},
		},
		target: "any",
		type: "Filth",
	},
	"megaflame": {
		accuracy: 100,
		basePower: 115,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "megaflame",
		name: "Mega Flame",
		num: -149,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "fireblast", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flame",
	},
	"guardianbarrage": {
		accuracy: true,
		basePower: 90,
		category: "Physical",
		desc: "This move does not check accuracy. Hits all adjacent foes.",
		shortDesc: "This move does not check accuracy.",
		id: "guardianbarrage",
		name: "Guardian Barrage",
		num: -150,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gearup", source);
			this.add('-anim', source, "twineedle", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Mech",
	},
	"chaosblaster": {
		accuracy: 100,
		basePower: 105,
		category: "Special",
		desc: "50% chance to raise the user’s Speed by 2.",
		shortDesc: "50% chance to raise the user’s Speed by 2.",
		id: "chaosblaster",
		name: "Chaos Blaster",
		num: -151,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dazzlinggleam", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {spe: 2},
			},
		},
		target: "any",
		type: "Air",
	},
	"snowpunch": {
		accuracy: 95,
		basePower: 110,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "snowpunch",
		name: "Snow Punch",
		num: -152,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "icepunch", target);
		},
		flags: {protect: 1, mirror: 1, punch: 1, contact: 1},
		secondary: null,
		target: "normal",
		type: "Aqua",
	},
	"frozenclaw": {
		accuracy: 95,
		basePower: 120,
		category: "Physical",
		desc: "Ignores target’s stat changes.",
		shortDesc: "Ignores target’s stat changes.",
		id: "frozenclaw",
		name: "Frozen Claw",
		num: -153,
		signature: true,
		pp: 2,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hail", target);
			this.add('-anim', source, "cut", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		ignoreEvasion: true,
		ignoreDefensive: true,
		target: "normal",
		type: "Aqua",
	},
	"iceballbomb": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "100% chance to raise the user’s Defense by 1.",
		shortDesc: "Raises the user’s Def by 1.",
		id: "iceballbomb",
		name: "Iceball Bomb",
		num: -154,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "iciclecrash", target);
		},
		flags: {protect: 1, mirror: 1, bullet: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {def: 1},
			},
		},
		target: "normal",
		type: "Aqua",
	},
	"harpoontorpedo": {
		accuracy: true,
		basePower: 110,
		category: "Physical",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy.",
		id: "harpoontorpedo",
		name: "Harpoon Torpedo",
		num: -155,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "shellsmash", source);
			this.add('-anim', source, "pinmissile", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "any",
		type: "Mech",
	},
	"junglebone": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Hits 2 times in one turn.",
		shortDesc: "Hits 2 times in one turn.",
		id: "junglebone",
		name: "Jungle Bone",
		num: -156,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "shadowbone", target);
		},
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Nature",
	},
	"electroshocker": {
		accuracy: 100,
		basePower: 115,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "electroshocker",
		name: "Electro Shocker",
		num: -157,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "electroball", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Air",
	},
	"frozenfireshot": {
		accuracy: 85,
		basePower: 0,
		category: "Status",
		desc: "Paralyzes the foe(s). Hits all adjacent foes.",
		shortDesc: "Paralyzes the foe(s).",
		id: "frozenfireshot",
		name: "Frozen Fire Shot",
		num: -158,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "revelationdance", target);
		},
		flags: {protect: 1, mirror: 1},
		status: "par",
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flame",
	},
	"scissorclaw": {
		accuracy: 90,
		basePower: 110,
		category: "Physical",
		desc: "Ignores target’s stat changes.",
		shortDesc: "Ignores target’s stat changes.",
		id: "scissorclaw",
		name: "Scissor Claw",
		num: -159,
		signature: true,
		pp: 2,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "crunch", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Nature",
	},
	"fistofthebeastking": {
		accuracy: 95,
		basePower: 120,
		category: "Physical",
		desc: "100% chance to raise the user's Attack by 1.",
		shortDesc: "Raises the user's Atk by 1.",
		id: "fistofthebeastking",
		name: "Fist of the Beast King",
		num: -160,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "megapunch", target);
		},
		flags: {protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {atk: 1},
			},
		},
		target: "normal",
		type: "Battle",
	},
	"xscratch": {
		accuracy: 90,
		basePower: 30,
		category: "Physical",
		desc: "Hits 2-5 times in one turn.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "xscratch",
		name: "X Scratch",
		num: -161,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "furyswipes", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		multihit: [2, 5],
		target: "normal",
		type: "Battle",
	},
	"burningfist": {
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		desc: "50% chance to raise the user's Attack by 2.",
		shortDesc: "50% chance to raise the user's Atk by 2.",
		id: "burningfist",
		name: "Burning Fist",
		num: -162,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "firepunch", target);
		},
		flags: {protect: 1, mirror: 1, defrost: 1, punch: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {atk: 2},
			},
		},
		target: "normal",
		type: "Flame",
	},
	"catclaw": {
		accuracy: 90,
		basePower: 0,
		damage: 150,
		category: "Physical",
		desc: "Always does 150 HP damage. 80% chance to poison.",
		shortDesc: "Always does 150 HP damage. 80% chance to poison.",
		id: "catclaw",
		name: "Cat Claw",
		num: -163,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 1,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "cut", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 80,
			status: 'psn',
		},
		target: "normal",
		type: "Battle",
	},
	"boneboomerang": {
		accuracy: 95,
		basePower: 45,
		category: "Physical",
		desc: "Hits 2 times in one turn.",
		shortDesc: "Hits 2 times in one turn.",
		id: "boneboomerang",
		name: "Bone Boomerang",
		num: -164,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "bonemerang", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		multihit: 2,
		target: "normal",
		type: "Battle",
	},
	"volcanicstrike": {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "No additional effect. Hits all adjacent foes.",
		shortDesc: "No additional effect.",
		id: "volcanicstrike",
		name: "Volcanic Strike",
		num: -165,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "lavaplume", target);
		},
		flags: {protect: 1, mirror: 1, defrost: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flame",
	},
	"mindfog": {
		accuracy: 95,
		basePower: 80,
		category: "Special",
		desc: "20% chance to put the foe(s) to sleep. Hits all adjacent foes.",
		shortDesc: "20% chance to put the foe(s) to sleep.",
		id: "mindfog",
		name: "Mind Fog",
		num: -166,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "clearsmog", target);
			this.add('-anim', source, "poisongas", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		secondary: {
			chance: 20,
			status: 'slp',
		},
		target: "normal",
		type: "Nature",
	},
	"mudball": {
		accuracy: 85,
		basePower: 85,
		category: "Special",
		desc: "80% chance to flinch the target.",
		shortDesc: "80% chance to flinch the target.",
		id: "mudball",
		name: "Mud Ball",
		num: -167,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "magnitude", target);
		},
		flags: {protect: 1, mirror: 1, bullet: 1},
		secondary: {
			chance: 80,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Nature",
	},
	"poopdunk": {
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		desc: "100% chance to lower the target's Defense by 2.",
		shortDesc: "Lowers the target's Def by 2.",
		id: "poopdunk",
		name: "Poop Dunk",
		num: -168,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "acidarmor", source);
			this.add('-anim', source, "bodyslam", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {def: -2},
		},
		target: "normal",
		type: "Filth",
	},
	"dancingleaves": {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "50% chance to lower the target’s accuracy by 2.",
		shortDesc: "50% chance to lower the target’s accuracy by 2.",
		id: "dancingleaves",
		name: "Dancing Leaves",
		num: -169,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "leaftornado", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {accuracy: -2},
		},
		target: "normal",
		type: "Nature",
	},
	"fakedrillspin": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Ignores target’s stat changes.",
		shortDesc: "Ignores target’s stat changes.",
		id: "fakedrillspin",
		name: "Fake Drill Spin",
		num: -170,
		signature: true,
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "geargrind", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		ignoreEvasion: true,
		ignoreDefensive: true,
		target: "normal",
		type: "Mech",
	},
	"numesludge": {
		accuracy: 95,
		basePower: 70,
		category: "Physical",
		desc: "100% chance to lower the target's Attack by 2.",
		shortDesc: "Lowers the target's Atk by 2.",
		id: "numesludge",
		name: "Nume Sludge",
		num: -171,
		signature: true,
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sludgebomb", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {atk: -2},
		},
		target: "normal",
		type: "Filth",
	},
	"pummelwhack": {
		accuracy: 95,
		basePower: 110,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		priority: 0,
		pp: 3,
		noPPBoosts: true,
		name: "Pummel Whack",
		num: -172,
		signature: true,
		id: "pummelwhack",
		flags: {protect: 1, mirror: 1},
		secondary: null,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "shadowpunch", target);
		},
		target: "normal",
		type: "Evil",
	},
	"firefeather": {
		name: "Fire Feather",
		num: -173,
		signature: true,
		id: "firefeather",
		basePower: 110,
		priority: 0,
		category: "Physical",
		type: "Flame",
		target: "normal",
		desc: "50% chance of raising the user's Attack and Special Attack  by 2.",
		shortDesc: "50% chance of raising the user's Atk and Sp.Atk by 2",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "roost", source);
			this.add('-anim', source, "flameburst", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {atk: 2, spa: 2},
			},
		},
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
	},
	"raremetalpoop": {
		name: "Rare Metal Poop",
		num: -174,
		signature: true,
		id: "raremetalpoop",
		basePower: 80,
		priority: 0,
		category: "Physical",
		type: "Filth",
		target: "normal",
		desc: "Forces the target to switch to a random ally.",
		shortDesc: "Forces the target to switch to a random ally.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "rockpolish", source);
			this.add('-anim', source, "acid", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		forceSwitch: true,
		accuracy: 95,
		pp: 5,
		noPPBoosts: true,
	},
	"chilipepperpummel": {
		name: "Chili Pepper Pummel",
		num: -175,
		signature: true,
		id: "chilipepperpummel",
		basePower: 70,
		priority: 0,
		category: "Special",
		type: "Flame",
		target: "allAdjacentFoes",
		desc: "50% chance to lower the foe(s) accuracy by 2. Hits all adjacent foes.",
		shortDesc: "50% chance to lower the foe(s) accuracy by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "smog", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {accuracy: -2},
		},
		accuracy: 95,
		pp: 5,
		noPPBoosts: true,
	},
	"antidigibeam": {
		name: "Anti-Digi Beam",
		num: -176,
		signature: true,
		id: "antidigibeam",
		basePower: 0,
		priority: 0,
		category: "Status",
		type: "Mech",
		target: "normal",
		desc: "Dots the Target.",
		shortDesc: "Dots the Target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "anchorshot", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		volatileStatus: "dot",
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
	},
	"nightroar": {
		name: "Night Roar",
		num: -177,
		signature: true,
		id: "nightroar",
		basePower: 100,
		priority: 0,
		category: "Physical",
		type: "Air",
		target: "allAdjacentFoes",
		desc: "Raises the user’s Speed by 1. Hits adjacent foes.",
		shortDesc: "Raises the user’s Speed by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "ominouswind", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		accuracy: 95,
		pp: 5,
		noPPBoosts: true,
		secondary: null,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			this.boost({spe: 1}, pokemon, pokemon, move);
		},
	},
	"stunray": {
		name: "Stun Ray",
		num: -178,
		signature: true,
		id: "stunray",
		basePower: 100,
		priority: 0,
		category: "Special",
		type: "Nature",
		target: "any",
		desc: "30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "bugbuzz", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
	},
	"iceblast": {
		name: "Ice Blast",
		num: -179,
		signature: true,
		id: "iceblast",
		basePower: 105,
		priority: 0,
		category: "Special",
		type: "Aqua",
		target: "any",
		desc: "100% chance to lower the target’s Speed by 1.",
		shortDesc: "Lowers the target’s Speed by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "watershuriken", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			boosts: {spe: -1},
		},
	},
	"hydropressure": {
		name: "Hydro Pressure",
		num: -180,
		signature: true,
		id: "hydropressure",
		basePower: 80,
		priority: 0,
		category: "Special",
		type: "Aqua",
		target: "allAdjacent",
		desc: "20% chance to force the foe(s) to randomly switch. Hits all adjacent foes.",
		shortDesc: "20% chance to force the foe(s) to randomly switch.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hydropump", target);
		},
		secondary: {
			chance: 20,
			onHit(target, source, move) {
				move.forceSwitch = true;
			},
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
	},
	"lustershot": {
		name: "Luster Shot",
		num: -181,
		signature: true,
		id: "lustershot",
		basePower: 90,
		priority: 1,
		category: "Special",
		type: "Holy",
		target: "any",
		desc: "Priority +1, does not check accuracy.",
		shortDesc: "Priority +1, does not check accuracy.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "moonblast", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		secondary: null,
		accuracy: true,
		pp: 3,
		noPPBoosts: true,
	},
	"necromagic": {
		name: "Necro Magic",
		num: -182,
		signature: true,
		id: "necromagic",
		basePower: 0,
		priority: 0,
		category: "Special",
		type: "Evil",
		target: "normal",
		desc: "OHKOs the target. Fails if user is a lower level.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hex", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		ohko: true,
		accuracy: 30,
		pp: 3,
		noPPBoosts: true,
	},
	"poop": {
		name: "Poop",
		num: -183,
		signature: true,
		id: "poop",
		basePower: 70,
		priority: 0,
		category: "Physical",
		type: "Filth",
		target: "normal",
		desc: "100% chance to lower the target’s Speed by 2.",
		shortDesc: "Lowers the target’s Speed by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "acid", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 5,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			boosts: {spe: -2},
		},
	},
	"hypercannon": {
		name: "Hyper Cannon",
		num: -184,
		signature: true,
		id: "hypercannon",
		priority: 0,
		basePower: 160,
		category: "Physical",
		type: "Mech",
		target: "normal",
		desc: "User cannot move next turn.",
		shortDesc: "User cannot move next turn.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dragonpulse", target);
		},
		flags: {protect: 1, mirror: 1, recharge: 1},
		secondary: null,
		self: {
			volatileStatus: 'mustrecharge',
		},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
	},
	"needlespray": {
		name: "Needle Spray",
		num: -185,
		signature: true,
		id: "needlespray",
		basePower: 90,
		priority: 0,
		category: "Physical",
		type: "Nature",
		target: "allAdjacentFoes",
		desc: "30% chance to paralyze the foe(s). Hits all adjacent foes.",
		shortDesc: "30% chance to paralyze the foe(s).",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "seedflare", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 5,
		noPPBoosts: true,
		secondary: {
			chance: 30,
			status: 'par',
		},
	},
	"blazeblaster": {
		name: "Blaze Blaster",
		num: -186,
		signature: true,
		id: "blazeblaster",
		priority: 0,
		basePower: 100,
		category: "Physical",
		type: "Flame",
		target: "any",
		desc: "High critical hit ratio.",
		shortDesc: "High critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "fireblast", target);
		},
		flags: {protect: 1, mirror: 1, defrost: 1},
		secondary: null,
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		critRatio: 2,
	},
	"aerialattack": {
		name: "Aerial Attack",
		num: -187,
		signature: true,
		id: "aerialattack",
		priority: 1,
		basePower: 90,
		category: "Special",
		type: "Holy",
		target: "any",
		desc: "Priority +1, high critical hit ratio.",
		shortDesc: "Priority +1, high critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "moonblast", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		critRatio: 2,
	},
	"sweetbreath": {
		name: "Sweet Breath",
		num: -188,
		signature: true,
		id: "sweetbreath",
		priority: 0,
		basePower: 70,
		category: "Special",
		type: "Nature",
		target: "allAdjacentFoes",
		desc: "100% chance to lower the foe(s) evasion by 2. Hits all adjacent foes.",
		shortDesc: "Lowers the foe(s) evasion by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "smog", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		accuracy: 95,
		pp: 5,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			boosts: {evasion: -2},
		},
	},
	"deadlyweed": {
		name: "Deadly Weed",
		num: -189,
		signature: true,
		id: "deadlyweed",
		priority: 0,
		basePower: 70,
		category: "Special",
		type: "Nature",
		target: "normal",
		desc: "50% chance to lower the target’s Speed and accuracy by 2.",
		shortDesc: "50% chance to lower the target’s Speed and accuracy by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "grasspledge", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 5,
		noPPBoosts: true,
		secondary: {
			chance: 50,
			boosts: {spe: -2, accuracy: -2},
		},
	},
	"thunderray": {
		name: "Thunder Ray",
		num: -190,
		signature: true,
		id: "thunderray",
		priority: 0,
		basePower: 100,
		category: "Special",
		type: "Air",
		target: "normal",
		desc: "30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "thunderbolt", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 30,
			status: 'par',
		},
	},
	"spiralsword": {
		name: "Spiral Sword",
		num: -191,
		signature: true,
		id: "spiralsword",
		priority: 0,
		basePower: 110,
		category: "Special",
		type: "Mech",
		target: "any",
		desc: "High critical hit ratio.",
		shortDesc: "High critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "charge", source);
			this.add('-anim', source, "secretsword", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		critRatio: 2,
	},
	"celestialarrow": {
		name: "Celestial Arrow",
		num: -192,
		signature: true,
		id: "celestialarrow",
		priority: 0,
		basePower: 110,
		category: "Special",
		type: "Holy",
		target: "any",
		desc: "Ignores target’s stat changes. This move does not check accuracy.",
		shortDesc: "Ignores target’s stat changes. This move does not check accuracy.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "extremeevoboost", source);
			this.add('-anim', source, "spikecannon", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: true,
		pp: 3,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
	},
	"vampirewave": {
		name: "Vampire Wave",
		num: -193,
		signature: true,
		id: "vampirewave",
		priority: 0,
		basePower: 100,
		category: "Physical",
		type: "Evil",
		target: "normal",
		desc: "User gains 50% HP dealt. 50% chance to confuse. 1.3 HP if Big Root is held by the user.",
		shortDesc: "User gains 50% HP dealt. 50% chance to confuse.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "bite", target);
			this.add('-anim', source, "drainingkiss", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		drain: [1, 2],
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
	},
	"fullmoonkick": {
		name: "Full Moon Kick",
		num: -194,
		signature: true,
		id: "fullmoonkick",
		priority: 0,
		basePower: 115,
		category: "Physical",
		type: "Battle",
		target: "normal",
		desc: "100% chance to raise the user’s Speed by 2.",
		shortDesc: "Raises the user’s Speed by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "cosmicpower", source);
			this.add('-anim', source, "highjumpkick", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 95,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {spe: 2},
			},
		},
	},
	"coldflame": {
		name: "Cold Flame",
		num: -195,
		signature: true,
		id: "coldflame",
		priority: 0,
		basePower: 100,
		category: "Physical",
		type: "Flame",
		target: "normal",
		desc: "100% chance to raise the user’s Attack by 2.",
		shortDesc: "Raises the user’s Atk by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hail", target);
			this.add('-anim', source, "firepunch", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {atk: 2},
			},
		},
	},
	"nightmaresyndrome": {
		name: "Nightmare Syndrome",
		num: -196,
		signature: true,
		id: "nightmaresyndrome",
		priority: 0,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.dex.clampIntRange(Math.floor(target.hp / 2), 1);
		},
		category: "Physical",
		type: "Filth",
		target: "any",
		desc: "Halves target’s HP. 50% chance to sleep target.",
		shortDesc: "Halves target’s HP. 50% chance to sleep target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "topsyturvy", target);
			this.add('-anim', source, "darkvoid", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 50,
			status: 'slp',
		},
	},
	"metalmeteor": {
		name: "Metal Meteor",
		num: -197,
		signature: true,
		id: "metalmeteor",
		priority: 0,
		basePower: 130,
		category: "Physical",
		type: "Mech",
		target: "any",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "corkscrewcrash", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
	},
	"loveserenade": {
		name: "Love Serenade",
		num: -198,
		signature: true,
		id: "loveserenade",
		priority: 0,
		basePower: 105,
		category: "Special",
		type: "Filth",
		target: "allAdjacentFoes",
		desc: "Ignores foe(s) stat changes. 30% paralyze chance. Hits all adjacent foes.",
		shortDesc: "Ignores foe(s) stat changes. 30% paralyze chance.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "spotlight", target);
			this.add('-anim', source, "snarl", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		accuracy: 95,
		pp: 2,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: {
			chance: 30,
			status: 'par',
		},
	},
	"shadowwing": {
		name: "Shadow Wing",
		num: -199,
		signature: true,
		id: "shadowwing",
		basePower: 105,
		priority: 0,
		category: "Special",
		type: "Flame",
		target: "allAdjacentFoes",
		desc: "100% chance of raising the user’s Speed by 1. Hits all adjacent foes.",
		shortDesc: "Raises user’s Speed by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sunsteelstrike", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 5,
		noPPBoosts: true,
		secondary: null,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			this.boost({spe: 1}, pokemon, pokemon, move);
		},
	},
	"energyshot": {
		name: "Energy Shot",
		num: -200,
		signature: true,
		id: "energyshot",
		priority: 0,
		basePower: 95,
		category: "Special",
		type: "Mech",
		target: "allAdjacentFoes",
		desc: "Causes the foe(s) to be buggy. Hits all adjacent foes.",
		shortDesc: "Causes the foe(s) to be buggy.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "clangingscales", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			volatileStatus: 'bug',
		},
	},
	"deadlybomb": {
		name: "Deadly Bomb",
		num: -201,
		signature: true,
		id: "deadlybomb",
		priority: 0,
		basePower: 200,
		category: "Physical",
		type: "Mech",
		target: "allAdjacentFoes",
		desc: "Hits all adjacent foes. The user faints.",
		shortDesc: "Hits all adjacent foes. The user faints.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "explosion", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 100,
		pp: 2,
		noPPBoosts: true,
		selfdestruct: "always",
	},
	"fistofice": {
		name: "Fist of Ice",
		num: -202,
		signature: true,
		id: "fistofice",
		priority: 0,
		basePower: 120,
		category: "Physical",
		type: "Aqua",
		target: "normal",
		desc: "80% chance to flinch the target.",
		shortDesc: "80% chance to flinch the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hail", target);
			this.add('-anim', source, "icepunch", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1, punch: 1},
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 80,
			volatileStatus: 'flinch',
		},
	},
	"flowercannon": {
		name: "Flower Cannon",
		num: -203,
		signature: true,
		id: "flowercannon",
		priority: 1,
		basePower: 100,
		category: "Special",
		type: "Nature",
		target: "any",
		desc: "Priority +1.",
		shortDesc: "Priority +1",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "petalblizzard", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
	},
	"gateofdestiny": {
		name: "Gate of Destiny",
		num: -204,
		signature: true,
		id: "gateofdestiny",
		basePower: 100,
		priority: 0,
		category: "Special",
		type: "Holy",
		target: "normal",
		desc: "25% chance to OHKO. Fails if user is lower level.",
		shortDesc: "25% chance to OHKO. Fails if user is lower level.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "swordsdance", source);
			this.add('-anim', source, "spacialrend", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 25,
			onHit(target, source, move) {
				//Preliminary implementation; probably won't interact perfectly with all mechanics
				if (target.level > source.level) return;
				this.add('-ohko');
				this.faint(target, source, move);
			},
		},
	},
	"darknesswave": {
		accuracy: 90,
		basePower: 60,
		category: "Special",
		desc: "Hits adjacent foe(s) 2 times in one turn. Hits all adjacent foes.",
		shortDesc: "Hits adjacent foe(s) 2 times in one turn.",
		id: "darknesswave",
		name: "Darkness Wave",
		num: -205,
		signature: true,
		target: "allAdjacentFoes",
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "octazooka", target);
			this.add('-anim', source, "ominouswind", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		type: "Evil",
	},
	"smilebomber": {
		name: "Smile Bomber",
		num: -206,
		signature: true,
		id: "smilebomber",
		priority: 0,
		basePower: 95,
		category: "Physical",
		type: "Mech",
		target: "any",
		desc: "Does not check accuracy.",
		shortDesc: "Does not check accuracy.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dynamicpunch", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: true,
		pp: 5,
		noPPBoosts: true,
	},
	"genocideattack": {
		name: "Genocide Attack",
		num: -207,
		signature: true,
		id: "genocideattack",
		priority: 0,
		basePower: 110,
		category: "Physical",
		type: "Evil",
		target: "normal",
		desc: "High critical hit ratio.",
		shortDesc: "High critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "darkpulse", target);
			this.add('-anim', source, "foulplay", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		critRatio: 2,
	},
	"hornbuster": {
		name: "Horn Buster",
		num: -208,
		signature: true,
		id: "hornbuster",
		priority: 0,
		basePower: 125,
		category: "Physical",
		type: "Air",
		target: "normal",
		desc: "Ignores target's stat changes.",
		shortDesc: "Ignores target's stat changes.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "paraboliccharge", target);
			this.add('-anim', source, "voltswitch", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		accuracy: 95,
		pp: 2,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
	},
	"lightningjavelin": {
		name: "Lightning Javelin",
		num: -209,
		signature: true,
		id: "lightningjavelin",
		priority: 0,
		basePower: 110,
		category: "Special",
		type: "Air",
		target: "any",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "thunder", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
	},
	"modestlystun": {
		name: "Modestly Stun",
		num: -210,
		signature: true,
		id: "modestlystun",
		priority: 0,
		basePower: 80,
		category: "Physical",
		type: "Holy",
		target: "normal",
		desc: "80% chance to paralyze the target.",
		shortDesc: "80% chance to paralyze the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "crosschop", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 80,
			status: 'par',
		},
	},
	"berserkthinking": {
		name: "Berserk Thinking",
		num: -211,
		signature: true,
		id: "berserkthinking",
		priority: 0,
		basePower: 40,
		category: "Physical",
		type: "Evil",
		target: "any",
		desc: "Hits 2-4 times in one turn.",
		shortDesc: "Hits 2-4 times in one turn.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "smartstrike", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		multihit: [2, 4],
	},
	"gigadestroyer": {
		name: "Giga Destroyer",
		num: -212,
		signature: true,
		id: "gigadestroyer",
		priority: 0,
		basePower: 125,
		category: "Physical",
		type: "Flame",
		target: "normal",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "infernooverdrive", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
	},
	"revengeflame": {
		name: "Revenge Flame",
		num: -213,
		signature: true,
		id: "revengeflame",
		priority: -4, // Same as Revenge
		basePower: 70,
		category: "Physical",
		type: "Flame",
		target: "normal",
		desc: "Power doubles if user is damaged by the target.",
		shortDesc: "Power doubles if user is damaged by the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "moongeistbeam", target);
		},
		flags: {protect: 1, mirror: 1, defrost: 1},
		secondary: null,
		accuracy: 100,
		pp: 5,
		noPPBoosts: true,
		basePowerCallback(pokemon, target, move) {
			let damagedByTarget = pokemon.attackedBy.some(
				p => p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('Boosted for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
	},
	"energybomb": {
		name: "Energy Bomb",
		num: -214,
		signature: true,
		id: "energybomb",
		priority: 0,
		basePower: 95,
		category: "Special",
		type: "Mech",
		target: "any",
		desc: "Does not check accuracy.",
		shortDesc: "Does not check accuracy.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "magnetbomb", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: true,
		pp: 5,
		noPPBoosts: true,
	},
	"galacticflare": {
		name: "Galactic Flare",
		num: -215,
		signature: true,
		id: "galacticflare",
		priority: 0,
		basePower: 90,
		category: "Special",
		type: "Battle",
		target: "allAdjacentFoes",
		desc: "50% chance to raise Defense by 2. Hits all adjacent foes.",
		shortDesc: "50% chance to raise Defense by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dragonascent", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 5,
		noPPBoosts: true,
		secondary: null,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (this.random(100) < 50) this.boost({def: 2}, pokemon, pokemon, move);
		},
	},
	"heartsattack": {
		name: "Hearts Attack",
		num: -216,
		signature: true,
		id: "heartsattack",
		priority: 0,
		basePower: 100,
		category: "Special",
		type: "Holy",
		target: "normal",
		desc: "Ignores target’s stat changes. 50% confuse chance.",
		shortDesc: "Ignores target’s stat changes. 50% confuse chance.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "charm", target);
			this.add('-anim', source, "miracleeye", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 2,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
	},
	"grislywing": {
		name: "Grisly Wing",
		num: -217,
		signature: true,
		id: "grislywing",
		priority: 0,
		basePower: 100,
		category: "Special",
		type: "Evil",
		target: "allAdjacentFoes",
		desc: "User recovers 50% of the damage dealt to foes. Hits all adjacent foes. 1.3 HP if Big Root is held by the user.",
		shortDesc: "User recovers 50% of the damage dealt to foes.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "octazooka", target);
			this.add('-anim', source, "drainingkiss", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1},
		secondary: null,
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		drain: [1, 2],
	},
	"pitbomb": {
		name: "Pit Bomb",
		num: -218,
		signature: true,
		id: "pitbomb",
		priority: 1,
		basePower: 100,
		category: "Special",
		type: "Holy",
		target: "normal",
		desc: "Priority +1.",
		shortDesc: "Priority +1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "psychoboost", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
	},
	"musicalfist": {
		name: "Musical Fist",
		num: -219,
		signature: true,
		id: "musicalfist",
		priority: 0,
		basePower: 100,
		category: "Special",
		type: "Battle",
		target: "allAdjacentFoes",
		desc: "30% chance to lower foe(s) Attack, Special Attack and Special Defense by 2. 10% chance of sleep. Hits all adjacent foes and is a sound move.",
		shortDesc: "30% chance to lower foe(s) Atk, Sp.Atk, Sp.Def by 2. 10% chance of sleep.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "boomburst", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, punch: 1, contact: 1},
		secondary: null,
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
		secondaries: [
			{
				chance: 30,
				boosts: {
					atk: -2,
					spa: -2,
					spd: -2,
				},
			},
			{
				chance: 10,
				status: 'slp',
			},
		],
	},
	"oblivionbird": {
		name: "Oblivion Bird",
		num: -220,
		signature: true,
		id: "oblivionbird",
		priority: 0,
		basePower: 130,
		category: "Physical",
		type: "Evil",
		target: "normal",
		desc: "100% chance to lower the target’s Defense by 2.",
		shortDesc: "Lowers the target’s Defense by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "clangoroussoulblaze", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			boosts: {def: -2},
		},
	},
	"fragbomb": {
		name: "Frag Bomb",
		num: -221,
		signature: true,
		id: "fragbomb",
		priority: 0,
		basePower: 200,
		category: "Physical",
		type: "Evil",
		target: "allAdjacentFoes",
		desc: "Hits adjacent foes. The user faints. Hits all adjacent foes.",
		shortDesc: "Hits adjacent foes. The user faints.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "imprison", source);
			this.add('-anim', source, "explosion", target);
		},
		secondary: null,
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 2,
		noPPBoosts: true,
		selfdestruct: 'always',
	},
	"unidentifiedflyingkiss": {
		name: "Unidentified Flying Kiss",
		num: -222,
		signature: true,
		id: "unidentifiedflyingkiss",
		priority: 0,
		basePower: 95,
		category: "Physical",
		type: "Filth",
		target: "normal",
		desc: "50% chance to dot the target.",
		shortDesc: "50% chance to dot the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "lovelykiss", target);
			this.add('-anim', source, "dracometeor", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 50,
			volatileStatus: 'dot',
		},
	},
	"volcanicstrikes": {
		name: "Volcanic Strike S",
		num: -223,
		signature: true,
		id: "volcanicstrikes",
		priority: 0,
		basePower: 110,
		category: "Physical",
		type: "Flame",
		target: "allAdjacentFoes",
		desc: "No additional effect. Hits all adjacent foes.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "eruption", target);
		},
		secondary: null,
		flags: {protect: 1, mirror: 1, defrost: 1},
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
	},
	"heartbreakattack": {
		name: "Heartbreak Attack",
		num: -224,
		signature: true,
		id: "heartbreakattack",
		priority: 0,
		basePower: 100,
		category: "Special",
		type: "Evil",
		target: "normal",
		desc: "Ignores target’s stat changes. 50% confuse chance.",
		shortDesc: "Ignores target’s stat changes. 50% confuse chance.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "lovelykiss", target);
			this.add('-anim', source, "darkvoid", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 2,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
	},
	"evilicicle": {
		name: "Evil Icicle",
		num: -225,
		signature: true,
		id: "evilicicle",
		priority: 0,
		basePower: 110,
		category: "Special",
		type: "Aqua",
		target: "any",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "grudge", source);
			this.add('-anim', source, "icebeam", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
	},
	"wolfclaw": {
		name: "Wolf Claw",
		num: -226,
		signature: true,
		id: "wolfclaw",
		priority: 0,
		basePower: 115,
		category: "Physical",
		type: "Battle",
		target: "any",
		desc: "100% chance to raise the user’s Speed by 2.",
		shortDesc: "Raises the user’s Speed by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "cosmicpower", source);
			this.add('-anim', source, "block", target);
		},
		flags: {protect: 1, mirror: 1, distance: 1, contact: 1},
		accuracy: 95,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {spe: 2},
			},
		},
	},
	"tidalwave": {
		name: "Tidal Wave",
		num: -226,
		signature: true,
		id: "tidalwave",
		priority: 0,
		basePower: 105,
		category: "Special",
		type: "Aqua",
		target: "allAdjacent",
		desc: "No additional effect. Hits adjacent monsters.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "waterspout", target);
		},
		secondary: null,
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
	},
	"vulcanshammer": {
		name: "Vulcan's Hammer",
		num: -227,
		signature: true,
		id: "vulcanshammer",
		priority: 0,
		basePower: 130,
		category: "Physical",
		type: "Air",
		target: "normal",
		desc: "Ignores the target’s stat stage changes.",
		shortDesc: "Ignores the target’s stat stage changes.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "plasmafists", target);
		},
		secondary: null,
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
	},
	"bladeofthedragonking": {
		name: "Blade of the Dragon King",
		num: -228,
		signature: true,
		id: "bladeofthedragonking",
		priority: 0,
		basePower: 55,
		category: "Physical",
		type: "Battle",
		target: "normal",
		desc: "Hits 2-5 times in one turn.",
		shortDesc: "Hits 2-5 times in one turn.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "swordsdance", source);
			this.add('-anim', source, "sacredsword", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 85,
		pp: 2,
		noPPBoosts: true,
		multihit: [2, 5],
		secondary: null,
	},
	"garurutomahawk": {
		name: "Garuru Tomahawk",
		num: -229,
		signature: true,
		id: "garurutomahawk",
		priority: 0,
		basePower: 130,
		category: "Physical",
		type: "Mech",
		target: "normal",
		desc: "Does not check accuracy.",
		shortDesc: "Does not check accuracy.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gearup", source);
			this.add('-anim', source, "mistball", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: true,
		pp: 3,
		noPPBoosts: true,
		secondary: null,
	},
	"blacktornado": {
		name: "Black Tornado",
		num: -230,
		signature: true,
		id: "blacktornado",
		priority: 0,
		basePower: 140,
		category: "Physical",
		type: "Mech",
		target: "normal",
		desc: "Ignores the target’s stat stage changes.",
		shortDesc: "Ignores the target’s stat stage changes.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "tailwhip", target);
			this.add('-anim', source, "photongeyser", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: null,
	},
	"tomahawkstinger": {
		name: "Tomahawk Stinger",
		num: -231,
		signature: true,
		id: "tomahawkstinger",
		priority: 0,
		basePower: 110,
		category: "Physical",
		type: "Battle",
		target: "normal",
		desc: "30% chance to confuse the target.",
		shortDesc: "30% chance to confuse the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "tailwhip", target);
			this.add('-anim', source, "secretsword", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 5,
		noPPBoosts: true,
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
	},
	"lightningspear": {
		name: "Lightning Spear",
		num: -232,
		signature: true,
		id: "lightningspear",
		priority: 0,
		basePower: 130,
		category: "Physical",
		type: "Air",
		target: "normal",
		desc: "Ignores target’s stat changes. High critical hit ratio.",
		shortDesc: "Ignores target’s stat changes. High critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "10000000voltthunderbolt", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
		critRatio: 2,
		secondary: null,
	},
	"heavensjudgment": {
		name: "Heaven's Judgment",
		num: -233,
		signature: true,
		id: "heavensjudgment",
		priority: 0,
		basePower: 110,
		category: "Special",
		type: "Air",
		target: "allAdjacentFoes",
		desc: "High critical hit ratio. Hits all adjacent foes.",
		shortDesc: "High critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gigavolthavoc", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
		critRatio: 2,
		secondary: null,
	},
	"blackdeathcloud": {
		name: "Black Death Cloud",
		num: -234,
		signature: true,
		id: "blackdeathcloud",
		priority: 0,
		basePower: 105,
		category: "Special",
		type: "Filth",
		target: "any",
		desc: "50% chance to put the target to sleep.",
		shortDesc: "50% chance to put the target to sleep.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sludgewave", target);
			this.add('-anim', source, "darkvoid", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 50,
			status: 'slp',
		},
	},
	"bravemetal": {
		name: "Brave Metal",
		num: -235,
		signature: true,
		id: "bravemetal",
		priority: 0,
		basePower: 135,
		category: "Physical",
		type: "Mech",
		target: "any",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "spectralthief", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 95,
		pp: 2,
		noPPBoosts: true,
		secondary: null,
	},
	"brainrupture": {
		name: "Brain Rupture",
		num: -236,
		signature: true,
		id: "brainrupture",
		priority: 0,
		basePower: 110,
		category: "Special",
		type: "Mech",
		target: "normal",
		desc: "50% chance to confuse the target.",
		shortDesc: "50% chance to confuse the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "prismaticlaser", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
	},
	"gigablaster": {
		name: "Giga Blaster",
		num: -237,
		signature: true,
		id: "gigablaster",
		priority: 0,
		basePower: 130,
		category: "Special",
		type: "Air",
		target: "normal",
		desc: "Does not check accuracy",
		shortDesc: "Does not check accuracy",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "zapcannon", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: true,
		pp: 3,
		noPPBoosts: true,
		secondary: null,
	},
	"atomicray": {
		name: "Atomic Ray",
		num: -238,
		signature: true,
		id: "atomicray",
		priority: 0,
		basePower: 120,
		category: "Physical",
		type: "Mech",
		target: "any",
		desc: "80% chance to flinch the target.",
		shortDesc: "80% chance to flinch the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gearup", source);
			this.add('-anim', source, "zapcannon", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 80,
			volatileStatus: 'flinch',
		},
	},
	"phantompain": {
		name: "Phantom Pain",
		num: -239,
		signature: true,
		id: "phantompain",
		priority: 0,
		basePower: 125,
		category: "Special",
		type: "Evil",
		target: "normal",
		desc: "Ignores stat changes. User gains 50% HP dealt. 1.3 HP if Big Root is held by the user.",
		shortDesc: "Ignores stat changes. User gains 50% HP dealt.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "refresh", source);
			this.add('-anim', source, "neverendingnightmare", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1, contact: 1},
		accuracy: 95,
		pp: 2,
		noPPBoosts: true,
		ignoreDefensive: true,
		ignoreEvasion: true,
		drain: [1, 2],
		secondary: null,
	},
	"infinitycannon": {
		name: "Infinity Cannon",
		num: -240,
		signature: true,
		id: "infinitycannon",
		priority: 0,
		basePower: 125,
		category: "Special",
		type: "Mech",
		target: "allAdjacentFoes",
		desc: "Hits adjacent foe(s) 1-2 times in one turn. Hits all adjacent foes.",
		shortDesc: "Hits adjacent foe(s) 1-2 times in one turn.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "coreenforcer", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 75,
		pp: 2,
		noPPBoosts: true,
		multihit: [1, 2],
		secondary: null,
	},
	"firetornado": {
		name: "Fire Tornado",
		num: -241,
		signature: true,
		id: "firetornado",
		priority: 0,
		basePower: 105,
		category: "Special",
		type: "Holy",
		target: "allAdjacentFoes",
		desc: "No additional effect. Hits all adjacent foes.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "skillswap", target);
			this.add('-anim', source, "firespin", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 5,
		noPPBoosts: true,
		secondary: null,
	},
	"oceanlove": {
		name: "Ocean Love",
		num: -242,
		signature: true,
		id: "oceanlove",
		priority: 0,
		basePower: 0,
		category: "Status",
		type: "Aqua",
		target: "allySide",
		desc: "Cures allies status. Heals allies by 50% max HP.",
		shortDesc: "Cures allies status. Heals allies by 50% max HP.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "aquaring", source);
			this.add('-anim', source, "attract", target);
		},
		flags: {heal: 1, snatch: 1},
		accuracy: true,
		pp: 5,
		noPPBoosts: true,
		secondary: null,
		onHitSide(side) {
			let didSomething = false;
			for (let pokemon of side.active) {
				if (pokemon && this.heal(pokemon.maxhp / 2, pokemon)) didSomething = true;
				if (pokemon && pokemon.cureStatus()) didSomething = true;
			}
			return didSomething;
		},
	},
	"darkrecital": {
		name: "Dark Recital",
		num: -243,
		signature: true,
		id: "darkrecital",
		priority: 0,
		basePower: 115,
		category: "Special",
		type: "Filth",
		target: "normal",
		desc: "100% chance to flinch the target, is a sound move.",
		shortDesc: "Flinches the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "spotlight", target);
			this.add('-anim', source, "roaroftime", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		accuracy: 100,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
	},
	"icewolfclaw": {
		name: "Ice Wolf Claw",
		num: -244,
		signature: true,
		id: "icewolfclaw",
		priority: 0,
		basePower: 60,
		category: "Physical",
		type: "Aqua",
		target: "allAdjacentFoes",
		desc: "80% chance to flinch the foe(s). Hits 2 times. Hits all adjacent foes.",
		shortDesc: "80% chance to flinch the foe(s). Hits 2 times.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "blizzard", target);
			this.add('-anim', source, "sheercold", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		multihit: 2,
		secondary: {
			chance: 80,
			volatileStatus: 'flinch',
		},
	},
	"riverofpower": {
		name: "River of Power",
		num: -245,
		signature: true,
		id: "riverofpower",
		priority: 0,
		basePower: 110,
		category: "Special",
		type: "Aqua",
		target: "any",
		desc: "100% chance to lower the target's Special Defense by 2.",
		shortDesc: "Lowers the target's Sp.Def by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "originpulse", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			boosts: {spd: -2},
		},
	},
	"edensjavelin": {
		name: "Eden's Javelin",
		num: -246,
		signature: true,
		id: "edensjavelin",
		priority: 0,
		basePower: 120,
		category: "Special",
		type: "Holy",
		target: "normal",
		desc: "100% chance to raise the user's Special Attack by 2.",
		shortDesc: "Raises the user's Sp.Atk by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "lightofruin", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {spa: 2},
			},
		},
	},
	"starlightexplosion": {
		name: "Starlight Explosion",
		num: -247,
		signature: true,
		id: "starlightexplosion",
		priority: 0,
		basePower: 105,
		category: "Special",
		type: "Flame",
		target: "allAdjacentFoes",
		desc: "Hits adjacent foes. Heals allies by 50% max HP. Hits all adjacent foes, 1.3 HP if Big Root is held by the user.",
		shortDesc: "Hits adjacent foes. Heals allies by 50% max HP.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "doomdesire", target);
			this.add('-anim', source, "moonlight", source);
		},
		flags: {protect: 1, mirror: 1, heal: 1, authentic: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: null,
		onAfterMoveSecondarySelf(source, target, move) {
			for (const allyActive of source.side.active) {
				if (allyActive) this.heal(allyActive.maxhp / 2, allyActive);
			}
		},
	},
	"smilewarhead": {
		name: "Smile Warhead",
		num: -248,
		signature: true,
		id: "smilewarhead",
		priority: 0,
		basePower: 110,
		category: "Physical",
		type: "Mech",
		target: "normal",
		desc: "Forces the target to switch to a random ally.",
		shortDesc: "Forces the target to switch to a random ally.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "pulverizingpancake", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
		forceSwitch: true,
		secondary: null,
	},
	"darknesszone": {
		name: "Darkness Zone",
		num: -249,
		signature: true,
		id: "darknesszone",
		priority: 0,
		basePower: 40,
		category: "Physical",
		type: "Evil",
		target: "allAdjacentFoes",
		desc: "Hits foe(s) 3 times. Lowers foe(s) Defense by 1. Hits all adjacent foes.",
		shortDesc: "Hits foe(s) 3 times. Lowers foe(s) Defense by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sinisterarrowraid", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
		multihit: 3,
		secondary: null,
		onAfterMoveSecondary(target, source, move) {
			this.boost({def: -1});
		},
	},
	"knowledgestream": {
		name: "Knowledge Stream",
		num: -250,
		signature: true,
		id: "knowledgestream",
		priority: 0,
		basePower: 120,
		category: "Special",
		type: "Holy",
		target: "normal",
		desc: "20% chance to paralyze or sleep or panic the target.",
		shortDesc: "20% chance to paralyze or sleep or panic target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "moonlight", source);
			this.add('-anim', source, "hyperbeam", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
		secondary: {
			chance: 20,
			onHit(target) {
				switch (this.random(3)) {
				case 0:
					target.trySetStatus('par');
					break;
				case 1:
					target.trySetStatus('slp');
					break;
				case 2:
					target.addVolatile('panic');
				}
			},
		},
	},
	"thornwhip": {
		name: "Thorn Whip",
		num: -251,
		signature: true,
		id: "thornwhip",
		priority: 1,
		basePower: 115,
		category: "Physical",
		type: "Nature",
		target: "normal",
		desc: "Priority +1, User gains 50% HP dealt. 50% chance to paralyze. 1.3 HP if Big Root is held by the user.",
		shortDesc: "Priority +1, User gains 50% HP dealt. 50% chance to paralyze.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "crosspoison", target);
			this.add('-anim', source, "paraboliccharge", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1, contact: 1},
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		drain: [1, 2],
		secondary: {
			chance: 50,
			status: 'par',
		},
	},
	"howlingcrusher": {
		name: "Howling Crusher",
		num: -252,
		signature: true,
		id: "howlingcrusher",
		basePower: 60,
		priority: 0,
		category: "Physical",
		type: "Battle",
		target: "normal",
		desc: "Hits 2 times in one turn. High critical hit ratio, is a sound move.",
		shortDesc: "Hits 2 times in one turn. High critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "honeclaws", source);
			this.add('-anim', source, "crushclaw", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 95,
		pp: 3,
		noPPBoosts: true,
		secondary: null,
		multihit: 2,
		critRatio: 2,
	},
	"strikeofthesevenstars": {
		name: "Strike of the Seven Stars",
		num: -253,
		signature: true,
		id: "strikeofthesevenstars",
		basePower: 20,
		priority: 0,
		category: "Special",
		type: "Holy",
		target: "allAdjacentFoes",
		desc: "Hits adjacent foe(s) 7 times in one turn. Hits all adjacent foes.",
		shortDesc: "Hits adjacent foe(s) 7 times in one turn.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hiddenpower", target);
			this.add('-anim', source, "judgment", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		accuracy: 90,
		pp: 3,
		noPPBoosts: true,
		multihit: 7,
	},
	"venominfusion": {
		name: "Venom Infusion",
		num: -254,
		signature: true,
		id: "venominfusion",
		basePower: 130,
		priority: 0,
		category: "Physical",
		type: "Evil",
		target: "normal",
		desc: "User gains 50% HP dealt. 100% chance to poison, 1.3 HP if Big Root is held by the user.",
		shortDesc: "User gains 50% HP dealt, poisons the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "grudge", source);
			this.add('-anim', source, "thousandwaves", target);
		},
		flags: {protect: 1, mirror: 1, heal: 1},
		accuracy: 95,
		pp: 2,
		noPPBoosts: true,
		drain: [1, 2],
		secondary: {
			chance: 100,
			status: 'psn',
		},
	},
	"arcticblizzard": {
		name: "Arctic Blizzard",
		num: -255,
		signature: true,
		id: "arcticblizzard",
		basePower: 130,
		priority: 0,
		category: "Physical",
		type: "Aqua",
		target: "normal",
		desc: "100% chance to flinch the target.",
		shortDesc: "Flinches the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "icehammer", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 2,
		noPPBoosts: true,
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
	},
	"terraforce": {
		name: "Terra Force",
		num: -256,
		signature: true,
		id: "terraforce",
		priority: 0,
		basePower: 125,
		category: "Physical",
		type: "Flame",
		target: "allAdjacentFoes",
		desc: "100% chance to raise Attack by 2. Hits all adjacent foes.",
		shortDesc: "100% chance to raise Atk by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "fusionflare", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 3,
		noPPBoosts: true,
		secondary: null,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			this.boost({atk: 2}, pokemon, pokemon, move);
		},
	},

	// Generic attacks start here
	"burningheart": {
		name: "Burning Heart",
		num: -257,
		signature: false,
		id: "burningheart",
		priority: 0,
		basePower: 0,
		category: "Status",
		type: "Flame",
		target: "self",
		desc: "Raises the user’s attack by 2.",
		shortDesc: "Raises the user’s atk by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "tailglow", target);
		},
		flags: {defrost: 1, snatch: 1},
		accuracy: true,
		pp: 20,
		boosts: {atk: 2},
		secondary: null,
	},
	"heatbreath": {
		name: "Heat Breath",
		num: -258,
		signature: false,
		id: "heatbreath",
		priority: 1,
		basePower: 50,
		category: "Special",
		type: "Flame",
		target: "normal",
		desc: "Priority +1, 10% chance to burn the target.",
		shortDesc: "Priority +1, 10% chance to brn the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "heatwave", target);
		},
		flags: {protect: 1, mirror: 1, defrost: 1},
		accuracy: 100,
		pp: 30,
		secondary: {
			chance: 10,
			status: 'brn',
		},
	},
	"firetower": {
		name: "Fire Tower",
		num: -259,
		signature: false,
		id: "firetower",
		basePower: 60,
		category: "Physical",
		priority: 0,
		type: "Flame",
		target: "normal",
		desc: "Ignores target's stat changes, 10% burn chance.",
		shortDesc: "Ignores target's stat changes, 10% brn chance.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "flamecharge", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 25,
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: {
			chance: 10,
			status: 'brn',
		},
	},
	"firewall": {
		name: "Firewall",
		num: -260,
		signature: false,
		id: "firewall",
		priority: 4,
		basePower: 0,
		category: "Status",
		type: "Flame",
		target: "self",
		desc: "Priority +4. Protects user from moves. Contact: loses 1/8 max hp unless Fire/Flame type.",
		shortDesc: "Protect, 1/8 max hp contact damage unless fire/flame type.",
		onPrepareHit(pokemon, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "firespin", source);
			this.add('-anim', source, "protect", source);
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		flags: {defrost: 1},
		accuracy: true,
		pp: 10,
		secondary: null,
		stallingMove: true,
		volatileStatus: 'firewall',
		onHit(pokemon) {
			pokemon.addVolatile('stall');
			this.add('-message', pokemon.name + ' is hidden behind a firewall!');
		},
		effect: {
			duration: 1,
			//this is a side condition
			onStart(target, source) {
				this.add('-singleturn', source, 'move: Firewall');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Firewall'); //ditto ^^^^^
				source.moveThisTurnResult = true;
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (source.types.includes('Fire') || source.types.includes('Flame')) return null;
				this.damage(source.maxhp / 8, source, target);
				return null;
			},
		},
	},
	"meltdown": {
		name: "Meltdown",
		num: -261,
		signature: false,
		id: "meltdown",
		priority: 0,
		basePower: 75,
		category: "Special",
		type: "Flame",
		target: "allAdjacentFoes",
		desc: "30% chance to burn the foe(s).",
		shortDesc: "30% chance to brn the foe(s).",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "burnup", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 15,
		secondary: {
			chance: 30,
			status: 'brn',
		},
	},
	"infinityburn": {
		name: "Infinity Burn",
		num: -262,
		signature: false,
		id: "infinityburn",
		priority: 0,
		basePower: 80,
		category: "Physical",
		type: "Flame",
		target: "normal",
		desc: "30% chance to burn the target, thaws.",
		shortDesc: "30% chance to brn the target, thaws.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "vcreate", target);
		},
		flags: {protect: 1, mirror: 1, defrost: 1},
		pp: 10,
		accuracy: 95,
		secondary: {
			chance: 30,
			status: 'brn',
		},
	},
	"prominencebeam": {
		name: "Prominence Beam",
		num: -263,
		signature: false,
		id: "prominencebeam",
		priority: 0,
		basePower: 90,
		category: "Special",
		type: "Flame",
		target: "normal",
		desc: "10% chance to burn the target.",
		shortDesc: "10% chance to brn the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "solarbeam", target);
		},
		flags: {protect: 1, mirror: 1},
		pp: 15,
		accuracy: 95,
		secondary: {
			chance: 10,
			status: 'brn',
		},
	},
	"hailspear": {
		name: "Hail Spear",
		num: -264,
		signature: false,
		id: "hailspear",
		basePower: 45,
		priority: 1,
		category: "Physical",
		type: "Aqua",
		target: "normal",
		desc: "Usually Goes first it has Priority +1.",
		shortDesc: "Usually Goes first it has Priority +1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "iceshard", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 30,
		secondary: null,
	},
	"waterblitz": {
		name: "Water Blitz",
		num: -265,
		signature: false,
		id: "waterblitz",
		basePower: 50,
		priority: 0,
		category: "Special",
		type: "Aqua",
		target: "allAdjacentFoes",
		desc: "Attack foe(s) and raises the users Speed by 2.",
		shortDesc: "Attack foe(s) and raises the users Spe by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "dive", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 30,
		secondary: null,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			this.boost({spe: 2}, pokemon, pokemon, move);
		},
	},
	"winterblast": {
		name: "Winter Blast",
		num: -266,
		signature: false,
		id: "winterblast",
		basePower: 65,
		priority: 0,
		category: "Physical",
		type: "Aqua",
		target: "allAdjacentFoes",
		desc: "10% chance to freeze the foe(s).",
		shortDesc: "10% chance to frz the foe(s).",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "hail", target);
			this.add('-anim', source, "avalanche", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 10,
		secondary: {
			chance: 10,
			volatileStatus: 'frz',
		},
	},
	"gigafreeze": {
		name: "Giga Freeze",
		num: -267,
		signature: false,
		id: "gigafreeze",
		basePower: 70,
		priority: 0,
		category: "Special",
		type: "Aqua",
		pp: 10,
		target: "normal",
		desc: "10% chance to freeze the target.",
		shortDesc: "10% chance to frz the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "freezedry", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		secondary: {
			chance: 20,
			volatileStatus: 'frz',
		},
	},
	"oceanwave": {
		name: "Ocean Wave",
		num: -268,
		signature: false,
		id: "oceanwave",
		priority: 0,
		basePower: 80,
		category: "Special",
		type: "Aqua",
		target: "allAdjacentFoes",
		desc: "30% chance to lower the foe(s) accuracy by 1.",
		shortDesc: "30% chance to lower the foe(s) acc by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "surf", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 10,
		secondary: {
			chance: 30,
			boosts: {accuracy: -1},
		},
	},
	"icestatue": {
		name: "Ice Statue",
		num: -269,
		signature: false,
		id: "icestatue",
		priority: 0,
		basePower: 80,
		category: "Physical",
		type: "Aqua",
		target: "normal",
		desc: "30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "sheercold", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		pp: 15,
		secondary: {
			chance: 25,
			volatileStatus: 'flinch',
		},
	},
	"aurorafreeze": {
		name: "Aurora Freeze",
		num: -270,
		signature: false,
		id: "aurorafreeze",
		priority: 0,
		basePower: 90,
		category: "Special",
		type: "Aqua",
		target: "allAdjacentFoes",
		desc: "Has a 30% chance to paralyze the foe(s).",
		shortDesc: "Has a 30% chance to par the foe(s).",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "iceburn", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		pp: 15,
		secondary: {
			chance: 30,
			volatileStatus: 'par',
		},
	},
	"wingshoes": {
		name: "Wing Shoes",
		num: -271,
		signature: false,
		id: "wingshoes",
		priority: 0,
		basePower: 0,
		category: "Status",
		type: "Air",
		target: "allySide",
		desc: "Raises user's and allies speed by 1.",
		shortDesc: "Raises user's and allies spe by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "magnetrise", target);
		},
		secondary: null,
		flags: {},
		pp: 30,
		accuracy: true,
		onHitSide(side) {
			for (let pokemon of side.active) {
				if (pokemon) this.boost({spe: 1}, pokemon);
			}
		},
	},
	"staticelectricity": {
		name: "Static Electricity",
		num: -272,
		signature: false,
		id: "staticelectricity",
		priority: 1,
		basePower: 40,
		category: "Physical",
		type: "Air",
		target: "normal",
		desc: "Priority +1, has a high critical hit ratio.",
		shortDesc: "Priority +1, high crit.",
		pp: 10,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "spark", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		critRatio: 2,
		secondary: null,
	},
	"windcutter": {
		name: "Wind Cutter",
		num: -273,
		signature: false,
		id: "windcutter",
		priority: 0,
		basePower: 50,
		category: "Special",
		type: "Air",
		target: "any",
		desc: "30% chance to paralyze any target.",
		shortDesc: "30% chance to par any target.",
		pp: 15,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "airslash", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		secondary: {
			chance: 30,
			volatileStatus: 'par',
		},
	},
	"confusedstorm": {
		name: "Confused Storm",
		num: -274,
		signature: false,
		id: "confusedstorm",
		priority: 0,
		basePower: 65,
		category: "Special",
		type: "Air",
		target: "allAdjacent",
		desc: "30% chance to confuse the foe(s).",
		shortDesc: "30% chance to confuse the foe(s).",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "featherdance", target);
			this.add('-anim', source, "megapunch", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 15,
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
	},
	"electriccloud": {
		name: "Electric Cloud",
		num: -275,
		signature: false,
		id: "electriccloud",
		priority: 0,
		basePower: 80,
		category: "Special",
		type: "Air",
		target: "normal",
		desc: "20% chance to paralyze the target.",
		shortDesc: "20% chance to par the target.",
		pp: 15,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "discharge", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		accuracy: 100,
		secondary: {
			chance: 20,
			volatileStatus: 'par',
		},
	},
	"megalospark": {
		name: "Megalo Spark",
		num: -276,
		signature: false,
		id: "megalospark",
		basePower: 85,
		priority: 0,
		category: "Physical",
		type: "Air",
		target: "normal",
		desc: "10% chance to paralyze the target.",
		shortDesc: "10% chance to par the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "boltstrike", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		pp: 10,
		secondary: {
			chance: 10,
			volatileStatus: 'par',
		},
	},
	"thunderjustice": {
		name: "Thunder Justice",
		num: -277,
		signature: false,
		id: "thunderjustice",
		priority: 0,
		basePower: 110,
		pp: 10,
		category: "Special",
		type: "Air",
		target: "normal",
		desc: "10% chance to paralyze.",
		shortDesc: "10% chance to par.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "stokedsparksurfer", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 70,
		secondary: {
			chance: 10,
			volatileStatus: 'par',
		},
	},
	"earthcoat": {
		name: "Earth Coat",
		num: -278,
		signature: false,
		id: "earthcoat",
		basePower: 0,
		priority: 0,
		category: "Status",
		type: "Nature",
		target: "allySide",
		desc: "Cures ally side status and raises Sp.Def by 1.",
		shortDesc: "Cures ally side status and raises Sp.Def by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "mudsport", target);
		},
		flags: {snatch: 1},
		accuracy: true,
		pp: 10,
		secondary: null,
		onHitSide(side) {
			for (let pokemon of side.active) {
				if (pokemon) {
					this.boost({spd: 1}, pokemon);
					pokemon.cureStatus();
				}
			}
		},
	},
	"massmorph": {
		name: "Mass Morph",
		num: -279,
		signature: false,
		id: "massmorph",
		basePower: 0,
		pp: 10,
		priority: 0,
		category: "Status",
		type: "Nature",
		target: "self",
		desc: "Raises the user’s Defense by 2 and Attack by 1.",
		shortDesc: "Raises the user’s Def by 2 and Atk by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "coil", target);
		},
		secondary: null,
		flags: {snatch: 1},
		accuracy: true,
		boosts: {
			def: 2,
			atk: 1,
		},
	},
	"charmperfume": {
		name: "Charm Perfume",
		num: -280,
		signature: false,
		id: "charmperfume",
		flags: {protect: 1, mirror: 1},
		basePower: 45,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'psn' || target.status === 'tox') {
				return move.basePower * 2;
			}
			return move.basePower;
		},
		priority: 0,
		pp: 35,
		category: "Special",
		type: "Nature",
		target: "allAdjacentFoes",
		desc: "30% chance of poison, and 2x base power if foe(s) are poisoned.",
		shortDesc: "30% chance of psn, and 2x BP if foe(s) are psn.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "grasswhistle", target);
		},
		accuracy: 100,
		secondary: {
			chance: 30,
			status: 'psn',
		},
	},
	"rootbind": {
		name: "Root Bind",
		num: -281,
		signature: false,
		id: "rootbind",
		basePower: 65,
		pp: 20,
		priority: 0,
		category: "Physical",
		type: "Nature",
		target: "normal",
		desc: "25% chance to lower target’s Speed. Traps target.",
		shortDesc: "25% chance to lower target’s Spe. Traps target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "grassknot", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 95,
		secondaries: [
			{
				chance: 100,
				onHit(target, source, move) {
					if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
				},
			},
			{
				chance: 25,
				boosts: {spe: -1},
			},
		],
	},
	"bug": {
		name: "Bug",
		num: -282,
		signature: false,
		id: "bug",
		pp: 20,
		basePower: 70,
		priority: 0,
		category: "Physical",
		type: "Nature",
		target: "normal",
		desc: "Causes the target to be buggy.",
		shortDesc: "Causes the target to be buggy.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "leechseed", target);
			this.add('-anim', source, "forestscurse", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 85,
		volatileStatus: 'bug',
		secondary: null,
	},
	"rockfall": {
		name: "Rock Fall",
		num: -283,
		signature: false,
		id: "rockfall",
		basePower: 95,
		priority: 0,
		pp: 15,
		category: "Physical",
		type: "Nature",
		target: "normal",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "rockslide", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		secondary: null,
	},
	"venomdisaster": {
		name: "Venom Disaster",
		num: -284,
		signature: false,
		id: "venomdisaster",
		basePower: 95,
		priority: 0,
		pp: 10,
		category: "Special",
		type: "Nature",
		target: "allAdjacent",
		desc: "20% chance to poison adjacent monsters.",
		shortDesc: "20% chance to psn adjacent monsters.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "aciddownpour", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 95,
		secondary: {
			chance: 20,
			status: 'psn',
		},
	},
	"darkspirit": {
		name: "Dark Spirit",
		num: -285,
		signature: false,
		id: "darkspirit",
		basePower: 55,
		pp: 30,
		priority: 0,
		category: "Special",
		type: "Evil",
		target: "normal",
		desc: "25% chance to paralyze the target.",
		shortDesc: "25% chance to par the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "spiritshackle", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		secondary: {
			chance: 25,
			status: 'par',
		},
	},
	"blackout": {
		name: "Blackout",
		num: -286,
		signature: false,
		id: "blackout",
		basePower: 60,
		priority: 0,
		category: "Physical",
		type: "Evil",
		target: "allAdjacent",
		desc: "15% chance to confuse all adjacent monsters.",
		shortDesc: "15% chance to confuse all adjacent monsters.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "brutalswing", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		accuracy: 100,
		pp: 15,
		secondary: {
			chance: 15,
			volatileStatus: 'confusion',
		},
	},
	"evilfantasy": {
		name: "Evil Fantasy",
		num: -287,
		signature: false,
		id: "evilfantasy",
		basePower: 70,
		priority: 1,
		category: "Special",
		type: "Evil",
		target: "normal",
		desc: "Usually goes first. Fails if target is not attacking.",
		shortDesc: "Usually goes first. Fails if target is not attacking.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "embargo", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		onTry(source, target) {
			let action = this.queue.willMove(target);
			if (!action || action.choice !== 'move' || (action.move.category === 'Status' && action.move.id !== 'mefirst') || target.volatiles.mustrecharge) {
				this.add('-fail', source);
				this.attrLastMove('[still]');
				return null;
			}
		},
		pp: 5,
		accuracy: 100,
		secondary: null,
	},
	"chaoscloud": {
		name: "Chaos Cloud",
		num: -288,
		signature: false,
		id: "chaoscloud",
		basePower: 80,
		pp: 15,
		priority: 0,
		category: "Special",
		type: "Evil",
		target: "normal",
		desc: "20% chance to lower that target's special defense by 1.",
		shortDesc: "20% chance to lower that target's sp.def by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "trickortreat", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		accuracy: 100,
		secondary: {
			chance: 20,
			boosts: {spd: -1},
		},
	},
	"shadowfall": {
		name: "Shadow Fall",
		num: -289,
		signature: false,
		id: "shadowfall",
		basePower: 70,
		priority: 0,
		pp: 5,
		category: "Physical",
		type: "Evil",
		target: "normal",
		desc: "High critical hit ratio.",
		shortDesc: "High critical hit ratio.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "powertrip", target);
		},
		flags: {mirror: 1},
		accuracy: 100,
		critRatio: 2,
		secondary: null,
	},
	"hideandseek": {
		name: "Hide and Seek",
		num: -290,
		signature: false,
		id: "hideandseek",
		basePower: 90,
		accuracy: 100,
		priority: 0,
		pp: 10,
		category: "Special",
		desc: "Disappears turn 1. Hits turn 2.",
		shortDesc: "Disappears turn 1. Hits turn 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "phantomforce", target);
		},
		flags: {contact: 1, charge: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		effect: {
			duration: 2,
			onInvulnerability: false,
		},
		secondary: null,
		target: "normal",
		type: "Evil",
	},
	"evilsquall": {
		name: "Evil Squall",
		num: -291,
		signature: false,
		id: "evilsquall",
		basePower: 85,
		pp: 5,
		priority: 0,
		category: "Special",
		type: "Evil",
		target: "any",
		desc: "Has a 20% chance to confuse any target.",
		shortDesc: "20% chance to confuse any target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "blackholeeclipse", target);
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		accuracy: 100,
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
	},
	"saintheal": {
		name: "Saint Heal",
		num: -292,
		signature: false,
		id: "saintheal",
		pp: 10,
		basePower: 0,
		priority: 0,
		category: "Status",
		type: "Holy",
		target: "any",
		desc: "Heals any target by 40% of its max HP.",
		shortDesc: "Heals any target by 40% of its max HP.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "geomancy", target);
		},
		flags: {protect: 1, pulse: 1, reflectable: 1, distance: 1, heal: 1, mystery: 1},
		accuracy: true,
		secondary: null,
		onHit(target, source) {
			if (!this.heal(Math.ceil(target.maxhp * 0.4))) {
				return false;
			}
		},
	},
	"holybreath": {
		name: "Holy Breath",
		num: -293,
		signature: false,
		id: "holybreath",
		basePower: 0,
		pp: 20,
		priority: 0,
		category: "Status",
		type: "Holy",
		target: "self",
		secondary: null,
		desc: "Raises the user’s Special Defense and Speed by 1.",
		shortDesc: "Raises the user’s Sp.Def and Spe by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "morningsun", target);
		},
		flags: {snatch: 1},
		accuracy: true,
		boosts: {
			spe: 1,
			spd: 1,
		},
	},
	"holyterrain": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "5 turns. No Volatile, +1/16 hp. Holy moves don't miss.",
		shortDesc: "5 turns. No Volatile, +1/16 hp. Holy moves don't miss.",
		id: "holyterrain",
		name: "Holy Terrain",
		num: -294,
		signature: false,
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'holyterrain',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (effect && effect.status) {
					this.add('-activate', target, 'move: Holy Terrain');
				}
				return false;
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'confusion') {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Holy Terrain');
					return null;
				}
			},
			onAccuracy(accuracy, target, source, move) {
				if (move.type === 'Holy' && source.isGrounded()) return true;

				return accuracy;
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Holy Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Holy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual() {
				this.eachEvent('Terrain');
			},
			onTerrain(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.debug('Pokemon is grounded, healing through Holy Terrain.');
					this.heal(pokemon.maxhp / 16, pokemon, pokemon);
				}
			},
			onEnd() {
				this.eachEvent('Terrain');
				this.add('-fieldend', 'move: Holy Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Holy",
		zMoveBoost: {def: 1},
		contestType: "Beautiful",
	},

	"holyflash": {
		name: "Holy Flash",
		num: -295,
		signature: false,
		id: "holyflash",
		basePower: 55,
		pp: 10,
		priority: 1,
		category: "Special",
		type: "Holy",
		target: "allAdjacentFoes",
		desc: "Priority +1. 15% chance to raise users Special Attack by 1.",
		shortDesc: "Priority +1, 15% chance to raise users Sp.Atk by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "fairylock", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1},
		accuracy: 90,
		secondary: null,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (this.random(100) < 70) this.boost({spa: 1}, pokemon, pokemon, move);
		},
	},
	"saintray": {
		name: "Saint Ray",
		num: -296,
		signature: false,
		id: "saintray",
		basePower: 90,
		priority: 0,
		pp: 10,
		category: "Special",
		type: "Holy",
		target: "normal",
		desc: "10% chance to lower the target's special defense by 1.",
		shortDesc: "10% chance to lower the target's sp.def by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "naturesmadness", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		secondary: {
			chance: 10,
			boosts: {spd: -1},
		},
	},
	"holyjudgment": {
		name: "Holy Judgment",
		num: -297,
		signature: false,
		id: "holyjudgment",
		basePower: 90,
		pp: 10,
		priority: 0,
		category: "Physical",
		type: "Holy",
		target: "normal",
		desc: "10% chance to lower the target's attack by 1.",
		shortDesc: "10% chance to lower the target's atk by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "supersonicskystrike", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		secondary: {
			chance: 10,
			boosts: {atk: -1},
		},
	},
	"shiningnova": {
		name: "Shining Nova",
		num: -298,
		signature: false,
		id: "shiningnova",
		basePower: 95,
		priority: 0,
		pp: 15,
		category: "Special",
		type: "Holy",
		target: "normal",
		desc: "30% chance to lower the target's special attack by 1.",
		shortDesc: "30% chance to lower the target's sp.atk by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "happyhour", source);
			this.add('-anim', source, "fleurcannon", target);
		},
		flags: {protect: 1, mirror: 1, authentic: 1, recharge: 1},
		accuracy: 100,
		secondary: {
			chance: 10,
			boosts: {spa: -1},
		},
	},
	"musclecharge": {
		name: "Muscle Charge",
		num: -299,
		signature: false,
		id: "musclecharge",
		basePower: 0,
		priority: 0,
		category: "Status",
		type: "Battle",
		target: "self",
		desc: "Raises the user’s attack and speed by 1.",
		shortDesc: "Raises the user’s atk and spe by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "growth", target);
		},
		flags: {snatch: 1},
		accuracy: true,
		pp: 20,
		secondary: null,
		boosts: {
			atk: 1,
			spe: 1,
		},
	},
	"warcry": {
		name: "War Cry",
		num: -300,
		signature: false,
		id: "warcry",
		basePower: 0,
		priority: 0,
		pp: 20,
		category: "Status",
		type: "Battle",
		target: "self",
		desc: "Lowers user’s defense, special defense by 2; raises attack, Special attack by 2.",
		shortDesc: "Lowers user’s def, sp.def by 2; raises atk, sp.atk by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nobleroar", target);
			this.add('-anim', source, "encore", target);
		},
		flags: {snatch: 1},
		secondary: null,
		accuracy: true,
		boosts: {
			atk: 2,
			spa: 2,
			def: -2,
			spd: -2,
		},
	},
	"sonicjab": {
		name: "Sonic Jab",
		num: -301,
		signature: false,
		id: "sonicjab",
		basePower: 65,
		priority: 1,
		pp: 30,
		category: "Physical",
		type: "Battle",
		target: "normal",
		desc: "Priority +1.",
		shortDesc: "priority +1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "machpunch", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 100,
		secondary: null,
	},
	"fightingaura": {
		name: "Fighting Aura",
		num: -302,
		signature: false,
		id: "fightingaura",
		basePower: 95,
		priority: 0,
		pp: 10,
		category: "Special",
		type: "Battle",
		target: "allAdjacentFoes",
		desc: "attacks foe(s), 10% chance to raise Special Attack by 1.",
		shortDesc: "attacks foe(s), 10% chance to raise sp.atk by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "focusblast", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		secondary: {
			chance: 10,
			self: {
				boosts: {spa: 1},
			},
		},
	},
	"tremar": {
		name: "Tremar",
		num: -303,
		signature: false,
		accuracy: 100,
		basePower: 0,
		damage: 50,
		category: "Physical",
		desc: "Deals 50 HP of damage to the target.",
		shortDesc: "Deals 50 HP of damage to the target.",
		id: "tremar",
		pp: 10,
		priority: 0,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "rockthrow", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Battle",
	},
	"busterdrive": {
		name: "Buster Drive",
		num: -304,
		signature: false,
		id: "busterdrive",
		basePower: 100,
		priority: 0,
		pp: 10,
		category: "Physical",
		type: "Battle",
		target: "normal",
		desc: "Charges turn 1, hits turn 2. 75% chance of flinch.",
		shortDesc: "Charges turn 1, hits turn 2. 75% chance of flinch.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "happyhour", source);
		},
		flags: {protect: 1, mirror: 1, charge: 1},
		accuracy: 95,
		onTry(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				this.attrLastMove('[still]');
				this.add('-anim', attacker, "takedown", defender);
				return;
			}
			this.add('-prepare', attacker, "Skull Bash", defender);
			this.add('-message', attacker.name + ' is charging up for an attack!');
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, "takedown", defender);
				attacker.removeVolatile(move.id);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 75,
			volatileStatus: 'flinch',
		},
	},
	"megatonpunch": {
		name: "Megaton Punch",
		num: -305,
		signature: false,
		id: "megatonpunch",
		basePower: 90,
		priority: 0,
		pp: 20,
		category: "Physical",
		type: "Battle",
		target: "normal",
		desc: "15% chance to flinch the target.",
		shortDesc: "15% chance to flinch the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "focuspunch", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 90,
		secondary: {
			chance: 15,
			volatileStatus: 'flinch',
		},
	},
	"mechanicalclaw": {
		name: "Mechanical Claw",
		num: -306,
		signature: false,
		id: "mechanicalclaw",
		basePower: 15,
		priority: 0,
		pp: 10,
		category: "Physical",
		type: "Mech",
		target: "normal",
		desc: "Hits 2-5 times in one turn.",
		shortDesc: "Hits 2-5 times in one turn.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gearup", source);
			this.add('-anim', source, "cut", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 95,
		multihit: [2, 5],
		secondary: null,
	},
	"upgrade": {
		name: "Upgrade",
		num: -307,
		signature: false,
		id: "upgrade",
		basePower: 0,
		priority: -1,
		pp: 20,
		category: "Status",
		type: "Mech",
		target: "self",
		desc: "Priority -1. Raises user’s attack, defense, special attack and speed by 1.",
		shortDesc: "Priority -1. Raises user’s atk, def, sp.atk and spe by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gearup", target);
			this.add('-anim', source, "conversion", target);
		},
		flags: {},
		accuracy: true,
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spe: 1,
		},
		secondary: null,
	},
	"reverseprogram": {
		name: "Reverse Program",
		num: -308,
		signature: false,
		id: "reverseprogram",
		basePower: 0,
		priority: 0,
		pp: 5,
		category: "Status",
		type: "Mech",
		target: "allAdjacentFoes",
		desc: "Causes adjacent monsters to be buggy.",
		shortDesc: "Causes adjacent monsters to be buggy.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gravity", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: true,
		volatileStatus: 'bug',
		secondary: null,
	},
	"antiattackfield": {
		name: "Anti-Attack Field",
		num: -309,
		signature: false,
		id: "antiattackfield",
		basePower: 70,
		priority: 0,
		pp: 10,
		category: "Special",
		type: "Mech",
		target: "allAdjacentFoes",
		desc: "Has a 30% chance to flinch the foe(s).",
		shortDesc: "Has a 30% chance to flinch the foe(s).",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "storedpower", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
	},
	"gigawattlaser": {
		name: "Gigawatt Laser",
		num: -310,
		signature: false,
		id: "gigawattlaser",
		basePower: 80,
		priority: 1,
		pp: 10,
		category: "Special",
		type: "Mech",
		target: "normal",
		desc: "10% chance to paralyze the target.",
		shortDesc: "10% chance to par the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "mirrorshot", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		secondary: {
			chance: 10,
			status: 'par',
		},
	},
	"deleteprogram": {
		name: "Delete Program",
		num: -311,
		signature: false,
		id: "deleteprogram",
		basePower: 90,
		priority: 0,
		pp: 10,
		category: "Physical",
		type: "Mech",
		target: "normal",
		desc: "30% chance to bug the target.",
		shortDesc: "30% chance to bug the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "endeavor", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		secondary: {
			chance: 30,
			volatileStatus: 'bug',
		},
	},
	"dgdimension": {
		name: "DG Dimension",
		num: -312,
		signature: false,
		id: "dgdimension",
		basePower: 90,
		priority: 0,
		pp: 15,
		category: "Special",
		type: "Mech",
		target: "allAdjacentFoes",
		desc: "30% chance to lower the foe(s) accuracy by 1 stage.",
		shortDesc: "30% chance to lower the foe(s) acc by 1.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "searingsunrazesmash", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		secondary: {
			chance: 30,
			boosts: {accuracy: -1},
		},
	},
	"cootieskick": {
		name: "Cooties Kick",
		num: -313,
		signature: false,
		id: "cootieskick",
		basePower: 10,
		priority: 0,
		pp: 15,
		category: "Physical",
		type: "Filth",
		target: "normal",
		desc: "20% chance to poison the target. Hits 2-5 times.",
		shortDesc: "20% chance to psn the target. Hits 2-5 times.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "firstimpression", target);
		},
		flags: {protect: 1, mirror: 1, contact: 1},
		accuracy: 100,
		multihit: [2, 5],
		secondary: {
			chance: 20,
			status: 'psn',
		},
	},
	"superstinkyjet": {
		name: "Super Stinky Jet",
		num: -314,
		signature: false,
		id: "superstinkyjet",
		basePower: 30,
		priority: 0,
		pp: 15,
		category: "Special",
		type: "Filth",
		target: "normal",
		desc: "40% chance to poison the target.",
		shortDesc: "40% chance to psn the target.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "acidarmor", source);
			this.add('-anim', source, "smog", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		secondary: {
			chance: 40,
			status: 'psn',
		},
	},
	"guerrillapoop": {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		desc: "Hits twice",
		shortDesc: "Hits twice",
		id: "guerrillapoop",
		name: "Guerrilla Poop",
		num: -315,
		signature: false,
		priority: 0,
		pp: 10,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nastyplot", source);
			this.add('-anim', source, "toxic", target);
		},
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Filth",
	},
	"poopattackfield": {
		name: "Poop Attack Field",
		num: -316,
		signature: false,
		id: "poopattackfield",
		basePower: 80,
		priority: 0,
		pp: 10,
		category: "Special",
		type: "Filth",
		target: "allAdjacent",
		desc: "10% chance of poisoning adjacent monsters.",
		shortDesc: "10% chance of psn adjacent monsters.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "gunkshot", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		secondary: {
			chance: 10,
			status: 'psn',
		},
	},
	"poopfling": {
		name: "Poop Fling",
		num: -317,
		signature: false,
		id: "poopfling",
		basePower: 18,
		priority: 0,
		pp: 10,
		category: "Physical",
		type: "Filth",
		target: "normal",
		desc: "5% chance to confuse the target. Hits 3-5 times.",
		shortDesc: "5% chance to confuse the target. Hits 3-5 times.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nastyplot", source);
			this.add('-anim', source, "sludgebomb", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		multihit: [3, 5],
		secondary: null,
		onAfterMoveSecondary(target, source, move) {
			if (this.random(100) < 5) target.addVolatile('confusion', source);
		},
	},
	"pooptoss": {
		name: "Poop Toss",
		num: -318,
		signature: false,
		id: "pooptoss",
		basePower: 75,
		priority: 0,
		pp: 5,
		category: "Physical",
		type: "Filth",
		target: "normal",
		desc: "30% chance to lower the target’s Speed by 2.",
		shortDesc: "30% chance to lower the target’s spe by 2.",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "banefulbunker", source);
			this.add('-anim', source, "sludgebomb", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 100,
		secondary: {
			chance: 30,
			boosts: {spe: -2},
		},
	},
	"extremepoopdeath": {
		name: "Extreme Poop Death",
		num: -319,
		signature: false,
		id: "extremepoopdeath",
		basePower: 85,
		priority: 0,
		pp: 5,
		category: "Special",
		type: "Filth",
		target: "allAdjacentFoes",
		desc: "25% chance of poison foe(s).",
		shortDesc: "25% chance of psn foe(s).",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "nastyplot", source);
			this.add('-anim', source, "aciddownpour", target);
		},
		flags: {protect: 1, mirror: 1},
		accuracy: 90,
		secondary: {
			chance: 25,
			status: 'psn',
		},
	},

	// Status Moves
	"panicattack": {
		accuracy: true,
		basePower: 40,
		category: "Physical",
		desc: "No additional effects.",
		shortDesc: "No additional effects.",
		secondary: null,
		onModifyMove(move) {
			move.type = '???';
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-message', source.name + ' is in a panic!');
			this.add('-anim', source, "Tackle", target);
		},
		id: "panicattack",
		name: "Panic Attack",
		pp: 35,
		priority: 0,
		flags: {protect: 1},
		target: "randomNormal",
		type: "Battle",
	},
	"dotbeam": {
		accuracy: true,
		basePower: 40,
		category: "Physical",
		desc: "No additional effects.",
		shortDesc: "No additional effects.",
		secondary: null,
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "signalbeam", target);
		},
		onModifyMove(move) {
			move.type = '???';
		},
		id: "dotbeam",
		name: "Dot Beam",
		pp: 35,
		priority: 0,
		flags: {protect: 1},
		target: "normal",
		type: "Mech",
	},
	//Pokemon x Digimon move altercations
	"watersport": {
		inherit: true,
		desc: "For 5 turns, all Fire-type and Flame-type attacks used by any active Pokemon have their power reduced to 0.33x. Fails if this move is already in effect.",
		shortDesc: "For 5 turns, Fire-type and Flame-type attacks have 1/3 power.",
		effect: {
			duration: 5,
			onStart(side, source) {
				this.add('-fieldstart', 'move: Water Sport', '[of] ' + source);
			},
			onBasePowerPriority: 1,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Fire' || move.type === 'Flame') {
					this.debug('water sport weaken');
					return this.chainModify([0x548, 0x1000]);
				}
			},
			onResidualOrder: 21,
			onEnd() {
				this.add('-fieldend', 'move: Water Sport');
			},
		},
	},
	"mudsport": {
		inherit: true,
		desc: "For 5 turns, all Electric-type and Air-type attacks used by any active Pokemon have their power reduced to 0.33x. Fails if this move is already in effect.",
		shortDesc: "For 5 turns, Electric-type znd Air-type attacks have 1/3 power.",
		effect: {
			duration: 5,
			onStart(side, source) {
				this.add('-fieldstart', 'move: Mud Sport', '[of] ' + source);
			},
			onBasePowerPriority: 1,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric' || move.type === 'Air') {
					this.debug('mud sport weaken');
					return this.chainModify([0x548, 0x1000]);
				}
			},
			onResidualOrder: 21,
			onEnd() {
				this.add('-fieldend', 'move: Mud Sport');
			},
		},
	},
	"electricterrain": {
		inherit: true,
		desc: "For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type and Air-type attacks made by grounded Pokemon is multiplied by 1.5 and grounded Pokemon cannot fall asleep; Pokemon already asleep do not wake up. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain.",
		shortDesc: "5 turns. Grounded: +Electric power, +Air power, can't sleep.",
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
					if (effect.effectType === 'Move' && !effect.secondaries) {
						this.add('-activate', target, 'move: Electric Terrain');
					}
					return false;
				}
			},
			onTryAddVolatile(status, target) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'yawn') {
					this.add('-activate', target, 'move: Electric Terrain');
					return null;
				}
			},
			onBasePower(basePower, attacker, defender, move) {
				if ((move.type === 'Electric' || move.type === 'Air') && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('electric terrain boost');
					return this.chainModify(1.5);
				}
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Electric Terrain');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd() {
				this.add('-fieldend', 'move: Electric Terrain');
			},
		},
	},
	"rototiller": {
		inherit: true,
		desc: "Raises the Attack and Special Attack of all grounded Grass-type and Nature-type Pokemon on the field by 1 stage.",
		shortDesc: "Raises Atk, Sp. Atk of grounded Grass and Nature types by 1.",
		onHitField(target, source) {
			let targets = [];
			let anyAirborne = false;
			for (const side of this.sides) {
				for (const pokemon of side.active) {
					if (!pokemon || !pokemon.isActive) continue;
					if (!pokemon.runImmunity('Ground')) {
						this.add('-immune', pokemon);
						anyAirborne = true;
						continue;
					}
					if (pokemon.hasType('Grass') || pokemon.hasType('Nature')) {
						// This move affects every grounded Grass-type Pokemon in play.
						targets.push(pokemon);
					}
				}
			}
			if (!targets.length && !anyAirborne) return false; // Fails when there are no grounded Grass types or airborne Pokemon
			for (const pokemon of targets) {
				this.boost({atk: 1, spa: 1}, pokemon, source);
			}
		},
	},
	"grassyterrain": {
		inherit: true,
		desc: "For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type and Nature-type attacks used by grounded Pokemon is multiplied by 1.5, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokemon is multiplied by 0.5, and grounded Pokemon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.",
		shortDesc: "5 turns. Grounded: +Grass power,+Nature Power,+1/16 max HP.",
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePower(basePower, attacker, defender, move) {
				let weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
				if (weakenedMoves.includes(move.id)) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if ((move.type === 'Grass' || move.type === 'Nature') && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify(1.5);
				}
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 3,
			onResidual() {
				this.eachEvent('Terrain');
			},
			onTerrain(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.debug('Pokemon is grounded, healing through Grassy Terrain.');
					this.heal(pokemon.maxhp / 16, pokemon, pokemon);
				}
			},
			onEnd() {
				if (!this.effectData.duration) this.eachEvent('Terrain');
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
	},
	"flowershield": {
		inherit: true,
		desc: "Raises the Defense of all Grass-type and Nature-type Pokemon on the field by 1 stage.",
		shortDesc: "Raises Defense by 1 of all active Grass and Nature types.",
		onHitField(target, source, move) {
			let targets = [];
			for (const side of this.sides) {
				for (const pokemon of side.active) {
					if (pokemon && pokemon.isActive && (pokemon.hasType('Grass') || pokemon.hasType('Nature'))) {
						// This move affects every Grass-type Pokemon in play.
						targets.push(pokemon);
					}
				}
			}
			let success = false;
			for (const target of targets) {
				success = this.boost({def: 1}, target, source, move) || success;
			}
			return success;
		},
	},

	// Move description changes
	"raindance": {
		inherit: true,
		desc: "For 5 turns, the weather becomes Rain Dance. The damage of Water- and Aqua-type attacks is multiplied by 1.5 and the damage of Fire- and Flame-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is Rain Dance.",
		shortDesc: "For 5 turns, rain powers Water/Aqua moves.",
	},
	"sunnyday": {
		inherit: true,
		desc: "For 5 turns, the weather becomes Sunny Day. The damage of Fire- and Flame-type attacks is multiplied by 1.5 and the damage of Water- and Aqua-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Heat Rock. Fails if the current weather is Sunny Day.",
		shortDesc: "For 5 turns, sunlight powers Fire/Flame moves.",
	},
};

exports.BattleMovedex = BattleMovedex;
