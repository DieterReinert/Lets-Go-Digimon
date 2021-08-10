export const Abilities: {[k: string]: ModdedAbilityData} = {
	"noability": {
		inherit: true,
	},
	"data": {
		name: "Data",
		desc: "1.2x against Vaccine; 0.8x against Virus. 30% chance to cure status conditions.",
		onStart(pokemon) {
			pokemon.addVolatile('Data');
			this.add('-start', pokemon, 'Data');
		},
		onModifyDamage(damage, source, target, move) {
			if (target.volatiles['bug'] || source.volatiles['bug']) {
				if (target.hasAbility('virus') || target.hasAbility('x-virus')) {
					this.debug('Data boost (Bug active)');
					return this.chainModify(1.2);
				} else if (target.hasAbility('vaccine') || target.hasAbility('x-vaccine')) {
					this.debug('Data weaken (Bug active)');
					return this.chainModify(0.8);
				}
			} else {
				if (target.hasAbility('vaccine') || target.hasAbility('x-vaccine')) {
					this.debug('Data boost');
					return this.chainModify(1.2);
				} else {
					if (target.hasAbility('virus') || target.hasAbility('x-virus')) {
						this.debug('Data weaken');
						return this.chainModify(0.8);
					}
				}
			}
		},
		onResidualOrder: 999,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.random(3) === 0) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Data');
				pokemon.cureStatus();
			}
			if (pokemon.item !== 'xantibody' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Data');
			pokemon.formeChange(`${pokemon.name}-X`, this.effect, true);
			const ability = this.dex.abilities.get("xdata");
			this.add('-ability', pokemon, ability, '[from] ability: Data', '[of] ' + pokemon);
			pokemon.setAbility(this.dex.abilities.get("xdata"));
		},
	},
	"virus": {
		name: "Virus",
		desc: "1.2x against Data; 0.8x against Vaccine. 30% chance to cure status conditions.",
		onStart(pokemon) {
			pokemon.addVolatile('Virus');
			this.add('-start', pokemon, 'Virus');
		},
		onModifyDamage(damage, source, target, move) {
			if (target.volatiles['bug'] || source.volatiles['bug']) {
				if (target.hasAbility('vaccine') || target.hasAbility('x-vaccine')) {
					this.debug('Virus boost (Bug active)');
					return this.chainModify(1.2);
				} else if (target.hasAbility('data') || target.hasAbility('x-data')) {
					this.debug('Virus weaken (Bug active)');
					return this.chainModify(0.8);
				}
			} else {
				if (target.hasAbility('data') || target.hasAbility('x-data')) {
					this.debug('Virus boost');
					return this.chainModify(1.2);
				} else {
					if (target.hasAbility('vaccine') || target.hasAbility('x-vaccine')) {
						this.debug('Virus weaken');
						return this.chainModify(0.8);
					}
				}
			}
		},
		onResidualOrder: 999,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.random(3) === 0) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Virus');
				pokemon.cureStatus();
			}
			if (pokemon.item !== 'xantibody' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Virus');
			pokemon.formeChange(`${pokemon.name}-X`, this.effect, true);
			const ability = this.dex.abilities.get("xvirus");
			this.add('-ability', pokemon, ability, '[from] ability: Virus', '[of] ' + pokemon);
			pokemon.setAbility(this.dex.abilities.get("xvirus"));
		},
	},
	"vaccine": {
		name: "Vaccine",
		desc: "1.2x against Virus; 0.8x against Data. 30% chance to cure status conditions.",
		onStart(pokemon) {
			pokemon.addVolatile('Vaccine');
			this.add('-start', pokemon, 'Vaccine');
		},
		onModifyDamage(damage, source, target, move) {
			if (target.volatiles['bug'] || source.volatiles['bug']) {
				if (target.hasAbility('data') || target.hasAbility('x-data')) {
					this.debug('Vaccine boost (Bug active)');
					return this.chainModify(1.2);
				} else if (target.hasAbility('virus') || target.hasAbility('x-virus')) {
					this.debug('Vaccine weaken (Bug active)');
					return this.chainModify(0.8);
				}
			} else {
				if (target.hasAbility('virus') || target.hasAbility('x-virus')) {
					this.debug('Vaccine boost');
					return this.chainModify(1.2);
				} else {
					if (target.hasAbility('data') || target.hasAbility('x-data')) {
						this.debug('Vaccine weaken');
						return this.chainModify(0.8);
					}
				}
			}
		},
		onResidualOrder: 999,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.random(3) === 0) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Vaccine');
				pokemon.cureStatus();
			}
			if (pokemon.item !== 'xantibody' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Vaccine');
			pokemon.formeChange(`${pokemon.name}-X`, this.effect, true);
			const ability = this.dex.abilities.get("xvaccine");
			this.add('-ability', pokemon, ability, '[from] ability: Vaccine', '[of] ' + pokemon);
			pokemon.setAbility(this.dex.abilities.get("xvaccine"));
		},
	},
	"xdata": {
		name: "X-Data",
		desc: "1.2x against Vaccine; 0.8x against Virus. 30% chance to cure status conditions. X-Antibody increases User BP by 30%.",
		onStart(pokemon) {
			pokemon.removeVolatile('Data');
			this.add('-end', pokemon, 'Data');
			pokemon.addVolatile('X-Data');
			this.add('-start', pokemon, 'X-Data');
		},
		onModifyDamage(damage, source, target, move) {
			if (target.volatiles['bug'] || source.volatiles['bug']) {
				if (target.hasAbility('virus') || target.hasAbility('x-virus')) {
					this.debug('Data boost (Bug active)');
					return this.chainModify(1.2);
				} else if (target.hasAbility('vaccine') || target.hasAbility('x-vaccine')) {
					this.debug('Data weaken (Bug active)');
					return this.chainModify(0.8);
				}
			} else {
				if (target.hasAbility('vaccine') || target.hasAbility('x-vaccine')) {
					this.debug('Data boost');
					return this.chainModify(1.2);
				} else {
					if (target.hasAbility('virus') || target.hasAbility('x-virus')) {
						this.debug('Data weaken');
						return this.chainModify(0.8);
					}
				}
			}
		},
		onResidualOrder: 999,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.random(3) === 0) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Data');
				pokemon.cureStatus();
			}
		},
		onBasePowerPriority: 22,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target) {
				this.debug('Power Spot boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
	},
	"xvirus": {
		name: "X-Virus",
		desc: "1.2x against Data; 0.8x against Vaccine. 30% chance to cure status conditions. X-Antibody increases User BP by 30%.",
		onStart(pokemon) {
			pokemon.removeVolatile('Virus');
			this.add('-end', pokemon, 'Virus');
			pokemon.addVolatile('X-Virus');
			this.add('-start', pokemon, 'X-Virus');
		},
		onModifyDamage(damage, source, target, move) {
			if (target.volatiles['bug'] || source.volatiles['bug']) {
				if (target.hasAbility('vaccine') || target.hasAbility('x-vaccine')) {
					this.debug('Virus boost (Bug active)');
					return this.chainModify(1.2);
				} else if (target.hasAbility('data') || target.hasAbility('x-data')) {
					this.debug('Virus weaken (Bug active)');
					return this.chainModify(0.8);
				}
			} else {
				if (target.hasAbility('data') || target.hasAbility('x-data')) {
					this.debug('Virus boost');
					return this.chainModify(1.2);
				} else {
					if (target.hasAbility('vaccine') || target.hasAbility('x-vaccine')) {
						this.debug('Virus weaken');
						return this.chainModify(0.8);
					}
				}
			}
		},
		onResidualOrder: 999,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.random(3) === 0) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Data');
				pokemon.cureStatus();
			}
		},
		onBasePowerPriority: 22,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target) {
				this.debug('Power Spot boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
	},
	"xvaccine": {
		name: "X-Vaccine",
		desc: "1.2x against Virus; 0.8x against Data. 30% chance to cure status conditions. X-Antibody increases User BP by 30%.",
		onStart(pokemon) {
			pokemon.removeVolatile('Vaccine');
			this.add('-end', pokemon, 'Vaccine');
			pokemon.addVolatile('X-Vaccine');
			this.add('-start', pokemon, 'X-Vaccine');
		},
		onModifyDamage(damage, source, target, move) {
			if (target.volatiles['bug'] || source.volatiles['bug']) {
				if (target.hasAbility('data') || target.hasAbility('x-data')) {
					this.debug('Vaccine boost (Bug active)');
					return this.chainModify(1.2);
				} else if (target.hasAbility('virus') || target.hasAbility('x-virus')) {
					this.debug('Vaccine weaken (Bug active)');
					return this.chainModify(0.8);
				}
			} else {
				if (target.hasAbility('virus') || target.hasAbility('x-virus')) {
					this.debug('Vaccine boost');
					return this.chainModify(1.2);
				} else {
					if (target.hasAbility('data') || target.hasAbility('x-data')) {
						this.debug('Vaccine weaken');
						return this.chainModify(0.8);
					}
				}
			}
		},
		onResidualOrder: 999,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.random(3) === 0) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Data');
				pokemon.cureStatus();
			}
		},
		onBasePowerPriority: 22,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target) {
				this.debug('Power Spot boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
	},
};
