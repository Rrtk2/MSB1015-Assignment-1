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

	// convert dataset to extract counts of taxons
	var counts = {};
	for (var i = 0; i < dataset.length; i++) {
		counts[dataset[i].taxonLabel] = 1 + (counts[dataset[i].taxonLabel] || 0);
	}

	// Count total of orthologs
	var data = counts;
	var countssplit = d3.entries(data);
	var total = 0;
	for (var i = 0; i < countssplit.length; i++) {
		total = total + countssplit[i].value;
	}


	// set the color palette
	var color = d3.scaleOrdinal(d3.schemeCategory20)

	// Compute the position of each group on the pie:
	var pie = d3.pie()
		.value(function(d) {return d.value; })
	var data_ready = pie(d3.entries(data))


	// shape helper to build arcs:
	var arcGenerator = d3.arc()
		.innerRadius(diameter/3)
		.outerRadius(diameter/2)
		
	// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
	svg
		.selectAll('mySlices')
		.data(data_ready)
		.enter()
		.append('path')
		.attr('d', arcGenerator)
		.attr('fill', function(d){ return(color(d.data.key)) })
		.attr("stroke", "black")
		.style("stroke-width", "2px")
		.style("opacity", 0.7)

	// Now add the annotation; ortholog names on pie with counts
	svg
		.selectAll('mySlices')
		.data(data_ready)
		.enter()
		.append('text')
		.text(function(d){ return d.data.key +": "+ d.data.value})
		.attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
		.style("text-anchor", "middle")
		.style("font-size", diameter/40)


	// Now add the annotation; total amount of orthologs
	svg
		.append('text')
		.text(total)
		.style("text-anchor", "middle")
		.style("font-size", diameter/10)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  