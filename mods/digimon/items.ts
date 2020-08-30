export const Items: {[k: string]: ModdedItemData} = {
	xantibody: {
		name:"X-Antibody", 
		spritenum:599, 
		megaStone:"BlackWarGreymon-X", 
		megaEvolves:"BlackWarGreymon", 
		itemUser:["BlackWarGreymon"], 
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies)return false; 
			return true; 
		}, 
		num:-1000, 
		desc:"If held by Digimon who carry by the X-Antibody, this item allows it to Mega Evolve in battle.", 
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
};