# COOKBOOK

Following is a list of Elasticsearch recipes for developers. Please set your [Elasticsearch client](https://www.elastic.co/guide/en/elasticsearch/client/index.html) to use `6.0`. If your query yields a warning or an error, please verify it's in the [list of supported operations](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-es-operations.html#es_version_6_0).

## Search queries

General information on the topic could be found in the [reference documentation](https://www.elastic.co/guide/en/elasticsearch/reference/6.0/query-dsl.html).

Examples:

* [Geo Query - Bounding box](./search/geo-query-bounding-box.md)

## Aggregations

General information on the topic could be found in the [reference documentation](https://www.elastic.co/guide/en/elasticsearch/reference/6.0/search-aggregations.html).

Examples:

* [Aggregate projects per field and limit results](./aggregation/projects-by-field-with-limit.md)
* [Aggregate projects per field with second aggregation](./aggregation/projects-by-field-with-second-aggregation-on-buckets.md)
* [Aggregate projects by location (Geohash Grid Aggregation)](./aggregation/projects-aggregation-by-location-geohash.md)
* [Aggregate projects by location (Geo Centroid Aggregation)](./aggregation/projects-aggregation-by-location-centroid.md)