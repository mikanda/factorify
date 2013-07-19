
/**
 * Module dependencies.
 */

var object
  , proto = require('./lib/proto');

// check for environment

if (typeof window === 'undefined') {

  // load object module

  object = require('object-component');
} else {

  // load object component

  object = require('object');
}

// import merge symbol

var merge = object.merge;

/**
 * Module exports.
 */

module.exports = create;

/**
 * Create a new factory.
 */

function create() {

  // count instances

  var Factory;

  /**
   * Factory constructor.
   *
   * @api private
   */

  Factory = function(){
    var self = this;

    // increment instance count

    Object.keys(Factory.attrs).forEach(function(key){
      self[key] = Factory.attrs[key].call(self);
    });
    ++Factory.n;
  };
  merge(Factory, proto);
  Factory.n = 0;
  Factory.attrs = {};
  return Factory;
}
