<!-- the following part STATES THE ANSWER    -->
	width = diameter/2;
	
	// append the svg object to the div called 'div_answer'
	var svg = d3.select("#div_answer")
		.append("svg")
		.attr("width", width)
		.attr("height", diameter/5)
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + (diameter/5) / 2 + ")");

	// Add text, the amount of nodes in the JSON object is compliant to the amount of human genes containing orthologs
	svg
		.append('text')
		.text(DataoutJSON.length)
		.style("text-anchor", "middle")
		.style("font-size", diameter/10)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  