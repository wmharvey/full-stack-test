const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require( '../app' );
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

chai.use(chaiHttp);

describe( 'capsules api', () => {

  var request;
  var imageId;

  before( function (done) {
    this.timeout(5000);
    mongoose.connection.open("mongodb://whitney:abc@ds015289.mlab.com:15289/full-stack-test", () => {
      done();
    });
  });

  beforeEach( () => {
    request = chai.request( app );
  });

  it( 'POST: adds an image', done => {
    request
      .post('/api/v1/Image')
      .send({caption: 'Cav', image: 'www.image.com'})
      .end( (err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body.caption).to.equal('Cav');
        imageId = res.body._id;
        done();
      });
  });

  it( 'GET: returns all images', done => {
    request
      .get('/api/v1/Image')
      .end( (err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.length.of.at.least(1);
        done();
      });
  });

  it( 'DELETE: deletes an image', function(done) {
    this.timeout(5000);
    request
      .delete('/api/v1/Image/' + imageId)
      .end( (err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(204);
        done();
      });
  });

  after( done => {
    mongoose.connection.close( () => {
      done();
    });
  });

});
