
/**
 * Module exports.
 */

/**
 * Register new generic attribute.
 *
 * @param {String} name the name of the attribute
 * @param {Function} fn the function to call to calculate the value
 */

exports.attr = function(name, fn){
  this.attrs[name] = fn;
  return this;
};

/**
 * Register sequence attribute.
 *
 * @param {String} name
 * @param {String} prefix
 */

exports.sequence = function(name, prefix){
  var Factory = this;
  this.attrs[name] = function(){
    var id = (prefix || '') + Factory.n;
    return id;
  };
  return this;
};
