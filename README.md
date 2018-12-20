# lunch-location-finder

Return custom entry of `config/location.js` e.g. to find the right location for lunch.

## install
`npm i lunch-location-finder`

## Customize
Change in `config/location.js` the configuration to your needs.

Returned object has two keys:
`name` - String - e.g. name of restaurant
`info` - Callback - if defined this can be executed e.g. to crawl the menu of webpage from the restaurant
