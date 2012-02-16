// Location
// http://localhost:8888/tcga.github.com/tcgaVille.js
// http://tcga.github.com/tcgaVille.js

console.log('tcgaVille loaded :-)');

// Make sure Alex's TCGA is there
if(typeof(TCGA)=='undefined'){throw('Help !! :-( , I was written to be ran from Alex\'s TCGA toolbox (https://chrome.google.com/webstore/search/tcga), please call me from there')}

// load Antonio Garrote's rdfstore
TCGA.loadScript('https://raw.github.com/antoniogarrote/rdfstore-js/master/dist/browser/rdf_store_min.js',function(err,x){console.log('Antonio Garrote\'s rdfstore loaded')});

// load jmat
TCGA.loadScript('http://localhost:8888/jmat/jmat.js',function(err,x){console.log('JMAT loaded')});

http://localhost:8888/jmat/jmat.js
