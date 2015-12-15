/*
	Source:
	van Creij, Maurice (2014). "useful.videos.js: Embedded video that doesn't cause traffic until clicked.", version 20141127, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// create the constructor if needed
var useful = useful || {};
useful.Videos = useful.Videos || function () {};

// extend the prototype with the init function
useful.Videos.prototype.init = function (config) {
	// turn on strict mode
	"use strict";
	// default config
	this.config = {
		'template' : '<iframe src="//www.youtube.com/embed/{id}?autoplay=1" height="400" width="300"></iframe>',
		'separator' : 'v='
	};
	// store the config
	for (var name in config) { this.config[name] = config[name]; }
	// bind the components
	this.previews = new this.Previews().init(this);
	// return the object
	return this;
};

// extend the prototype with the scroll monitoring component
useful.Videos.prototype.Previews = function () {

	// PROPERTIES

	"use strict";
	this.context = null;
	this.config = {};

	// METHODS

	this.init = function (context) {
		// store the context
		this.context = context;
		this.config = context.config;
		// set the event handlers
		var elements = this.config.elements;
		for (var a = 0, b = elements.length; a < b; a += 1) {
			// add click handlers
			elements[a].addEventListener('click', this.onPreviewClicked.bind(this, elements[a]));
		}
		// return the object
		return this;
	};

	// EVENTS

	this.onPreviewClicked = function (element) {
		// cancel the click
		event.preventDefault();
		// replace the element with the iframe
		var id = element.getAttribute('href').split(this.config.separator);
		var wrapper = document.createElement('span');
		wrapper.innerHTML = this.config.template.replace('{id}', id[id.length - 1]);
		element.parentNode.replaceChild(wrapper, element);
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Videos;
}
