<!-- SETTINGS  -->
	diameter = 1000;

<!-- FUNCTIONS  -->
	<!-- Function to call scripts within script using: loadScript('path',function() {});  -->
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
	<!-- the following part gets information from wikidata using the QUERY   -->
	fetch(
	wdk.sparqlQuery(query2)
	).then( response => response.json()
	).then( wdk.simplify.sparqlResults
	).then(
		function (response) {
				// Convert data
				dataset = response;
						
				// Pie
				loadScript('Query-pie.js', function() {});

			<!--  END  -->	
		}
	)

	fetch(
	wdk.sparqlQuery(query)
	).then( response => response.json()
	).then( wdk.simplify.sparqlResults
	).then(
		function (response) {
				// Convert data
				// document.getElementById('output').innerHTML = JSON.stringify(response, undefined, 2);  // unused
				DataoutJSON = response;
				DataoutSTRING = JSON.stringify(response, undefined, 2);
				dataset2 = [];
				dataset2.children = DataoutJSON.map( function(d) { return { "genesLabel": d.genesLabel, "taxoncount":d.taxoncount}});
				
				// Bubble
				loadScript('Query-bubble.js', function() {});
				

			<!--  END  -->	
		}
	)


