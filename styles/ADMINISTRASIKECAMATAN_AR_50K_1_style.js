var size = 0;
var placement = "point";
function categories_ADMINISTRASIKECAMATAN_AR_50K_1(
  feature,
  value,
  size,
  resolution,
  labelText,
  labelFont,
  labelFill,
  bufferColor,
  bufferWidth,
  placement
) {
  var valueStr =
    value !== null && value !== undefined ? value.toString() : "default";
  switch (valueStr) {
    case "Banggae Timur":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(177,78,204,1.0)" }),
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Sendana":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(0,255,0,0.8)" }), // hijau
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Malunda":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(0,128,255,0.8)" }), // biru langit
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Ulumanda":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({ color: "rgba(0,0,0,1.0)", width: 1 }),
          fill: new ol.style.Fill({ color: "rgba(144,238,144,0.7)" }), // hijau muda
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Tammerodo Sendana":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({ color: "rgba(0,0,0,1.0)", width: 1 }),
          fill: new ol.style.Fill({ color: "rgba(255,165,0,0.7)" }), // oranye
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Pamboang":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({ color: "rgba(0,0,0,1.0)", width: 1 }),
          fill: new ol.style.Fill({ color: "rgba(255,99,71,0.7)" }), // merah tomat
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Banggae":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({ color: "rgba(0,0,0,1.0)", width: 1 }),
          fill: new ol.style.Fill({ color: "rgba(0,191,255,0.7)" }), // biru langit
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    default:
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(125,239,214,1.0)" }),
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
  }
}

var style_ADMINISTRASIKECAMATAN_AR_50K_1 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };

  var labelText = "";
  var value = feature.get("NAMOBJ");
  var labelFont = "13.0px 'Open Sans', sans-serif";
  var labelFill = "#323232";
  var bufferColor = "";
  var bufferWidth = 0;
  var textAlign = "left";
  var offsetX = 0;
  var offsetY = 0;
  var placement = "point";
  if (feature.get("NAMOBJ") !== null) {
    labelText = String(feature.get("NAMOBJ"));
  }

  var style = categories_ADMINISTRASIKECAMATAN_AR_50K_1(
    feature,
    value,
    size,
    resolution,
    labelText,
    labelFont,
    labelFill,
    bufferColor,
    bufferWidth,
    placement
  );

  return style;
};
