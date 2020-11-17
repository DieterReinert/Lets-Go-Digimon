'use strict';

const execSync = require('child_process').execSync;
const {
    existsSync,
    readdirSync,
    readFileSync,
    writeFileSync
} = require('fs');
const join = require('path').join;

process.chdir(__dirname + '/..');

// DATA DIRECTORY
const DATA_DIR = join(__dirname, '/ds-data');
if (!existsSync(DATA_DIR)) {
    console.log(`"${join(__dirname, '/ds-data')}" could not be found. Creating data files...\n`);
    execSync('node build');
}

// IMPORT DATA FILES
const digimonShowdown = {};
readdirSync(DATA_DIR).forEach(dataFile => {
    if (dataFile.endsWith('.json')) {
        const fileName = dataFile.substring(0, dataFile.lastIndexOf('.'));
        digimonShowdown[fileName] = JSON.parse(readFileSync(`${DATA_DIR}/${dataFile}`));
    }
});

// "COMPILE" RESOURCES
const graphicResources = {
    move_panels: {},
    battle_type_images: {},
    icon_sheet: 'https://play.pokemonshowdown.com/sprites/digimon/sprites/digimonicons-sheet.png',
    battle_background: 'https://sig.grumpybumpers.com/host/DragoticPS2.gif',
    digivice_sheet: 'https://res.cloudinary.com/dragotic/image/upload/v1560757847/digivice_sheet.png',
};

Object.keys(digimonShowdown.types).forEach(type => {
    type = type;

    graphicResources.move_panels[type] = `https://play.pokemonshowdown.com/sprites/digimon/plugin-css/${type.toLowerCase()}-panel.png`;
    graphicResources.battle_type_images[type] = `https://play.pokemonshowdown.com/sprites/digimon/sprites/types/${type}.png`;
});

// MOVE CATEGORIES ABBREVIATED
const moveCatAbbr = {
    'Status': 'STA',
    'Physical': 'PHY',
    'Special': 'SPA',
};

// FORCE INSTALL
const reqModule = async () => {
    try {
        require.resolve('clean-css')
    } catch (e) {
        console.log('Could not find "clean-css." Installing "clean-css"...');
        execSync('npm install');
        await setImmediate(() => {})
        console.log('"clean-css" has been installed.\n');
    }

    try {
        return require('clean-css')
    } catch (e) {
        console.log('Couldn\'t import "clean-css." Type in `node index.js` in the cmd to generate the stylesheets.')
        process.exit(1)
    }
};

// BASE STYLESHEETS
const stylesPath = join(__dirname, '/styles');
const baseSheet = readFileSync(`${stylesPath}/base-sheet.css`, {
    encoding: 'utf-8',
});
const battleSheet = readFileSync(`${stylesPath}/battle-sheet.css`, {
    encoding: 'utf-8',
});
const moveSheet = readFileSync(`${stylesPath}/move-sheet.css`, {
    encoding: 'utf-8',
});
const typeSheet = readFileSync(`${stylesPath}/type-sheet.css`, {
    encoding: 'utf-8',
});

const main = async () => {
    const cleanCSS = await reqModule();

    let CSS = baseSheet;

    CSS = CSS.replace('%battle_background', graphicResources.battle_background);
    CSS = CSS.replace('%digivice_sheet', graphicResources.digivice_sheet);

    Object.values(digimonShowdown.dex).forEach((digimonData, i) => {
        if (digimonData.universe !== "Pokemon") {
            let digimonName = digimonData.hasFormes ? `${digimonData.name} (${digimonData.species})` : digimonData.species;
            let digimonPosition = digimonShowdown.positions[digimonData.id];

            let currDigimonSheet = battleSheet;

            currDigimonSheet = currDigimonSheet.replace('%startComment', i === 0 ? '/** DIGIMONS SPRITES & ICONS CSS **/' : '');
            currDigimonSheet = currDigimonSheet.replace(/%species/g, digimonData.species);
            currDigimonSheet = currDigimonSheet.replace(/%id/g, digimonData.id);
            currDigimonSheet = currDigimonSheet.replace('%name', digimonName);
            currDigimonSheet = currDigimonSheet.replace('%lowercaseSpecies', digimonData.species.toLowerCase());
            currDigimonSheet = currDigimonSheet.replace('%nameORspecies', digimonData.hasFormes ? digimonData.name : digimonData.species);
            currDigimonSheet = currDigimonSheet.replace('%icon_sheet', graphicResources.icon_sheet);
            currDigimonSheet = currDigimonSheet.replace('%x', digimonPosition.x).replace('%y', digimonPosition.y);

            if (digimonData.hasFormes) currDigimonSheet = currDigimonSheet.replace('%specialCaseName', `${digimonData.name} (${digimonData.species.toLowerCase()})`);

            let digimonSheetSplit = currDigimonSheet.split(':::');
            if (!digimonData.hasFormes) {
                currDigimonSheet = (digimonSheetSplit[0] + digimonSheetSplit[2]);
            } else {
                currDigimonSheet = digimonSheetSplit.join('');
            }

            CSS += `${currDigimonSheet}`;
        }
    });

    Object.values(digimonShowdown.moves).forEach((moveData, i) => {
        let currMoveSheet = moveSheet;
        if (moveData.type) {
            currMoveSheet = currMoveSheet.replace('%startComment', i === 0 ? '/** DIGIMON MOVES CSS **/' : '');
            currMoveSheet = currMoveSheet.replace(/%moveName/g, moveData.name);
            currMoveSheet = currMoveSheet.replace('%move_panel', graphicResources.move_panels[moveData.type]);
            currMoveSheet = currMoveSheet.replace('%moveCat', moveCatAbbr[moveData.category]);
            currMoveSheet = currMoveSheet.replace('%movePower', moveData.basePower);
            currMoveSheet = currMoveSheet.replace('%moveAcc', moveData.accuracy);
            currMoveSheet = currMoveSheet.replace('%moveDesc', moveData.desc);

            let moveSheetSplit = currMoveSheet.split(':::');
            if (moveData.pokemonMove) {
                currMoveSheet = (moveSheetSplit[0] + moveSheetSplit[2]);
            } else {
                currMoveSheet = moveSheetSplit.join('');
            }

            CSS += `${currMoveSheet}`;
        }
    });

    // Write CSS
    const CSSfull = new cleanCSS({
        level: 0,
        format: 'beautify'
    }).minify(CSS).styles;

    writeFileSync(join(__dirname, '/ds-css/digimon.css'), CSSfull);
    console.log('Successfully wrote Digimon-Showdown-CSS!');

    // Write Minified CSS
    const CSSmin = new cleanCSS().minify(CSS).styles;

    writeFileSync(join(__dirname, '/ds-css/digimon-min.css'), CSSmin);
    console.log('Minified Digimon-Showdown-CSS generated!');
};

main();
