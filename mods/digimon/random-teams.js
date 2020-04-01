// @ts-nocheck
"use strict";

const DIGIMON_SETS = require("./digimon-sets");

const RandomTeams = require('../../../data/random-teams');

// Digimon X Pokemon
const DIGI_X_POKE = "[Digimon] Digimon x Pokemon";
const LetsGo = require("../letsgo/random-teams");
const RandomLetsGo = new LetsGo(DIGI_X_POKE);

// hard-coded, could import both
// the typechart files and filter
// them out, might strain
const DIGIMON_TYPES = [
	"Air",
	"Aqua",
	"Battle",
	"Evil",
	"Filth",
	"Flame",
	"Holy",
	"Mech",
	"Nature",
];

class RandomDigimonTeams extends RandomTeams {
	prepareSet(set) {
		let randomMoves = [];
		let move = null;

		while (randomMoves.length < 3) {
			move = this.sample(set.moves);

			if (randomMoves.includes(move)) continue;
			randomMoves.push(move);
		}

		// CPed over

		//- Inherit how pokemon does it with Kuramon instead of sunkern
		const mbstmin = 1381;

		const template = this.dex.getSpecies(set.species);
		const stats = template.baseStats;

		// Modified base stat total assumes 31 IVs, 85 EVs in every stat
		let mbst = stats["hp"] * 2 + 31 + 21 + 100 + 10;
		mbst += stats["atk"] * 2 + 31 + 21 + 100 + 5;
		mbst += stats["def"] * 2 + 31 + 21 + 100 + 5;
		mbst += stats["spa"] * 2 + 31 + 21 + 100 + 5;
		mbst += stats["spd"] * 2 + 31 + 21 + 100 + 5;
		mbst += stats["spe"] * 2 + 31 + 21 + 100 + 5;

		let level = Math.floor((100 * mbstmin) / mbst); // Initial level guess will underestimate

		while (level < 100) {
			mbst = Math.floor(
				((stats["hp"] * 2 + 31 + 21 + 100) * level) / 100 + 10
			);
			mbst += Math.floor(
				((((stats["atk"] * 2 + 31 + 21 + 100) * level) / 100 + 5) * level) /
				100
			); // Since damage is roughly proportional to level
			mbst += Math.floor(
				((stats["def"] * 2 + 31 + 21 + 100) * level) / 100 + 5
			);
			mbst += Math.floor(
				((((stats["spa"] * 2 + 31 + 21 + 100) * level) / 100 + 5) * level) /
				100
			);
			mbst += Math.floor(
				((stats["spd"] * 2 + 31 + 21 + 100) * level) / 100 + 5
			);
			mbst += Math.floor(
				((stats["spe"] * 2 + 31 + 21 + 100) * level) / 100 + 5
			);

			if (mbst >= mbstmin) break;
			level++;
		}

		const natures = ["Bashful", "Docile", "Hardy", "Quirky", "Serious"];

		return {
			// set.ability[~~(Math.random() * set.ability.length)];
			species: set.species,
			ability: Array.isArray(set.ability) ?
				set.ability[~~(Math.random() * set.ability.length)] :
				set.ability,
			item: "",
			gender: "N",
			moves: [set.reservedMove].concat(randomMoves),
			// natures[~~(Math.random() * natures.length)];
			nature: natures[~~(Math.random() * natures.length)],
			evs: { hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85 },
			ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
			level: level,
		};
	}

	randomDigimonXPokemonTeam(pool) {
		const team = [];
		const randomPokemonTeam = RandomLetsGo.randomTeam();

		while (team.length !== 6) {
			let toPush = team.length < 3 ? randomPokemonTeam : pool;
			let randomToPush = this.sampleNoReplace(toPush);
			if (team.length > 3) randomToPush = this.prepareSet(randomToPush);

			team.push(randomToPush);
		}

		return team;
	}

	randomDigimonMonotypeTeam(pool) {
		const team = [];

		// DIGIMON_TYPES[~~(Math.random() * DIGIMON_TYPES.length)];
		const selectedType =
			DIGIMON_TYPES[~~(Math.random() * DIGIMON_TYPES.length)];

		pool = pool.filter(i => {
			const template = this.dex.getSpecies(i.species);
			const types = template.types;

			return types.includes(selectedType);
		});

		while (team.length !== 6) {
			let randomDigimon = this.sampleNoReplace(pool);
			team.push(this.prepareSet(randomDigimon));
		}

		return team;
	}

	randomDigimonTeam() {
		const team = [];
		const pool = DIGIMON_SETS.filter(
			i => i.moves.length > 1 || i.reservedMove !== undefined
		);

		const FORMAT = this.format.id;

		// toID(DIGI_X_POKE)
		const DigiXPoke = FORMAT.includes(toID(DIGI_X_POKE));
		const Monotype = FORMAT.includes("monotype");

		if (DigiXPoke) return this.randomDigimonXPokemonTeam(pool);
		if (Monotype) return this.randomDigimonMonotypeTeam(pool);

		while (team.length !== 6) {
			const set = this.sampleNoReplace(pool);

			team.push(this.prepareSet(set));
		}

		return team;
	}
}

module.exports = RandomDigimonTeams;
