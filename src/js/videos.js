/*
	Source:
	van Creij, Maurice (2018). "videos.js: Embedded video that doesn't cause traffic until clicked.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Videos = function (config) {
	// default config
	this.config = {
		'template' : '<iframe src="//www.youtube.com/embed/{id}?autoplay=1" height="400" width="300"></iframe>',
		'separator' : 'v='
	};
	// store the config
	for (var key in config) { this.config[key] = config[key]; }
	// bind the components
	this.previews = new this.Previews(this);
};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return Videos });
if (typeof module != 'undefined') module.exports = Videos;
