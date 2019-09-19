<!-- the following part CREATES THE PIE CHART    -->
	// set the dimensions and margins of the graph
	var width = diameter
	height = diameter
	margin = 1

	// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
	var radius = Math.min(width, height) / 2 - margin

	// append the svg object to the div called 'fig_pie'
	var svg = d3.select("#fig_pie")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	// Create dummy data
	var counts = {};
	for (var i = 0; i < dataset.length; i++) {
		counts[dataset[i].taxonLabel] = 1 + (counts[dataset[i].taxonLabel] || 0);
	}


	var data = counts;

	// set the color scale
	var color = d3.scaleOrdinal(d3.schemeCategory20)

	// Compute the position of each group on the pie:
	var pie = d3.pie()
	.value(function(d) {return d.value; })
	var data_ready = pie(d3.entries(data))

	// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
	svg
	.selectAll('whatever')
	.data(data_ready)
	.enter()
	.append('path')
	.attr('d', d3.arc()
	.innerRadius(diameter/3)         // This is the size of the donut hole
	.outerRadius(radius)
	)
	.attr('fill', function(d){ return(color(d.data.key)) })
	.attr("stroke", "black")
	.style("stroke-width", "2px")
	.style("opacity", 0.7)