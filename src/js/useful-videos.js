/*
	Source:
	van Creij, Maurice (2014). "useful.videos.js: Embedded video that doesn't cause traffic until clicked.", version 20141127, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// create the constructor if needed
var useful = useful || {};

// extend the constructor
useful.Videos = function () {

	// PROPERTIES

	"use strict";

	this.config = {
		'template' : '<iframe src="//www.youtube.com/embed/{id}?autoplay=1" height="400" width="300"></iframe>',
		'separator' : 'v='
	};

	// METHODS

	this.init = function (config) {
		// store the config
		for (var property in config) { this.config[property] = config[property]; }
		// add the click events
		var previews = this.config.elements;
		for (var a = 0, b = previews.length; a < b; a += 1) {
			// add click handlers
			previews[a].addEventListener('click', this.onPreviewClicked(previews[a]));
		}
		// return the object
		return this;
	};

	// EVENTS

	this.onPreviewClicked = function (element) {
		var _this = this;
		return function (evt) {
			// cancel the click
			evt.preventDefault();
			// replace the element with the iframe
			var id = element.getAttribute('href').split(_this.config.separator);
			var wrapper = document.createElement('span');
			wrapper.innerHTML = _this.config.template.replace('{id}', id[id.length - 1]);
			element.parentNode.replaceChild(wrapper, element);
		};
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Videos;
}
