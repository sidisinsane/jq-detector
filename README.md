# jq-detector
Detects if JQuery-Plugins are loaded and adds a classname to the HTML-Tag.

## install package and add it to bower.json dependencies

`bower install jq-detector --save`

Or alternatively, grab the jq-detector.js and include it in your project.

## example

```js
JqDetector.detect('jquery-plugin-1', 'jquery-plugin-2', 'jquery-plugin-3');
```

