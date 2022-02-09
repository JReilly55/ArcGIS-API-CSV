require([
      "esri/Map",
      "esri/layers/CSVLayer",
      "esri/views/MapView",
      "esri/config",
      "esri/core/urlUtils",
      "dojo/domReady!"
    ], function(
      Map,
      CSVLayer,
      MapView,
      esriConfig,
      urlUtils
    ) {
  
  var url = "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";

  esriConfig.request.corsEnabledServers.push('https://rawgit.com');

         const template = {
         title: "Crime committed at {ILEADSStreet}"};
  
        const csvLayer = new CSVLayer({
          url: url,
          title: "St. Louis Crime Map",
          copyright: "St. Louis Police Department",
          popupTemplate: template
        });

        // Symbology via Symbol Playground 
        var marker = {
        type: "picture-marker",
        url: "https://avatars.githubusercontent.com/u/22662195?s=200&v=4",
        width: 30,
        height: 30
        };


      csvLayer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: marker
      };
  
        var map = new Map({
          basemap: "topo-vector",
          layers: [csvLayer]
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 11,
          center: [-90.1994, 38.6270] // longitude, latitude
        });
});  
