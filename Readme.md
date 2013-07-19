
# factory

  Better object factories.

## Installation

  Install with [component(1)](http://component.io):

    $ component install mikanda/factory

## Usage

  ```js
  var factory = require('factory');

  // build factory

  var User = factory()
    .sequence('seq', 'id-')
    .attr('name', function(){
      return randomName();
    });

  // build object using factory

  var object = new User();
  console.log(object.name);  // -> 'generated random name'
  ```

## API

### Factory#sequence(name, prefix)

  Makes this attribute a sequence number.

### Factory#attr(name, fn)

  Defines a new attribute for which the value is calculated using
  `fn`.

### Static

#### Factory(attrs)

  Predefined attrs.  Will skip the generators for them.

#### Factory#list(n)

  Build an array of `n` objects.

## License

  MIT
