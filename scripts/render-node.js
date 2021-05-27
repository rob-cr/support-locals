'use strict';
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderNode() {

    // const sourcePath = upath.resolve(upath.dirname(__filename), '../node_modules/');
    // const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');
    //
    // sh.cp('-R', sourcePath, destPath)

    const sourcePathAnimeJS = upath.resolve(upath.dirname(__filename), '../node_modules/animejs/lib/anime.min.js');
    const destPathAnimeJS = upath.resolve(upath.dirname(__filename), '../dist/js/anime.min.js');

    const AnimeJS = fs.readFileSync(sourcePathAnimeJS);
    fs.writeFileSync(destPathAnimeJS, AnimeJS);

    const sourcePathFontAwesomeJS = upath.resolve(upath.dirname(__filename), '../node_modules/@fortawesome/fontawesome-free/js/all.min.js');
    const destPathFontAwesomeJS = upath.resolve(upath.dirname(__filename), '../dist/js/all.min.js');

    const FontAwesomeJS = fs.readFileSync(sourcePathFontAwesomeJS);
    fs.writeFileSync(destPathFontAwesomeJS, FontAwesomeJS);

    const sourcePathMagnificJS = upath.resolve(upath.dirname(__filename), '../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js');
    const destPathMagnificJS = upath.resolve(upath.dirname(__filename), '../dist/js/jquery.magnific-popup.min.js');

    const MagnificJS = fs.readFileSync(sourcePathMagnificJS);
    fs.writeFileSync(destPathMagnificJS, MagnificJS);

    const sourcePathBootstrapJS = upath.resolve(upath.dirname(__filename), '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
    const destPathBootstrapJS = upath.resolve(upath.dirname(__filename), '../dist/js/bootstrap.bundle.min.js');

    const BootstrapJS = fs.readFileSync(sourcePathBootstrapJS);
    fs.writeFileSync(destPathBootstrapJS, BootstrapJS);

    const sourcePathBootstrapMapJS = upath.resolve(upath.dirname(__filename), '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map');
    const destPathBootstrapMapJS = upath.resolve(upath.dirname(__filename), '../dist/js/bootstrap.bundle.min.js.map');

    const BootstrapMapJS = fs.readFileSync(sourcePathBootstrapMapJS);
    fs.writeFileSync(destPathBootstrapMapJS, BootstrapMapJS);

    const sourcePathJqueryJS = upath.resolve(upath.dirname(__filename), '../node_modules/jquery/dist/jquery.min.js');
    const destPathJqueryJS = upath.resolve(upath.dirname(__filename), '../dist/js/jquery.min.js');

    const JqueryJS = fs.readFileSync(sourcePathJqueryJS);
    fs.writeFileSync(destPathJqueryJS, JqueryJS);
};
