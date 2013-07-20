
# factory

  Better object factories.

## Installation

  Install with [component(1)](http://component.io):

    $ component install mikanda/factorify

## Usage

  ```js
  var factory = require('factorify');

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

### Factory#sequence(name, [prefix])

  Makes this attribute a sequence number.  Optional `prefix` is
  prepended to the number.

### Factory#attr(name, fn)

  Defines a new attribute for which the value is calculated using
  `fn`.

### Object([defs])

  Initialize new object.  `defs` is an optional map to override
  attributes.

  ```js
  var User = factory()
    .attr('name', function(){
      return 'my-name';
    });
  var user = new User({ name: 'my-other-name' });
  console.log(user.name)  // -> 'my-other-name'
  ```

## License

  MIT
