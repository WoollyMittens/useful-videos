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
