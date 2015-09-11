# powm

[![npm version](https://img.shields.io/npm/v/powm.svg?style=flat-square)](https://www.npmjs.com/package/powm)
[![Build Status](https://img.shields.io/travis/markcornick/powm.svg?style=flat-square)](https://travis-ci.org/markcornick/powm)
[![Coverage Status](https://img.shields.io/coveralls/markcornick/powm.svg?style=flat-square)](https://coveralls.io/github/markcornick/powm)
[![Code Climate](https://img.shields.io/codeclimate/github/markcornick/powm.svg?style=flat-square)](https://codeclimate.com/github/markcornick/powm)
[![Dependency Status](https://img.shields.io/david/markcornick/powm.svg?style=flat-square)](https://david-dm.org/markcornick/powm)
[![devDependency Status](https://img.shields.io/david/dev/markcornick/powm.svg?style=flat-square)](https://david-dm.org/markcornick/powm#info=devDependencies)
[![ISC License](https://img.shields.io/github/license/markcornick/powm.svg?style=flat-square)](https://github.com/markcornick/powm/blob/master/LICENSE)

powm generates reasonably secure passwords. That's it; that's all it does.

The passwords generated by powm are strings of random characters. Passwords are
chosen from the set of all upper-case letters except I and O, all lower-case
letters except l, and the digits 2 through 9. 0 and O are not used to avoid
confusion with each other when passwords are displayed in sans-serif fonts. I,
l, and 1 are not used for the same reason. Passwords are guaranteed to contain
at least one upper-case letter, one lower-case letter, and one number.

The default length is 16. The minimum length is 3, because a shorter password
would not satisfy the requirement to use all three classes of characters.

Prior to version 2.0.0, powm guaranteed that passwords would not repeat any
characters, and enforced a maximum length of 57, because a longer password would
not satisfy this requirement. Starting with version 2.0.0, powm will create
a password of any length of 3 or greater, and guarantees that passwords will not
repeat any characters if the requested length is 57 or less.

powm is based on [pwm](https://github.com/markcornick/pwm), my Ruby
implementation of a similar concept. powm differs from pwm in that powm enforces
the no-repeated-characters requirement, but pwm does not. (The name change is
because "pwm" was already taken as a package name on npm.)

## Installation

powm can be used either as a command-line utility, or programmatically from your
own code.

```bash
npm install --global powm # for command-line usage
npm install --save powm   # for programmatic usage
```

## Command-Line Usage

```bash
$ powm
h6ECtbDZPnRddHV7
$ powm 8
XdWod8f8
$ powm 1
/usr/local/lib/node_modules/powm/lib/powm.js:45
    throw new Error('Cannot generate password of length ' + length);
          ^
Error: Cannot generate password of length 1
[...]
```

## Programmatic Usage

```js
var powm = require('powm');

powm();  // returns a password of the default length (16)
powm(8); // returns a password of length 8
powm(1); // throws Error: Cannot generate password of length 1
```
