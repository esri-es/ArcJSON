# ArcJSON
Javascript library to generate JSON objects in order to use the ArcGIS REST API. 

It works as a node module and also as a Javascript library in the browser.

## How to use it in the browser

```html
<script src="https://esri-es.github.io/ArcJSON/lib/arcjson.js" charset="utf-8"></script>
<script>
  ArcJSON.method_name(options);
</script>`
```
You can see an [example here](http://esri-es.github.io/ArcJSON/examples/).
## How to use it with Node.js

Install the package:
```javascript
npm install arcgis-json-objects
```

And then you can use it like this:
```javascript
var ArcJSON = require('arcgis-json-objects');
ArcJSON.method_name(options);
```
You can see an [example here](https://github.com/esri-es/ArcJSON/blob/master/examples/index.js).
