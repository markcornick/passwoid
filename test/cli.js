// Copyright (c) 2015 Mark Cornick <mark@markcornick.com>
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED 'AS IS' AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.

/* eslint-env mocha */

'use strict';

var cli = require('../lib/cli');
var chai = require('chai');
var stream = require('mock-utf8-stream');

var testCli = function (options) {
  var stdout = new stream.MockWritableStream();
  stdout.startCapture();
  cli({
    argv: options.argv,
    stdout: stdout
  });
  // expect requested length + 1 (for the newline)
  chai.expect(stdout.capturedData.length).to.equal(options.length + 1);
};

describe('cli', function () {
  it('given no length, creates a password of default length', function () {
    testCli({
      argv: ['node', 'bin.js'],
      length: 16
    });
  });

  it('given a specific length, creates a password of that length', function () {
    testCli({
      argv: ['node', 'bin.js', 8],
      length: 8
    });
  });

  it('given a bogus length, creates a password of default length', function () {
    testCli({
      argv: ['node', 'bin.js', 'pants'],
      length: 16
    });
  });

  it('given a too-short length, throws an error', function () {
    chai.expect(function () {
      cli({
        argv: ['node', 'bin.js', 1],
        stdout: new stream.MockWritableStream()
      });
    }).to.throw('Cannot generate password of length 1');
  });
});
