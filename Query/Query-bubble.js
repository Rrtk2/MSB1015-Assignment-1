<!-- the following part CREATES THE BUBBLEGRAM    -->
	// only select the nodes which contain at least 7 othologs (to make image more appealing)
	var counts = 0;
	var dataFilter = [];
	dataFilter.children = {};
	for (var i = 0; i < DataoutJSON.length; i++) {
		if (DataoutJSON[i].taxoncount > 6){
			dataFilter[counts] = DataoutJSON[i]
			counts = counts+1
		};
	}	
	
	// Make data object which is used in bubble image
	dataset2 = [];
	
	// Mapping the gene names and amount of taxons to dataset2.children
	dataset2.children = dataFilter.map( function(d) { return { "genesLabel": d.genesLabel, "taxoncount":d.taxoncount}});

	// Set color palette
	color = d3.scaleOrdinal(d3.schemeCategory20);

	// Create backbone for bubble image
	bubble = d3.pack(dataset2)
		.size([diameter, diameter])
		.padding(1.5);

	// Set dimensions and type for bubble image
	svg = d3.select("#fig_bubble")
		.append("svg")
		.attr("width", diameter)
		.attr("height", diameter)
		.attr("class", "bubble");

	// Get structure of data to be processed into bubbles
	nodes = d3.hierarchy(dataset2)
		.sum(function(d) { return d.taxoncount; });
		
	//nodes.children[1].data.taxoncount

	// for each node make a bubble with information in d.children (which contains genes and counts)
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

	// Set title of bubble
	node.append("title")
		.text(function(d) {
			return d.genesLabel + ": " + d.taxoncount;
		});

	// Make actual bubble and color it
	node.append("circle")
		.attr("r", function(d) {
			return d.r;
		})
		.style("fill", function(d,i) {
			return color(i);
		});

	// add text to bubble; gene name
	node.append("text")
		.attr("dy", ".2em")
		.style("text-anchor", "middle")
		.text(function(d) {
			return d.data.genesLabel.substring(0, d.r/3);
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", function(d){
			return d.r/3;
		})
		.attr("fill", "white");

	// add text to bubble; count amount
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

	// D3 styling
	d3.select(self.frameElement)
		.style("height", diameter + "px");


	
