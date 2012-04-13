// Locations
// http://localhost:8888/tcga.github.com/tcgaVille.js
// http://tcga.github.com/tcgaVille.js

console.log('tcgaVille loaded :-)');

// Make sure Alex's TCGA is there
if(typeof(TCGA)=='undefined'){throw('Help !! :-( , I was written to be ran from Alex\'s TCGA toolbox (https://chrome.google.com/webstore/search/tcga), please call me from there')}

// load Antonio Garrote's rdfstore
// TCGA.loadScript('https://raw.github.com/antoniogarrote/rdfstore-js/master/dist/browser/rdf_store_min.js',function(err,x){console.log('Antonio Garrote\'s rdfstore loaded')});
// load JMAT
//TCGA.loadScript('http://localhost:8888/jmat/jmat.js',function(err,x){console.log('JMAT loaded')});
// jmat.googlecode.com/git/jmat.js

(function(){
	

// ----- 1. Add stuff to the head so others know it was loaded -----
//(Alex, would you rather the head not used for this? I could of stealth loaded with TCGA.loadScript)

// Add jQuery if not there
if(typeof(jQuery)=='undefined'){
	// jQuery CSS
	var lk =document.createElement('link');
	lk.rel="stylesheet";
	lk.href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css";
	document.head.appendChild(lk);
	// jQuery base
	var s=document.createElement('script');
	s.src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
	document.head.appendChild(s);
	var s=document.createElement('script');
	s.src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js';
	document.head.appendChild(s);
}

// Add JMAT if not there
if(typeof(jmat)=='undefined'){
	var s=document.createElement('script');
	s.src='http://localhost:8888/jmat/jmat.js';
	//s.src='http://jmat.googlecode.com/git/jmat.js';
	document.head.appendChild(s);
}

// Add rdfstore if not there
if(typeof(rdfstore)=='undefined'){
	var s=document.createElement('script');
	s.src='https://raw.github.com/antoniogarrote/rdfstore-js/master/dist/browser/rdf_store_min.js';
	document.head.appendChild(s);
}

// GUI
console.log(jmat.rand(9));
// how do I know that it is all there ? Sean thinks I should use addEventListener

})()

