<!-- the following part CREATES THE BUBBLEGRAM    -->
	
	color = d3.scaleOrdinal(d3.schemeCategory20);

	bubble = d3.pack(dataset2)
	.size([diameter, diameter])
	.padding(1.5);
 
	svg = d3.select("#fig_bubble")
	.append("svg")
	.attr("width", diameter)
	.attr("height", diameter)
	.attr("class", "bubble");

	nodes = d3.hierarchy(dataset2)
	.sum(function(d) { return d.taxoncount; });

	node = svg.selectAll(".node")
	.data(bubble(nodes).descendants())
	.enter()
	.filter(function(d){
	return  !d.children
	})
	.append("g")
	.attr("class", "node")
	.attr("transform", function(d) {
	return "translate(" + d.x + "," + d.y + ")";
	});

	node.append("title")
	.text(function(d) {
	return d.genesLabel + ": " + d.taxoncount;
	});

	node.append("circle")
	.attr("r", function(d) {
	return d.r;
	})
	.style("fill", function(d,i) {
	return color(i);
	});

	node.append("text")
	.attr("dy", ".2em")
	.style("text-anchor", "middle")
	.text(function(d) {
	return d.data.genesLabel.substring(0, d.r / 3);
	})
	.attr("font-family", "sans-serif")
	.attr("font-size", function(d){
	return d.r/5;
	})
	.attr("fill", "white");

	node.append("text")
	.attr("dy", "1.3em")
	.style("text-anchor", "middle")
	.text(function(d) {
	return d.data.taxoncount;
	})
	.attr("font-family",  "Gill Sans", "Gill Sans MT")
	.attr("font-size", function(d){
	return d.r/5;
	})
	.attr("fill", "white");

	d3.select(self.frameElement)
	.style("height", diameter + "px");


