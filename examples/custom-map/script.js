const width = 900;
const height = 600;

const svg = d3.select("#map")
  .append("svg")
  .attr("viewBox", [0, 0, width, height])
  .attr("role", "img")
  .attr("aria-labelledby", "mapTitle mapDescription");

svg.append("title")
  .attr("id", "mapTitle")
  .text("Iowa landform regions");

svg.append("desc")
  .attr("id", "mapDescription")
  .text("A map of Iowa landform lobes with custom point, line, and polygon features.");

const iowaLayer = svg.append("g").attr("class", "iowa-layer");
const lobeLayer = svg.append("g").attr("class", "lobe-layer");
const customLayer = svg.append("g").attr("class", "custom-layer");

const tooltip = d3.select("#tooltip");

function tooltipText(feature) {
  return feature.properties.tooltip ||
    feature.properties.LANDFORM_R ||
    feature.properties.name ||
    "No description available";
}

function showTooltip(event, feature) {
  tooltip
    .text(tooltipText(feature))
    .classed("is-visible", true);

  moveTooltip(event);
}

function moveTooltip(event) {
  tooltip
    .style("left", `${event.clientX + 14}px`)
    .style("top", `${event.clientY + 14}px`);
}

function showFocusedTooltip(feature) {
  tooltip
    .text(tooltipText(feature))
    .classed("is-visible", true)
    .style("left", "1rem")
    .style("top", "1rem");
}

function hideTooltip() {
  tooltip.classed("is-visible", false);
}

Promise.all([
  d3.json("data/iowa.geojson"),
  d3.json("data/lobes.geojson"),
  d3.json("data/custom-features.geojson")
])
  .then(([iowa, lobes, customFeatures]) => {
    drawMap(iowa, lobes, customFeatures);
  })
  .catch(error => {
    console.error("Map data failed to load:", error);
    d3.select("#map").append("p")
      .text("The map data could not be loaded.");
  });

  function slugify(value = "") {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function fixWinding(geojson) {
  geojson.features.forEach(feature => {
    const type = feature.geometry?.type;

    if ((type === "Polygon" || type === "MultiPolygon") &&
        d3.geoArea(feature) > 2 * Math.PI) {

      if (type === "Polygon") {
        feature.geometry.coordinates.forEach(ring => ring.reverse());
      } else {
        feature.geometry.coordinates.forEach(polygon => {
          polygon.forEach(ring => ring.reverse());
        });
      }
    }
  });

  return geojson;
}

function drawMap(iowa, lobes, customFeatures) {
  
    iowa = fixWinding(iowa);
    lobes = fixWinding(lobes);
    customFeatures = fixWinding(customFeatures);
  
    const projection = d3.geoAlbersUsa()
    .fitExtent([[30, 30], [width - 30, height - 30]], iowa);

  const path = d3.geoPath(projection).pointRadius(7);



  iowaLayer.selectAll("path")
    .data(iowa.features)
    .join("path")
    .attr("class", "iowa")
    .attr("d", path);

  lobeLayer.selectAll("path")
    .data(lobes.features)
    .join("path")
    .attr("class", d => {
      const name = d.properties.LANDFORM_R || d.properties.name || "lobe";
      return `lobe ${slugify(name)}`;
    })
    .attr("d", path)
    .attr("tabindex", 0);

  customLayer.selectAll("path")
    .data(customFeatures.features)
    .join("path")
    .attr("class", d => {
      const type = d.geometry.type;
      if (type === "Point" || type === "MultiPoint") return "custom-point";
      if (type === "LineString" || type === "MultiLineString") return "custom-line";
      return "custom-polygon";
    })
    .attr("d", path)
    .attr("tabindex", 0);

    function addTooltipEvents(selection) {
        selection
            .on("pointerenter", showTooltip)
            .on("pointermove", moveTooltip)
            .on("pointerleave", hideTooltip)
            .on("focus", (event, feature) => showFocusedTooltip(feature))
            .on("blur", hideTooltip);
        }

        addTooltipEvents(lobeLayer.selectAll("path"));
        addTooltipEvents(customLayer.selectAll("path"));

}

d3.select("#featureToggle").on("change", function() {
  const isHidden = !this.checked;

  customLayer
    .classed("is-hidden", isHidden)
    .attr("aria-hidden", String(isHidden));
});

d3.select("#lobeToggle").on("change", function() {
  const isHidden = !this.checked;

  lobeLayer
    .classed("is-hidden", isHidden)
    .attr("aria-hidden", String(isHidden));
});


