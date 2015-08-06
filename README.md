# ArcJSON
Javascript library to generate JSON objects in order to use the ArcGIS REST API. 

## How to use it 
It works as a node module and also as a Javascript library in the browser.
### In the browser

```html
<script src="https://esri-es.github.io/ArcJSON/lib/arcjson.js" charset="utf-8"></script>
<script>
  ArcJSON.method_name(options);
</script>`
```
You can see an [example here](http://esri-es.github.io/ArcJSON/examples/).
### How to use it with Node.js

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

## Available methods

Method| Specifications|Description
--- | --- | ---
featureService(options)|[featureServiceObject](http://resources.arcgis.com/en/help/sds/rest/featureServiceObject.html)|Description of a feature service
featureLayer(options)|[featureLayer](http://resources.arcgis.com/en/help/sds/rest/featureLayer.html)|Definition of a feature layer ready to add to a feature service
field(options)|n/a|Field of a feature layer
exportableWebmap(options)|[exportwebmap](http://resources.arcgis.com/en/help/rest/apiref/exportwebmap_spec.html)|Exportable webmap object

The options params allows you to overwrite any attribute of the object, for example, if you call exportableWebmap like this:
```javascript
exportableWebmap();
```
You will get this:
```javascript
{
	"mapOptions": {
		"showAttribution": false,
		"extent": {
			"xmin": -10212866.663781697,
			"ymin": 3600493.212559925,
			"xmax": -9987836.052510148,
			"ymax": 3829804.2974154423,
			"spatialReference": {
				"wkid": 102100,
				"latestWkid": 3857
			}
		},
		"spatialReference": {
			"wkid": 102100,
			"latestWkid": 3857
		}
	},
	"operationalLayers": [
	{
		"id": "Ocean",
		"title": "Ocean",
		"opacity": 1,
		"url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
	}
	],
	"exportOptions": {
		"outputSize": [300,300],
		"dpi": 96
	}
}
```

But if you call it like this:
```javascript
exportableWebmap({
	"mapOptions": {
		"showAttribution": true
	},
	"exportOptions": {
		"outputSize": [600,300],
		"dpi": 192
	}
});
```
You will get this:

```javascript
{
	"mapOptions": {
		"showAttribution": true,
		"extent": {
			"xmin": -10212866.663781697,
			"ymin": 3600493.212559925,
			"xmax": -9987836.052510148,
			"ymax": 3829804.2974154423,
			"spatialReference": {
				"wkid": 102100,
				"latestWkid": 3857
			}
		},
		"spatialReference": {
			"wkid": 102100,
			"latestWkid": 3857
		}
	},
	"operationalLayers": [
	{
		"id": "Ocean",
		"title": "Ocean",
		"opacity": 1,
		"url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
	}
	],
	"exportOptions": {
		"outputSize": [600,300],
		"dpi": 192
	}
}
```
