const angular = require('angular');
const app = require('./js/app-module');

const template = require('./template.html');
const homeTemplate = require('./home.html');

const mainCSS = require('./css/main.css');

app.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/images');

  $stateProvider
    .state( 'home', {
      url: '/images',
      template: homeTemplate,
      resolve: {
        images ( ImageService ) {
          return ImageService.query().$promise;
        }
      },
      controller: function( $scope, images, ImageService ) {
        $scope.images = images;
        $scope.addImage = function() {
          ImageService.save({}, {caption: $scope.new.caption, image: $scope.new.url})
            .$promise.then( function(img) {
              $scope.images.push(img);
            });
        };
      }
    });
});

app.run(function($rootScope, $state) {

});

document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {} );
