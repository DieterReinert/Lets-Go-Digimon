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
`;
for (let i = 0; i < pokemon.length; i++) {
  const name = pokemon[i];
  const front = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon/${name}.png`;
  const back = `https://play.pokemonshowdown.com/sprites/digimon/sprites/pokemon-back/${name}.png`;
 css += `div[id*=digimonxpokemon] .innerbattle div > div > img[src*="ani/${name}"] {  content: url('${front}');  width: 56px !important;  height: 56px !important;  top: 90px !important} div[id*=digimonxpokemon] .innerbattle div > div > img[src*="ani-back/${name}"] {  content: url('${back}');  width: 56px !important;  height: 56px !important;  top: 245px !important; } div[id*=digimonxpokemon] .innerbattle div > div > img[src*="ani-back/${name}"]:only-child { left: 140px !important; position: fixed !important}`;
}
console.log(css);