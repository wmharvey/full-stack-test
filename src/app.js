const angular = require('angular');
const app = require('./js/app-module');

const template = require('./template.html');
const homeTemplate = require('./home.html');

// const mainCSS = require('./css/main.css');

app.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state( 'home', {
      url: '/images',
      template: homeTemplate,
      resolve: {
        images ( ImageService ) {
          return ImageService.query().$promise;
        }
      },
      controller: function( $scope, images ) {
        $scope.images = images;
      }
    });
});

document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {} );
