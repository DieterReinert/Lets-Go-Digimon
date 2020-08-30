"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } const Scripts = {
	canMegaEvo(pokemon) {
		const species = pokemon.baseSpecies;
		const altForme = species.otherFormes && this.dex.getSpecies(species.otherFormes[0]);
		const item = pokemon.getItem();
		// Mega Rayquaza
		if (_optionalChain([altForme, 'optionalAccess', _ => _.isMega]) && _optionalChain([altForme, 'optionalAccess', _2 => _2.requiredMove]) &&
			pokemon.baseMoves.includes(this.toID(altForme.requiredMove)) && !item.zMove) {
			return altForme.name;
		}
		// a hacked-in Megazard X can mega evolve into Megazard Y, but not into Megazard X
		if (item.megaEvolves === species.baseSpecies && item.megaStone !== species.name) {
			return item.megaStone;
		}
		return null;
	},
	runMegaEvo(pokemon) {
		const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
		if (!speciesid) return false;
		const side = pokemon.side;

		// Pokémon affected by Sky Drop cannot mega evolve. Enforce it here for now.
		for (const foeActive of side.foe.active) {
			if (foeActive.volatiles['skydrop'] && foeActive.volatiles['skydrop'].source === pokemon) {
				return false;
			}
		}

		pokemon.formeChange(speciesid, pokemon.getItem(), true);

		// Limit one mega evolution
		const wasMega = pokemon.canMegaEvo;
		for (const ally of side.pokemon) {
			if (wasMega) {
				ally.canMegaEvo = null;
			} else {
				ally.canUltraBurst = null;
			}
		}

		this.runEvent('AfterMega', pokemon);
		return true;
	},
}; exports.Scripts = Scripts;
