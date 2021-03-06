const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const yaml = require('js-yaml');
const appRoot = require('app-root-path');
const api = require('./handler').internalApi;

describe('Testing Swagger', () => {
  it('Updating Swagger File with API definitions.', (done) => {
    const file = path.join(appRoot.path, 'test', 'resources', 'swagger.yml');
    Promise.resolve(fs.readFileSync(file))
      .then(yaml.safeLoad)
      .then(api.generateSwagger)
      .then(swagger => yaml.dump(swagger))
      .then(swagger => fs.writeFileSync(file, swagger))
      .then(done)
      .catch(done.fail);
  });

  it('Testing serverless.yml', () => {
    expect(api.generateDifference(
      path.join(appRoot.path, 'test', 'resources', 'swagger.yml'),
      path.join(appRoot.path, 'test', 'resources', 'serverless.yml')
    )).to.deep.equal([]);
  });

  it('Testing Empty Compare', () => {
    expect(JSON.stringify(api.generateSwagger())).to.equal('{}');
  });

  it('Testing Unexpected Swagger Endpoint', () => {
    expect(() => api.generateSwagger({ paths: { '/path': { GET: {} } } }))
      .to.throw('Unexpected swagger endpoint(s) detected: paths./path.GET');
  });
});
