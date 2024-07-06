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
			this.add('raw', '<center><table style="height: 34px; border-color: #006C86;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
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
			this.add('raw', '<center><table style="height: 34px; border-color: #006C86;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
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
			this.add('raw', '<center><table style="height: 34px; border-color: #006C86;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
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
			this.add('raw', '<center><table style="height: 34px; border-color: #006C86;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
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
			this.add('raw', '<center><table style="height: 34px; border-color: #006C86;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
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
			this.add('raw', '<center><table style="height: 34px; border-color: #006C86;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
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
			this.add('raw', '<center><table style="height: 34px; border-color: #006C86;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
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
