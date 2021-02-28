"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Items = {
	xantibody: {
		name: "X-Antibody",
		spritenum: 599,
		megaStone: "",
		megaEvolves: "",
		itemUser: [""],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1000,
		desc: "If held by Digimon who carry by the X-Antibody, this item allows it to Mega Evolve in battle.",
	},
	venusaurite: {
		inherit: true,
	},
	charizarditex: {
		inherit: true,
	},
	charizarditey: {
		inherit: true,
	},
	blastoisinite: {
		inherit: true,
	},
	alakazite: {
		inherit: true,
	},
	gengarite: {
		inherit: true,
	},
	kangaskhanite: {
		inherit: true,
	},
	pinsirite: {
		inherit: true,
	},
	gyaradosite: {
		inherit: true,
	},
	aerodactylite: {
		inherit: true,
	},
	mewtwonitex: {
		inherit: true,
	},
	mewtwonitey: {
		inherit: true,
	},
	beedrillite: {
		inherit: true,
	},
	pidgeotite: {
		inherit: true,
	},
	slowbronite: {
		inherit: true,
	},
}; exports.Items = Items;

 //# sourceMappingURL=sourceMaps/items.js.map