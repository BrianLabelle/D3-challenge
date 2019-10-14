// https://www.linkedin.com/learning/d3-js-essential-training-for-data-scientists/ 

let width = 800;
let height = 600;
let margin = 40;
let labelArea = 100;
let chartPaddingBottom = 30;
let chartPaddingLeft = 30;
let circleRadius = 10;
let xAxisTextPositionX = 425;
let xAxisTextPositionY = 520;
let yAxisTextPositionX = 70;
let yAxisTextPositionY = 250;

let svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

  svg.append("g").attr("class", "xAxisText");
  let xAxisText = d3.select(".xAxisText");

xAxisText
    .attr("transform","translate(" + xAxisTextPositionX + ", " + xAxisTextPositionY +")")
    .append("text")
    .text("In Poverty (%)")
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class", "aText active x");

svg.append("g").attr("class", "yAxisText");
let yAxisText = d3.select(".yAxisText");

yAxisText
    .attr("transform","translate(" + yAxisTextPositionX + ", " + yAxisTextPositionY + ")rotate(-90)")
    .append("text")    
    .text("Lacks Healthcare (%)")
    .attr("data-name", "healthcare")
    .attr("data-axis", "y")
    .attr("class", "aText active y");

/*https://www.linkedin.com/learning/d3-js-essential-training-for-data-scientists/parsing-a-csv-file */
// Data Handler
d3.csv("assets/data/data.csv").then(function(data) {
  visualize(data);
});

