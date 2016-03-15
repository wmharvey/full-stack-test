describe('MyApp', function() {

  describe('adding an image', function() {

    beforeAll( function() {
      browser.get('/#/images');
      element.all(by.repeater('image in images')).count().then( count => {
        this.count = count;
      });
    });

    it('should add an image', function() {
      element(by.model('new.url')).sendKeys('www.image.com');
      element(by.model('new.caption')).sendKeys('Cav');
      $('#add-button').click();
      element.all(by.repeater('image in images')).count().then( count => {
        expect(count).toEqual(this.count + 1);
      });
    });

  });

});
