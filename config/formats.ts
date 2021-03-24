/** @type {(FormatsData | {section: string, column?: number})[]} */
const DigimonFormats: FormatList = [
	// Digimon Metas
	{
		section: "Digimon Metas",
		column: 2,
	},
	{
		name: "[Digimon] Digimon Showdown Singles",
		desc: "Battle and play with your friends with Digimon.",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #11111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: #ffffff;"><strong>Pokemon Dimensional Rift Mod</strong></span></td></tr><tr><td style="text-align: center; width: 264px;"><span style="font-size: small; color: #ffffff;"><a style="color: #ffffff;" href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t">Dimensional Rift Dev Team</a></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;">[Gen 7 Let\'s Go] Pokemon X Digimon</span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Icons = Pokemon Types/Abilities</strong></span><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" />&nbsp;<br /><span style="font-size: small;"><span style="color: tan;"><strong>Normal</strong><span style="color: blue;"><em><span style="color: #333399;">Data</span></em><span style="color: black;"><span style="color: brown;"><em>&nbsp;</em><strong>Dark</strong><span style="color: blue;"><em><span style="color: #333399;">Virus<span style="color: #333333;">&nbsp;</span></span></em><span style="color: black;"><span style="color: magenta;"><strong>Fairy</strong><em><span style="color: #333399;">Vaccine</span></em></span></span></span></span></span></span></span></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: #ffffff;"><strong>Mod Features</strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Digimon Have Custom Attacks</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>X Evo: HP Triggered Mega Evo</strong><br /><img src="https://i.imgur.com/0t2QuMd.png" width="85" height="32" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Abilities: Base Power Up/Down</strong><br /><img src="https://i.imgur.com/09a67TF.png" alt="" width="175" height="102" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Ability Triangle has a chance of<br /> curing non-volatile status</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>BUG: Reveses Ability Triangle</strong></span></td></tr><tr><td style="text-align: center;"><table style="width: 265.009px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 265.009px;"><strong><span style="color: #ffffff;">Offical Digimon Media</span></strong></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="width: 265px; height: 27px; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 123.73px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/Category:Anime">Anime List</a></span></strong></td><td style="width: 125.27px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/List_of_Video_Games">Game List</a></span></strong></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: "Battle and play with your friends with Digimon.",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #11111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: #ffffff;"><strong>Pokemon Dimensional Rift Mod</strong></span></td></tr><tr><td style="text-align: center; width: 264px;"><span style="font-size: small; color: #ffffff;"><a style="color: #ffffff;" href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t">Dimensional Rift Dev Team</a></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;">[Gen 7 Let\'s Go] Pokemon X Digimon</span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Icons = Pokemon Types/Abilities</strong></span><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" />&nbsp;<br /><span style="font-size: small;"><span style="color: tan;"><strong>Normal</strong><span style="color: blue;"><em><span style="color: #333399;">Data</span></em><span style="color: black;"><span style="color: brown;"><em>&nbsp;</em><strong>Dark</strong><span style="color: blue;"><em><span style="color: #333399;">Virus<span style="color: #333333;">&nbsp;</span></span></em><span style="color: black;"><span style="color: magenta;"><strong>Fairy</strong><em><span style="color: #333399;">Vaccine</span></em></span></span></span></span></span></span></span></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: #ffffff;"><strong>Mod Features</strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Digimon Have Custom Attacks</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>X Evo: HP Triggered Mega Evo</strong><br /><img src="https://i.imgur.com/0t2QuMd.png" width="85" height="32" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Abilities: Base Power Up/Down</strong><br /><img src="https://i.imgur.com/09a67TF.png" alt="" width="175" height="102" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Ability Triangle has a chance of<br /> curing non-volatile status</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>BUG: Reveses Ability Triangle</strong></span></td></tr><tr><td style="text-align: center;"><table style="width: 265.009px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 265.009px;"><strong><span style="color: #ffffff;">Offical Digimon Media</span></strong></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="width: 265px; height: 27px; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 123.73px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/Category:Anime">Anime List</a></span></strong></td><td style="width: 125.27px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/List_of_Video_Games">Game List</a></span></strong></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: "Battle and play with your friends with Digimon.",

		mod: "digimon",
		gameType: 'triples',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #11111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: #ffffff;"><strong>Pokemon Dimensional Rift Mod</strong></span></td></tr><tr><td style="text-align: center; width: 264px;"><span style="font-size: small; color: #ffffff;"><a style="color: #ffffff;" href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t">Dimensional Rift Dev Team</a></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;">[Gen 7 Let\'s Go] Pokemon X Digimon</span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Icons = Pokemon Types/Abilities</strong></span><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" />&nbsp;<br /><span style="font-size: small;"><span style="color: tan;"><strong>Normal</strong><span style="color: blue;"><em><span style="color: #333399;">Data</span></em><span style="color: black;"><span style="color: brown;"><em>&nbsp;</em><strong>Dark</strong><span style="color: blue;"><em><span style="color: #333399;">Virus<span style="color: #333333;">&nbsp;</span></span></em><span style="color: black;"><span style="color: magenta;"><strong>Fairy</strong><em><span style="color: #333399;">Vaccine</span></em></span></span></span></span></span></span></span></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: #ffffff;"><strong>Mod Features</strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Digimon Have Custom Attacks</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>X Evo: HP Triggered Mega Evo</strong><br /><img src="https://i.imgur.com/0t2QuMd.png" width="85" height="32" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Abilities: Base Power Up/Down</strong><br /><img src="https://i.imgur.com/09a67TF.png" alt="" width="175" height="102" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Ability Triangle has a chance of<br /> curing non-volatile status</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>BUG: Reveses Ability Triangle</strong></span></td></tr><tr><td style="text-align: center;"><table style="width: 265.009px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 265.009px;"><strong><span style="color: #ffffff;">Offical Digimon Media</span></strong></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="width: 265px; height: 27px; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 123.73px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/Category:Anime">Anime List</a></span></strong></td><td style="width: 125.27px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/List_of_Video_Games">Game List</a></span></strong></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: "Battle with Digimon across 9 Types!",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Same Type Clause'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #11111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: #ffffff;"><strong>Pokemon Dimensional Rift Mod</strong></span></td></tr><tr><td style="text-align: center; width: 264px;"><span style="font-size: small; color: #ffffff;"><a style="color: #ffffff;" href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t">Dimensional Rift Dev Team</a></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;">[Gen 7 Let\'s Go] Pokemon X Digimon</span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Icons = Pokemon Types/Abilities</strong></span><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" />&nbsp;<br /><span style="font-size: small;"><span style="color: tan;"><strong>Normal</strong><span style="color: blue;"><em><span style="color: #333399;">Data</span></em><span style="color: black;"><span style="color: brown;"><em>&nbsp;</em><strong>Dark</strong><span style="color: blue;"><em><span style="color: #333399;">Virus<span style="color: #333333;">&nbsp;</span></span></em><span style="color: black;"><span style="color: magenta;"><strong>Fairy</strong><em><span style="color: #333399;">Vaccine</span></em></span></span></span></span></span></span></span></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: #ffffff;"><strong>Mod Features</strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Digimon Have Custom Attacks</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>X Evo: HP Triggered Mega Evo</strong><br /><img src="https://i.imgur.com/0t2QuMd.png" width="85" height="32" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Abilities: Base Power Up/Down</strong><br /><img src="https://i.imgur.com/09a67TF.png" alt="" width="175" height="102" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Ability Triangle has a chance of<br /> curing non-volatile status</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>BUG: Reveses Ability Triangle</strong></span></td></tr><tr><td style="text-align: center;"><table style="width: 265.009px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 265.009px;"><strong><span style="color: #ffffff;">Offical Digimon Media</span></strong></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="width: 265px; height: 27px; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 123.73px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/Category:Anime">Anime List</a></span></strong></td><td style="width: 125.27px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/List_of_Video_Games">Game List</a></span></strong></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: "Battle with Digimon across 9 Types!",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Same Type Clause'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #11111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: #ffffff;"><strong>Pokemon Dimensional Rift Mod</strong></span></td></tr><tr><td style="text-align: center; width: 264px;"><span style="font-size: small; color: #ffffff;"><a style="color: #ffffff;" href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t">Dimensional Rift Dev Team</a></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;">[Gen 7 Let\'s Go] Pokemon X Digimon</span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Icons = Pokemon Types/Abilities</strong></span><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" />&nbsp;<br /><span style="font-size: small;"><span style="color: tan;"><strong>Normal</strong><span style="color: blue;"><em><span style="color: #333399;">Data</span></em><span style="color: black;"><span style="color: brown;"><em>&nbsp;</em><strong>Dark</strong><span style="color: blue;"><em><span style="color: #333399;">Virus<span style="color: #333333;">&nbsp;</span></span></em><span style="color: black;"><span style="color: magenta;"><strong>Fairy</strong><em><span style="color: #333399;">Vaccine</span></em></span></span></span></span></span></span></span></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: #ffffff;"><strong>Mod Features</strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Digimon Have Custom Attacks</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>X Evo: HP Triggered Mega Evo</strong><br /><img src="https://i.imgur.com/0t2QuMd.png" width="85" height="32" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Abilities: Base Power Up/Down</strong><br /><img src="https://i.imgur.com/09a67TF.png" alt="" width="175" height="102" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Ability Triangle has a chance of<br /> curing non-volatile status</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>BUG: Reveses Ability Triangle</strong></span></td></tr><tr><td style="text-align: center;"><table style="width: 265.009px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 265.009px;"><strong><span style="color: #ffffff;">Offical Digimon Media</span></strong></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="width: 265px; height: 27px; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 123.73px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/Category:Anime">Anime List</a></span></strong></td><td style="width: 125.27px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/List_of_Video_Games">Game List</a></span></strong></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: "Battle with Digimon and Pokemon Together!",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #11111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: #ffffff;"><strong>Pokemon Dimensional Rift Mod</strong></span></td></tr><tr><td style="text-align: center; width: 264px;"><span style="font-size: small; color: #ffffff;"><a style="color: #ffffff;" href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t">Dimensional Rift Dev Team</a></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;">[Gen 7 Let\'s Go] Pokemon X Digimon</span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Icons = Pokemon Types/Abilities</strong></span><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" />&nbsp;<br /><span style="font-size: small;"><span style="color: tan;"><strong>Normal</strong><span style="color: blue;"><em><span style="color: #333399;">Data</span></em><span style="color: black;"><span style="color: brown;"><em>&nbsp;</em><strong>Dark</strong><span style="color: blue;"><em><span style="color: #333399;">Virus<span style="color: #333333;">&nbsp;</span></span></em><span style="color: black;"><span style="color: magenta;"><strong>Fairy</strong><em><span style="color: #333399;">Vaccine</span></em></span></span></span></span></span></span></span></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: #ffffff;"><strong>Mod Features</strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Digimon Have Custom Attacks</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>X Evo: HP Triggered Mega Evo</strong><br /><img src="https://i.imgur.com/0t2QuMd.png" width="85" height="32" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Abilities: Base Power Up/Down</strong><br /><img src="https://i.imgur.com/09a67TF.png" alt="" width="175" height="102" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Ability Triangle has a chance of<br /> curing non-volatile status</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>BUG: Reveses Ability Triangle</strong></span></td></tr><tr><td style="text-align: center;"><table style="width: 265.009px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 265.009px;"><strong><span style="color: #ffffff;">Offical Digimon Media</span></strong></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="width: 265px; height: 27px; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 123.73px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/Category:Anime">Anime List</a></span></strong></td><td style="width: 125.27px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/List_of_Video_Games">Game List</a></span></strong></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: "Battle with Digimon and Pokemon Together!",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #11111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: #ffffff;"><strong>Pokemon Dimensional Rift Mod</strong></span></td></tr><tr><td style="text-align: center; width: 264px;"><span style="font-size: small; color: #ffffff;"><a style="color: #ffffff;" href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t">Dimensional Rift Dev Team</a></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;">[Gen 7 Let\'s Go] Pokemon X Digimon</span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Icons = Pokemon Types/Abilities</strong></span><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" />&nbsp;<br /><span style="font-size: small;"><span style="color: tan;"><strong>Normal</strong><span style="color: blue;"><em><span style="color: #333399;">Data</span></em><span style="color: black;"><span style="color: brown;"><em>&nbsp;</em><strong>Dark</strong><span style="color: blue;"><em><span style="color: #333399;">Virus<span style="color: #333333;">&nbsp;</span></span></em><span style="color: black;"><span style="color: magenta;"><strong>Fairy</strong><em><span style="color: #333399;">Vaccine</span></em></span></span></span></span></span></span></span></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: #ffffff;"><strong>Mod Features</strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Digimon Have Custom Attacks</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>X Evo: HP Triggered Mega Evo</strong><br /><img src="https://i.imgur.com/0t2QuMd.png" width="85" height="32" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Abilities: Base Power Up/Down</strong><br /><img src="https://i.imgur.com/09a67TF.png" alt="" width="175" height="102" /><br /></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>Ability Triangle has a chance of<br /> curing non-volatile status</strong></span></td></tr><tr><td style="text-align: center;"><span style="color: #333333;"><strong>BUG: Reveses Ability Triangle</strong></span></td></tr><tr><td style="text-align: center;"><table style="width: 265.009px; background-color: #8f6858; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 265.009px;"><strong><span style="color: #ffffff;">Offical Digimon Media</span></strong></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="width: 265px; height: 27px; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 123.73px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/Category:Anime">Anime List</a></span></strong></td><td style="width: 125.27px;"><strong><span style="color: #333333;"><a style="color: #333333;" href="https://wikimon.net/List_of_Video_Games">Game List</a></span></strong></td></tr></tbody></table></td></tr></tbody></table></center>');
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
