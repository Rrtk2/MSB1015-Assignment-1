//Current
<!-- the following query tries to return a list of different human genes with taxon counts ( https://query.wikidata.org/ ) -->

// Results: gene, amount of found in other taxons (figure 2)
query = `SELECT ?genesLabel (COUNT (?genes) AS ?taxoncount) WHERE{
?genes wdt:P31 wd:Q7187 .
?genes wdt:P703 wd:Q15978631 .
?genes wdt:P684 ?orth .
?orth  wdt:P703 ?taxon .
SERVICE wikibase:label { bd:serviceParam wikibase:language 'en' }
}
GROUP BY ?taxoncount ?genesLabel
LIMIT 110`

// Results: found taxon per human gene (figure 1)
query2 = `SELECT ?taxonLabel WHERE{
?genes wdt:P31 wd:Q7187 .
?genes wdt:P703 wd:Q15978631 .
?genes wdt:P684 ?orth .
?orth  wdt:P703 ?taxon .
SERVICE wikibase:label { bd:serviceParam wikibase:language 'en' }
}
LIMIT 110`

// Note: i know it is possible to merge these queries, but my javascript object handling isnt good enough to extract conditional elements at this moment.