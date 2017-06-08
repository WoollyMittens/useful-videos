# useful.videos.js: Efficient embedded video

Embedded video that doesn't cause traffic until clicked.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-videos">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="./css/useful-videos.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-videos.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
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
var videos = new useful.Videos().init({
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

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
