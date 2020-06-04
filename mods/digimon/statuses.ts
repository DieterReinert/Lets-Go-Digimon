export const BattleStatuses: { [k: string]: ModdedPureEffectData } = {
	panic: {
		name: 'panic',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'panic');
			this.effectData.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'panic');
		},
		onBeforeMovePriority: 4,
		onBeforeMove(pokemon) {
			pokemon.volatiles.panic.time--;
			if (!pokemon.volatiles.panic.time) {
				pokemon.removeVolatile('panic');
				return;
			}
			this.add('-activate', pokemon, 'panic');
			let tar = this.p1.active.concat(this.p2.active);
			this.useMove('panicattack', pokemon, tar[this.random(tar.length)]);
			return false;
		},
	},
	dot: {
		name: 'dot',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'dot');
			this.effectData.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'dot');
		},
		onBeforeMovePriority: 4,
		onBeforeMove(pokemon) {
			pokemon.volatiles.dot.time--;
			if (!pokemon.volatiles.dot.time) {
				pokemon.removeVolatile('dot');
				return;
			}
			this.add('-activate', pokemon, 'dot');
			this.useMove('dotbeam', pokemon);
			return false;
		},
	},
	bug: {
		name: 'bug',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'bug');
			this.effectData.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'bug');
		},
		onBeforeMovePriority: 4,
		onBeforeMove(pokemon) {
			if (!pokemon.volatiles.bug) return;
			pokemon.volatiles.bug.time--;
			if (!pokemon.volatiles.bug.time) {
				pokemon.removeVolatile('bug');
				return;
			}
		},
		// Interaction coded in abilities.js
	},
	stall: {
		inherit: true,
		onStart(target) {
			if (target.side.sideConditions['sidestall']) {
				this.effectData.counter = target.side.sideConditions['sidestall'].counter * 3;
			} else {
				this.effectData.counter = 3;
			}
		},
	},
	sidestall: {
		//this is a side condition
		duration: 2,
		counterMax: 729,
		onStart(side) {
			let counter = 3;
			// @ts-ignore
			for (const pokemon of side.active) {
				if (pokemon && pokemon.volatiles['stall'] && pokemon.volatiles['stall'].counter >= counter) {
					counter = pokemon.volatiles['stall'].counter * 3;
				}
			}
			this.effectData.counter = counter;
		},
		onStallMove(target) {
			let counter = this.effectData.counter || 1;
			this.debug("Success chance: " + Math.round(100 / counter) + "%");
			let success = this.randomChance(1, counter);
			return success;
		},
		onRestart() {
			// @ts-ignore
			if (this.effectData.counter < this.effect.counterMax) {
				this.effectData.counter *= 3;
			}
			this.effectData.duration = 2;
		},
	},

	raindance: {
		inherit: true,
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'DG-Electric') {
				this.debug('rain water boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Fire' || move.type === 'DG-Fire') {
				this.debug('rain fire suppress');
				return this.chainModify(0.5);
			}
		},
	},
	primordialsea: {
		inherit: true,
		onTryMove(target, source, effect) {
			if ((effect.type === 'Fire' || effect.type === 'DG-Fire') && effect.category !== 'Status') {
				this.debug('Primordial Sea fire suppress');
				this.add('-fail', source, effect, '[from] Primordial Sea');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'DG-Electric') {
				this.debug('Rain water boost');
				return this.chainModify(1.5);
			}
		},
	},
	sunnyday: {
		inherit: true,
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.type === 'Fire' || move.type === 'DG-Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Water' || move.type === 'DG-Electric') {
				this.debug('Sunny Day water suppress');
				return this.chainModify(0.5);
			}
		},
	},
	desolateland: {
		inherit: true,
		onTryMove(target, source, effect) {
			if ((effect.type === 'Water' || effect.type === 'DG-Electric') && effect.category !== 'Status') {
				this.debug('Desolate Land water suppress');
				this.add('-fail', source, effect, '[from] Desolate Land');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.type === 'Fire' || move.type === 'DG-Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
		},
	},
	deltastream: {
		inherit: true,
		onEffectiveness(typeMod, target, type, move) {
			if (move && move.effectType === 'Move' && (type === 'Flying' || type === 'Air') && typeMod > 0) {
				this.add('-activate', '', 'deltastream');
				return 0;
			}
		},
	},
};
