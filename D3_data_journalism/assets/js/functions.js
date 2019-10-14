// https://www.linkedin.com/learning/d3-js-essential-training-for-data-scientists/parsing-a-csv-file 
// Margin Convention | Mike Bostock |  https://bl.ocks.org/mbostock/3019563


function visualize(csvData) {
    let plotPointX = "poverty";
    let plotPointY = "healthcare";
    
    xAxisMin = d3.min(csvData, function(d) {
    return parseFloat(d[plotPointX]) ;
    });
    xAxisMax = d3.max(csvData, function(d) {
    return parseFloat(d[plotPointX]);
    });
           

    yAxisMin = d3.min(csvData, function(d) {
    return parseFloat(d[plotPointY]);
    });
    yAxisMax = d3.max(csvData, function(d) {
    return parseFloat(d[plotPointY]);
    });

               
    let xScale = d3
        .scaleLinear()
        .domain([xAxisMin, xAxisMax])
        .range([margin + labelArea, width - margin]);
        
    let yScale = d3
        .scaleLinear()
        .domain([yAxisMin, yAxisMax])
        .range([height - margin - labelArea, margin]);

    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale);
        

    svg
        .append("g")
        .call(xAxis)
        .attr("class", "xAxis")
        .attr("transform", "translate( 0," + (height - margin - labelArea) + ")");
    svg
        .append("g")
        .call(yAxis)
        .attr("class", "yAxis")
        .attr("transform", "translate(" + (margin + labelArea) + ", 0 )");


    let scatterPlotCircles = svg.selectAll("g scatterPlotCircles").data(csvData).enter();

    scatterPlotCircles
        .append("circle")
        .attr("cx", function(d) {
        return xScale(d[plotPointX]);
        })
        .attr("cy", function(d) {
        return yScale(d[plotPointY]);
        })
        .attr("r", circleRadius)
        .attr("class", function(d) {
        return "stateCircle " + d.abbr;
        });

    scatterPlotCircles
        .append("text")
        .text(function(d) {
        return d.abbr;
        })
        .attr("dx", function(d) {
        return xScale(d[plotPointX]);
        })
        .attr("dy", function(d) {
        return yScale(d[plotPointY]) + circleRadius / 2.5;
        })
        .attr("font-size", circleRadius)
        .attr("class", "stateText");



}