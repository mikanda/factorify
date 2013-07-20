
/**
 * Module dependencies.
 */

var chai = require('chai')
  , should = chai.should();
var factory;
if (typeof window === 'undefined') {
  factory = require('..');
} else {
  factory = require('factorify');
}

/**
 * Tests.
 */

describe('Factory', function(){
  it('should define two distinct factories', function(){
    var User = factory()
      .attr('name', function(){
        return 'Edward';
      });
    var Provider = factory()
      .sequence('seq', 'id-')
      .attr('id', function(){
        return 'provider-id';
      });
    var user = new User();
    var provider1 = new Provider();
    user.name.should.equal('Edward');
    User.n.should.equal(1);

    // make sure that no properties are shared

    should.not.exist(provider1.name);
    should.not.exist(user.id);
    Provider.n.should.equal(1);
    var provider2 = new Provider({ id: 'my-id' });
    Provider.n.should.equal(2);
    provider2.id.should.equal('my-id');

    // test if sequence count works

    provider1.seq.should.equal('id-0');
    provider2.seq.should.equal('id-1');
  });
});
