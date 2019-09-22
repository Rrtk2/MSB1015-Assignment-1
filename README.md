# MSB1015-Assignment-1

[![GitHub License](https://img.shields.io/github/license/Rrtk2/MSB1015-Assignment-1)](https://github.com/Rrtk2/MSB1015-Assignment-1/blob/master/LICENSE.md) ![](https://img.shields.io/badge/Status-Final-green) [![GitHub Watches](https://img.shields.io/github/watchers/Rrtk2/MSB1015-Assignment-1.svg?style=social&label=Watch&maxAge=2592000)](https://github.com/Rrtk2/MSB1015-Assignment-1/watchers) 


#### What is this project about
This repository is the final product of assignment 1, requested by the course MSB1015 (Scientific Programming). The goal is to create a repository which contains all information, documentation and files needed to run a wikidata query using html/javascript as a new user.


#### Usage
To use the WikiData query tool, download the repository and run the 'Index.html' file within the Query folder. This runs the tool using the custom WikiData query which can be altered in 'Query-call.js'. The produced images are specific to the query call, when changing the call make sure to change 'Query-pie.js', 'Query-bubble.js' and 'Query-main.js' accordingly. 


#### Expected output
Using the default settings the output should be very similar to 'WikiData query.html' in the 'Expected output' folder.  Download all the files in the folder to open the page correctly.


#### Project structure
##### Where does data come from?
The query asks information from [Wikidata](http://wikidata.org) in a similar fasion the dedicated [Wikidata database query](https://query.wikidata.org/) works using the SPARQL language. Data on wikidata is published under the [Creative Commons Zero](https://creativecommons.org/share-your-work/public-domain/cc0) licence, stating 'others may freely build upon, enhance and reuse the works for any purposes without restriction under copyright or database law'.

##### How is data shared, in what format, with what protocols?
Using the tool developed in this project, data is shared using the [wikidata-sdk](https://www.wikidata.org/w/api.php). 

##### How is data processed and analyzed?
The resulted [JSON](https://www.json.org/) data is used to produce several images using the [D3 JavaScript library for visualizing](https://d3js.org/). 

##### In what order do the processing and analysis steps take place?
Query -> JSON output -> D3 visualisation.

#### Contact
ra.reijnders@student.maastrichtuniversity.nl


#### License and contributing guidelines
[License](/LICENSE.md) 

[Contributing guidelines](/CONTRIBUTING.md) 


#### Who is involved, and what are their roles.
RRtK2 (owner and contributor)


#### Status of project
Final


#### Copyright and authors
All code and documents in the MSB1015-Assignment-1 folder was created by [these author(s)](/AUTHORS.md).
