const angular = require('angular');
const router = require('angular-ui-router');
const ngResource = require('angular-resource');

const services = require('../services');

const app = angular.module( 'myApp', [
  router, ngResource, services
]);

module.exports = app;
