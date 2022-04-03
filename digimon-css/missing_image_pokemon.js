const https = require('https');
const Pokedex = require('./digimonshowdown/pokedex').Pokedex;

const pokemon = Object.keys(Pokedex).filter(key => Pokedex[key].universe === 'Pokemon');
let missingImages = [];
for (let i = 0; i < pokemon.length; i++) {
  let name = pokemon[i];
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
  // do a http get to front & back, if 404, add to missingImages
  https.get(front, res => {
    if (res.statusCode === 404) {
      console.log(front);
    }
  });
  https.get(back, res => {
    if (res.statusCode === 404) {
      console.log(back);
    }
  });
}
