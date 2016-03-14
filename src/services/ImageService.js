module.exports = function( ngModule ) {


  ngModule.factory( 'ImageService', [ 'apiUrl', '$resource', function( apiUrl, $resource ) {

   return $resource( apiUrl + '/Image/:id', {
     id: '@_id'
   }, {
     update: { method: 'PATCH' }
   });

  }]);

};
