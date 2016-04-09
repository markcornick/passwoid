# passwoid [![Build Status][1]][3] [![Coverage Status][2]][4]

> A reasonably secure password generator

passwoid generates reasonably secure passwords. That's it; that's all it does.

The passwords generated by passwoid are strings of random characters. Passwords
are chosen from the set of all upper-case letters except I and O, all lower-case
letters except l, and the digits 2 through 9. 0 and O are not used to avoid
confusion with each other when passwords are displayed in sans-serif fonts. I,
l, and 1 are not used for the same reason. Passwords are guaranteed to contain
at least one upper-case letter, one lower-case letter, and one number.

The default length is 16. The minimum length is 3, because a shorter password
would not satisfy the requirement to use all three classes of characters.
passwoid will create a password of any length of 3 or greater, and guarantees
that passwords will not repeat any characters if the requested length is 57 or
less.

## Installation

```bash
# for programmatic usage
npm install --save passwoid
# for command-line usage
npm install --global passwoid
```

## Programmatic Usage

```js
var passwoid = require('passwoid');

passwoid();  // returns a password of the default length (16)
passwoid(8); // returns a password of length 8
passwoid(1); // throws Error: Cannot generate password of length 1
```

## Command-Line Usage

```bash
$ passwoid
h6ECtbDZPnRddHV7
$ passwoid 8
XdWod8f8
$ passwoid 1
/usr/local/lib/node_modules/passwoid/lib/passwoid.js:51
    throw new Error('Cannot generate password of length ' + length);
    ^
Error: Cannot generate password of length 1
[...]
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
[https://github.com/markcornick/passwoid][5]. This project is intended to be a
safe, welcoming space for collaboration, and contributors are expected to adhere
to the [Contributor Covenant][6] code of conduct.

## License

passwoid is available as open source under the terms of the [Apache License][7]
version 2.0.

[1]: https://travis-ci.org/markcornick/passwoid.svg

[2]: https://coveralls.io/repos/github/markcornick/passwoid/badge.svg?branch=master

[3]: https://travis-ci.org/markcornick/passwoid

[4]: https://coveralls.io/github/markcornick/passwoid?branch=master

[5]: https://github.com/markcornick/passwoid

[6]: http://contributor-covenant.org

[7]: http://www.apache.org/licenses/LICENSE-2.0
