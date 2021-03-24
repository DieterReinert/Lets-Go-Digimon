import DIGIMON_SETS from './digimon-sets';
import RandomTeams from '../../random-teams';
import LetsGo from '../letsgo/random-teams';
import {toID} from '../../../sim/dex';

// Digimon X Pokemon
const DIGI_X_POKE = "[Digimon] Digimon x Pokemon";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RandomLetsGo = new LetsGo(DIGI_X_POKE, null);

const DIGIMON_TYPES = Object.keys(Dex.data.TypeChart);

export class RandomDigimonTeams extends RandomTeams {
	prepareSet(set: DigimonSets) {
		const randomMoves: string[] = [];

		const template = this.dex.getSpecies(set.species);
		const mbstmin = 1381;

		while (randomMoves.length < 4) {
			const moveid = this.sample(set.moves);
			const move = this.dex.getMove(moveid);
			if (randomMoves.length < 1 && !template.types.includes(move.type)) continue;
			if (randomMoves.length < 2 && move.category === 'Status') continue;
			if (randomMoves.includes(move.name)) continue;
			randomMoves.push(move.name);
		}

		// CPed over

		// - Inherit how pokemon does it with Kuramon instead of sunkern


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
			item: set.item ? set.item : "",
			gender: "N",
			// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
			moves: [<string>set.reservedMove].concat(randomMoves),
			// natures[~~(Math.random() * natures.length)];
			nature: natures[~~(Math.random() * natures.length)],
			evs: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85},
			ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
			level: level,
		};
	}

	randomDigimonXPokemonTeam(pool: DigimonSets[]) {
		const team = [];
		const pokemonPool = DIGIMON_SETS.filter(
			(i: DigimonSets) => i.moves.length > 1 && toID(this.dex.getSpecies(i.species).universe) === 'pokemon'
		);

		let hasXEvo = false;

		while (team.length < 6) {
			const toPush = team.length < 3 ? pokemonPool : pool;
			let randomToPush = this.sampleNoReplace(toPush);

			if (hasXEvo === true && randomToPush.item === "X-Antibody") continue;
			if (randomToPush.item === "X-Antibody") hasXEvo = true;

			if (randomToPush.universe === 'Pokemon') {
				randomToPush.ability = this.dex.getAbility('noability');
			} else {
				randomToPush.ability = this.dex.getSpecies(toID(randomToPush.species)).abilities[0];
			}
			randomToPush = this.prepareSet(randomToPush);

			team.push(randomToPush);
		}

		return team;
	}

	randomDigimonMonotypeTeam(pool: DigimonSets[]) {
		const team = [];

		const invalidTypes = ["Dragon", "Ground", "Ghost", "Psychic", "Rock"];
		let selectedType =
			DIGIMON_TYPES[~~(Math.random() * DIGIMON_TYPES.length)];
		while (invalidTypes.includes(selectedType)) {
			selectedType = DIGIMON_TYPES[~~(Math.random() * DIGIMON_TYPES.length)];
		}
		pool = pool.filter(i => {
			const template = this.dex.getSpecies(i.species);
			const types = template.types;

			return types.includes(selectedType);
		});

		let hasXEvo = false;

		while (team.length !== 6) {
			const randomDigimon = this.sampleNoReplace(pool);
			if (hasXEvo === true && randomDigimon.item === "X-Antibody") continue;
			if (randomDigimon.item === "X-Antibody") hasXEvo = true;
			randomDigimon.ability = this.dex.getSpecies(toID(randomDigimon.species)).abilities[0];
			team.push(this.prepareSet(randomDigimon));
		}

		return team;
	}

	randomDigimonTeam() {
		const team = [];
		const pool = DIGIMON_SETS.filter(
			// eslint-disable-next-line max-len
			(i: DigimonSets) => (i.moves.length > 1 || i.reservedMove !== undefined) && toID(this.dex.getSpecies(i.species).universe) === 'digimon'
		);

		const FORMAT = this.format.id;

		// toID(DIGI_X_POKE)
		const DigiXPoke = FORMAT.includes(toID(DIGI_X_POKE));
		const Monotype = FORMAT.includes("monotype");

		if (DigiXPoke) return this.randomDigimonXPokemonTeam(pool);
		if (Monotype) return this.randomDigimonMonotypeTeam(pool);

		let hasXEvo = false;

		while (team.length !== 6) {
			const set = this.sampleNoReplace(pool);
			if (hasXEvo === true && set.item === "X-Antibody") continue;
			if (set.item === "X-Antibody") hasXEvo = true;
			set.ability = this.dex.getSpecies(toID(set.species)).abilities[0];
			team.push(this.prepareSet(set));
		}

		return team;
	}
}

interface DigimonSets {
	species: string;
	universe: string;
	ability: string;
	moves: string[];
	reservedMove?: string;
}

export default RandomDigimonTeams;
