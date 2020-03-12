exports.Formats = [
	// Digimon Metas
	{
		section: "Digmon Metas",
		column: 2,
	},
{
		name: "[Digimon] Digimon Showdown Singles",
		desc: ["Battle and play with your friends with Digimon."],

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #111111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: white;">Digimon Showdown Players Guide</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;">[A Digimon Fan Game]</td></tr><tr><td style="text-align: center;"><strong><span style="font-size: small;">DIGIMON TYPES &amp;&nbsp;ABILITIES</span></strong><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" /><br />[Stat Hovering Does Not Work]</td></tr><tr><td style="text-align: center;"><table style="height: 28px; border-color: #111111; margin-left: auto; margin-right: auto;" border="0" width="267"><tbody><tr><td style="width: 94px; text-align: center;"><span style="font-size: small;"><a title="Digimon Showdown Type Chart" href="https://i.imgur.com/HnydznB.png" target="_blank" rel="noopener"><strong>Types/Ability Chart</strong></a></span></td><td style="width: 82px;"><span style="font-size: small;"><strong><a href="https://dawn.psim.us/digimondatabase">Database</a></strong></span></td><td style="text-align: center; width: 69px;"><span style="font-size: small;"><strong><a href="https://discord.gg/xGVJe6y" target="_blank" rel="noopener">Discord</a></strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="font-size: small;"><a href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t" target="_blank" rel="noopener">Digimon Showdown Credits</a></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: white;">Official Digimon Media</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="height: 26px; margin-left: auto; margin-right: auto;" border="0" width="265"><tbody><tr><td style="width: 119px;"><a href="https://wikimon.net/List_of_Video_Games" target="_blank" rel="noopener"><span style="font-size: small;">Game List</span></a></td><td style="width: 130px;"><a href="https://wikimon.net/Category:Anime" target="_blank" rel="noopener"><span style="font-size: small;">Anime List</span></a></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: ["Battle and play with your friends with Digimon."],

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {			
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #111111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: white;">Digimon Showdown Players Guide</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;">[A Digimon Fan Game]</td></tr><tr><td style="text-align: center;"><strong><span style="font-size: small;">DIGIMON TYPES &amp;&nbsp;ABILITIES</span></strong><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" /><br />[Stat Hovering Does Not Work]</td></tr><tr><td style="text-align: center;"><table style="height: 28px; border-color: #111111; margin-left: auto; margin-right: auto;" border="0" width="267"><tbody><tr><td style="width: 94px; text-align: center;"><span style="font-size: small;"><a title="Digimon Showdown Type Chart" href="https://i.imgur.com/HnydznB.png" target="_blank" rel="noopener"><strong>Types/Ability Chart</strong></a></span></td><td style="width: 82px;"><span style="font-size: small;"><strong><a href="https://dawn.psim.us/digimondatabase">Database</a></strong></span></td><td style="text-align: center; width: 69px;"><span style="font-size: small;"><strong><a href="https://discord.gg/xGVJe6y" target="_blank" rel="noopener">Discord</a></strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="font-size: small;"><a href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t" target="_blank" rel="noopener">Digimon Showdown Credits</a></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: white;">Official Digimon Media</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="height: 26px; margin-left: auto; margin-right: auto;" border="0" width="265"><tbody><tr><td style="width: 119px;"><a href="https://wikimon.net/List_of_Video_Games" target="_blank" rel="noopener"><span style="font-size: small;">Game List</span></a></td><td style="width: 130px;"><a href="https://wikimon.net/Category:Anime" target="_blank" rel="noopener"><span style="font-size: small;">Anime List</span></a></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: ["Battle and play with your friends with Digimon."],

		mod: "digimon",
		gameType: 'triples',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #111111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: white;">Digimon Showdown Players Guide</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;">[A Digimon Fan Game]</td></tr><tr><td style="text-align: center;"><strong><span style="font-size: small;">DIGIMON TYPES &amp;&nbsp;ABILITIES</span></strong><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" /><br />[Stat Hovering Does Not Work]</td></tr><tr><td style="text-align: center;"><table style="height: 28px; border-color: #111111; margin-left: auto; margin-right: auto;" border="0" width="267"><tbody><tr><td style="width: 94px; text-align: center;"><span style="font-size: small;"><a title="Digimon Showdown Type Chart" href="https://i.imgur.com/HnydznB.png" target="_blank" rel="noopener"><strong>Types/Ability Chart</strong></a></span></td><td style="width: 82px;"><span style="font-size: small;"><strong><a href="https://dawn.psim.us/digimondatabase">Database</a></strong></span></td><td style="text-align: center; width: 69px;"><span style="font-size: small;"><strong><a href="https://discord.gg/xGVJe6y" target="_blank" rel="noopener">Discord</a></strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="font-size: small;"><a href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t" target="_blank" rel="noopener">Digimon Showdown Credits</a></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: white;">Official Digimon Media</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="height: 26px; margin-left: auto; margin-right: auto;" border="0" width="265"><tbody><tr><td style="width: 119px;"><a href="https://wikimon.net/List_of_Video_Games" target="_blank" rel="noopener"><span style="font-size: small;">Game List</span></a></td><td style="width: 130px;"><a href="https://wikimon.net/Category:Anime" target="_blank" rel="noopener"><span style="font-size: small;">Anime List</span></a></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: ["Battle with Digimon across 9 Types!"],

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Team Preview', 'Same Type Clause'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #111111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: white;">Digimon Showdown Players Guide</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;">[A Digimon Fan Game]</td></tr><tr><td style="text-align: center;"><strong><span style="font-size: small;">DIGIMON TYPES &amp;&nbsp;ABILITIES</span></strong><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" /><br />[Stat Hovering Does Not Work]</td></tr><tr><td style="text-align: center;"><table style="height: 28px; border-color: #111111; margin-left: auto; margin-right: auto;" border="0" width="267"><tbody><tr><td style="width: 94px; text-align: center;"><span style="font-size: small;"><a title="Digimon Showdown Type Chart" href="https://i.imgur.com/HnydznB.png" target="_blank" rel="noopener"><strong>Types/Ability Chart</strong></a></span></td><td style="width: 82px;"><span style="font-size: small;"><strong><a href="https://dawn.psim.us/digimondatabase">Database</a></strong></span></td><td style="text-align: center; width: 69px;"><span style="font-size: small;"><strong><a href="https://discord.gg/xGVJe6y" target="_blank" rel="noopener">Discord</a></strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="font-size: small;"><a href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t" target="_blank" rel="noopener">Digimon Showdown Credits</a></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: white;">Official Digimon Media</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="height: 26px; margin-left: auto; margin-right: auto;" border="0" width="265"><tbody><tr><td style="width: 119px;"><a href="https://wikimon.net/List_of_Video_Games" target="_blank" rel="noopener"><span style="font-size: small;">Game List</span></a></td><td style="width: 130px;"><a href="https://wikimon.net/Category:Anime" target="_blank" rel="noopener"><span style="font-size: small;">Anime List</span></a></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: ["Battle with Digimon across 9 Types!"],

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Team Preview', 'Same Type Clause'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #111111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: white;">Digimon Showdown Players Guide</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;">[A Digimon Fan Game]</td></tr><tr><td style="text-align: center;"><strong><span style="font-size: small;">DIGIMON TYPES &amp;&nbsp;ABILITIES</span></strong><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" /><br />[Stat Hovering Does Not Work]</td></tr><tr><td style="text-align: center;"><table style="height: 28px; border-color: #111111; margin-left: auto; margin-right: auto;" border="0" width="267"><tbody><tr><td style="width: 94px; text-align: center;"><span style="font-size: small;"><a title="Digimon Showdown Type Chart" href="https://i.imgur.com/HnydznB.png" target="_blank" rel="noopener"><strong>Types/Ability Chart</strong></a></span></td><td style="width: 82px;"><span style="font-size: small;"><strong><a href="https://dawn.psim.us/digimondatabase">Database</a></strong></span></td><td style="text-align: center; width: 69px;"><span style="font-size: small;"><strong><a href="https://discord.gg/xGVJe6y" target="_blank" rel="noopener">Discord</a></strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="font-size: small;"><a href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t" target="_blank" rel="noopener">Digimon Showdown Credits</a></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: white;">Official Digimon Media</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="height: 26px; margin-left: auto; margin-right: auto;" border="0" width="265"><tbody><tr><td style="width: 119px;"><a href="https://wikimon.net/List_of_Video_Games" target="_blank" rel="noopener"><span style="font-size: small;">Game List</span></a></td><td style="width: 130px;"><a href="https://wikimon.net/Category:Anime" target="_blank" rel="noopener"><span style="font-size: small;">Anime List</span></a></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: ["Battle with Digimon and Pokemon Together!"],

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #111111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: white;">Digimon Showdown Players Guide</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;">[A Digimon Fan Game]</td></tr><tr><td style="text-align: center;"><strong><span style="font-size: small;">DIGIMON TYPES &amp;&nbsp;ABILITIES</span></strong><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" /><br />[Stat Hovering Does Not Work]</td></tr><tr><td style="text-align: center;"><table style="height: 28px; border-color: #111111; margin-left: auto; margin-right: auto;" border="0" width="267"><tbody><tr><td style="width: 94px; text-align: center;"><span style="font-size: small;"><a title="Digimon Showdown Type Chart" href="https://i.imgur.com/HnydznB.png" target="_blank" rel="noopener"><strong>Types/Ability Chart</strong></a></span></td><td style="width: 82px;"><span style="font-size: small;"><strong><a href="https://dawn.psim.us/digimondatabase">Database</a></strong></span></td><td style="text-align: center; width: 69px;"><span style="font-size: small;"><strong><a href="https://discord.gg/xGVJe6y" target="_blank" rel="noopener">Discord</a></strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="font-size: small;"><a href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t" target="_blank" rel="noopener">Digimon Showdown Credits</a></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: white;">Official Digimon Media</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="height: 26px; margin-left: auto; margin-right: auto;" border="0" width="265"><tbody><tr><td style="width: 119px;"><a href="https://wikimon.net/List_of_Video_Games" target="_blank" rel="noopener"><span style="font-size: small;">Game List</span></a></td><td style="width: 130px;"><a href="https://wikimon.net/Category:Anime" target="_blank" rel="noopener"><span style="font-size: small;">Anime List</span></a></td></tr></tbody></table></td></tr></tbody></table></center>');
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
		desc: ["Battle with Digimon and Pokemon Together!"],

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Team Preview'],
		onBegin() {
			this.add('raw', '<center><table style="background-color: #ffffff; border-color: #111111;" border="4"><tbody><tr><td style="text-align: center;"><table style="width: 266px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center; width: 264px;"><span style="color: white;">Digimon Showdown Players Guide</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;">[A Digimon Fan Game]</td></tr><tr><td style="text-align: center;"><strong><span style="font-size: small;">DIGIMON TYPES &amp;&nbsp;ABILITIES</span></strong><br /><img src="https://i.imgur.com/YoKqiC3.png" alt="" width="105" height="30" /><br />[Stat Hovering Does Not Work]</td></tr><tr><td style="text-align: center;"><table style="height: 28px; border-color: #111111; margin-left: auto; margin-right: auto;" border="0" width="267"><tbody><tr><td style="width: 94px; text-align: center;"><span style="font-size: small;"><a title="Digimon Showdown Type Chart" href="https://i.imgur.com/HnydznB.png" target="_blank" rel="noopener"><strong>Types/Ability Chart</strong></a></span></td><td style="width: 82px;"><span style="font-size: small;"><strong><a href="https://dawn.psim.us/digimondatabase">Database</a></strong></span></td><td style="text-align: center; width: 69px;"><span style="font-size: small;"><strong><a href="https://discord.gg/xGVJe6y" target="_blank" rel="noopener">Discord</a></strong></span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><span style="font-size: small;"><a href="https://1drv.ms/w/s!AvoD6RnUzzMvg3NC7OWJVkWHNZ-t" target="_blank" rel="noopener">Digimon Showdown Credits</a></span></td></tr><tr><td style="text-align: center;"><table style="width: 267px; background-color: #111111; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 259px;"><span style="color: white;">Official Digimon Media</span></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><table style="height: 26px; margin-left: auto; margin-right: auto;" border="0" width="265"><tbody><tr><td style="width: 119px;"><a href="https://wikimon.net/List_of_Video_Games" target="_blank" rel="noopener"><span style="font-size: small;">Game List</span></a></td><td style="width: 130px;"><a href="https://wikimon.net/Category:Anime" target="_blank" rel="noopener"><span style="font-size: small;">Anime List</span></a></td></tr></tbody></table></td></tr></tbody></table></center>');
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
