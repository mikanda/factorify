
/**
 * Module exports.
 */

/**
 * Register new generic attribute.
 */

exports.attr = function(name, fn){
  this.attrs[name] = fn;
  return this;
};

/**
 * Register sequence attribute.
 */

exports.sequence = function(name, prefix){
  var Factory = this;
  this.attrs[name] = function(){
    var id = (prefix || '') + Factory.n;
    return id;
  };
  return this;
};
