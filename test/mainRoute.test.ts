import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

  it('should be json', () => {
    chai.request(app).get('/')
    .then(res => {
      return expect(res).to.be('json');
    });
  });

  it('should have a message prop', () => {
    chai.request(app).get('/')
    .then(res => {
      return expect(res).to.have.property('message');
    });
  });
});
