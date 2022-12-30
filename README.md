# videos.js: Efficient embedded video

Embedded video that doesn't cause traffic until clicked.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/videos.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/videos.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/videos.js'
], function(Videos) {
	...
});
```

Or import into an MVC framework.

```js
var Videos = require('js/videos.js');
```

## How to start the script

```html
<ul class="videos-list">
	<li class="videos-preview"><a href="//www.youtube.com/watch?v=jg3vSp6t2wU"><img alt="" src="//img.youtube.com/vi/jg3vSp6t2wU/mqdefault.jpg"/></a></li>
	<li class="videos-preview"><a href="//www.youtube.com/watch?v=guwexeBxfFs"><img alt="" src="//img.youtube.com/vi/guwexeBxfFs/mqdefault.jpg"/></a></li>
	<li class="videos-preview"><a href="//www.youtube.com/watch?v=nzE_gzRu_lU"><img alt="" src="//img.youtube.com/vi/nzE_gzRu_lU/mqdefault.jpg"/></a></li>
</ul>
```

**href/src** - The URL's contain the video embed codes in the URLs.

```javascript
var videos = new Videos({
	'elements' : document.querySelectorAll('.videos-list a'),
	'template' : '<iframe src="//www.youtube.com/embed/{id}?autoplay=1" height="400" width="300"></iframe>',
	'separator' : /v=/gi
});
```

**elements : {DOM Elements}** - Links to videos for the script to target.

**template : {string}** - The format of the video embed {id} will be replaced by the embed code.

**separator : {regexp}** - A string or regular expression indicating where the embed code starts in the video URL.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
