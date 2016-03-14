const angular = require('angular');
const ImageService = require('./ImageService');

const services = angular.module( 'services', [] );
services.constant( 'apiUrl', 'http://localhost:8000/api/v1' );

ImageService( services );

module.exports = services.name;
