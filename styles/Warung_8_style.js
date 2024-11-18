var size = 0;
var placement = 'point';

var style_Warung_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("WarungMkn") !== null) {
        labelText = String(feature.get("WarungMkn"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 580.457],
                  scale: 0.03620708382974395,
                  anchor: [10, 10],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=restaurant.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
