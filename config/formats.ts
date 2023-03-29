/** @type {(FormatsData | {section: string, column?: number})[]} */
const DigimonFormats: FormatList = [
	// Digimon Metas
	{
		section: "Digimon Metas",
		column: 2,
	},
	{
		name: "[Digimon] Digimon Showdown Singles",
		desc: "Battle and play with your friends with this Digimon & LGPE hyrbid.",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon Showdown Doubles",
		desc: "Battle and play with your friends with this Digimon & LGPE hyrbid.",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon Showdown Triples",
		desc: "Battle and play with your friends with this Digimon & LGPE hyrbid.",

		mod: "digimon",
		gameType: 'triples',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon Showdown Monotype",
		desc: "Battle in this Digimon & LGPE Monotype format!",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Same Type Clause', 'Terastal Clause'],
		onBegin() {
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon Showdown Monotype Doubles",
		desc: "Battle in this Digimon & LGPE Monotype format!",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Same Type Clause', 'Terastal Clause'],
		onBegin() {
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon x Pokemon",
		desc: "Worlds Collide in this Digimon & LGPE Format!",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon x Pokemon Doubles",
		desc: "Worlds Collide in this Digimon & LGPE Format!",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
];
exports.Formats.push(...DigimonFormats);
