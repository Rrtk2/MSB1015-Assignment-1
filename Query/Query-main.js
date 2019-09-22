<!-- SETTINGS  -->
	diameter = 1000;

<!-- FUNCTIONS  -->
	// Function to call scripts within script using: loadScript('path',function() {});
	function loadScript( url, callback ) {
	  var script = document.createElement( "script" )
	  script.type = "text/javascript";
	  if(script.readyState) {  // only required for IE <9
		script.onreadystatechange = function() {
		  if ( script.readyState === "loaded" || script.readyState === "complete" ) {
			script.onreadystatechange = null;
			callback();
		  }
		};
	  } else {  //Others
		script.onload = function() {
		  callback();
		};
	  }

	  script.src = url;
	  document.getElementsByTagName( "head" )[0].appendChild( script );
	}

<!-- MAIN  -->
	// the following part gets information from wikidata using query call: query2
	fetch(
	wdk.sparqlQuery(query2)
	).then( response => response.json()
	).then( wdk.simplify.sparqlResults
	).then(
		function (response) {
				// Convert data
				dataset = response;
					
				// Pie image
				loadScript('Query-pie.js', function() {});
		}
	)
	// the following part gets information from wikidata using query call: query
	fetch(
	wdk.sparqlQuery(query)
	).then( response => response.json()
	).then( wdk.simplify.sparqlResults
	).then(
		function (response) {
				// document.getElementById('output').innerHTML = JSON.stringify(response, undefined, 2);  // unused, just prompts JSON output to screen.				
				// Convert data
				DataoutJSON = response;
				// DataoutSTRING = JSON.stringify(response, undefined, 2);  // unused, the opbject is directly used, no need to convert to string.

				// Answer script 
				loadScript('Query-answer.js', function() {});		
				
				// Bubble
				loadScript('Query-bubble.js', function() {});
		}
	)
<!--  END OF SCRIPT  -->


