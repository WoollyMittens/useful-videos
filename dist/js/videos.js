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

// extend the class
Videos.prototype.Previews = function (context) {

	// PROPERTIES

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

	this.init(context);

};
