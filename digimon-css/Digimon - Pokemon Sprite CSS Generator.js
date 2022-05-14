const Pokedex = require('./digimonshowdown/pokedex').Pokedex;

const pokemon = Object.keys(Pokedex).filter(key => Pokedex[key].universe === 'Pokemon');
let css = '';
css += `div[id*=digimonxpokemon] .innerbattle div>div:nth-child(4) > img:nth-child(1) {
  position: absolute !important;
  top: 240px !important;
  left: 120px!important;
}
div[id*=digimonxpokemon] .innerbattle div>div:nth-child(4)>img:nth-child(2) {
  position: absolute !important;
  top: 240px !important;
  left: 160px!important;
}
div[id*=digimonxpokemon] .innerbattle div>div:nth-child(4)>img:nth-child(3) {
  position: absolute !important;
  top: 240px !important;
  left: 200px!important;
}
div[id*=digimonxpokemon] .innerbattle .statbar .status img.pixelated {
	position: relative !important;
	top: 2px !important;
	left: 0px !important;
}
`;
for (let i = 0; i < pokemon.length; i++) {
  let name = pokemon[i];
  let originalName = pokemon[i];
  if (name === 'mrmime') name = 'mr. mime';
  if (name === 'farfetchd') name = "farfetch'd";
  if (name === 'nidoranm') name = "nidoran%20m";
  if (name === 'nidoranf') name = "nidoran%20f";
  if (name === 'wartortle') name = "warturtle";
  if (name.includes('blastoise')) name = 'blastiose';
  if (name.includes('cubone')) name = 'cuebone';
  if (name.includes('diglett')) name = name.replace('diglett', 'diglet');
  let front = '';
  let back = '';
  if (name.includes('alola')) {
    if (name === 'raticatealola') name = 'raticate-alo';
    front = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon/${name.replace('alola', '-alola')}.png`;
    if (name === 'rattataalola') name = 'Rattataalola';
    if (name === 'marowakalola') name = 'marowakalola%20';
    if (name === 'raticate-alo') name = 'raticatealola';
    back = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon-back/${name.replace('alola', '-alola')}.png`;
  } else if (name.includes('mega')) {
    front = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon/${name.replace('mega', '-mega')}.png`;
    if (name === 'venusaurmega') {
      name = 'mega-venusaur';
      back = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon-back/${name}.png`;
    } else {
      back = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon-back/${name.replace('mega', '-mega')}.png`;
    }
  } else if (name.includes('starter')) {
    front = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon/${name.replace('starter', '-starter')}.png`;
    back = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon-back/${name.replace('starter', '-starter')}.png`;
  }  else {
    front = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon/${name}.png`;
    if (name === 'nidoran%20m') name = "nidoran-m";
    if (name === 'nidoran%20f') name = "nidoran-f";
    back = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon-back/${name}.png`;
  }
 css += `div[id*=digimonxpokemon] .innerbattle div > div > img[src*="ani/${originalName}"] {  content: url('${front}');  width: 56px !important;  height: 56px !important;  top: 90px !important} div[id*=digimonxpokemon] .innerbattle div > div > img[src*="ani-back/${originalName}"] {  content: url('${back}');  width: 56px !important;  height: 56px !important;  top: 245px !important; } div[id*=digimonxpokemon] .innerbattle div > div > img[src*="ani-back/${originalName}"]:only-child { left: 140px !important; position: fixed !important}`;
}
console.log(css);