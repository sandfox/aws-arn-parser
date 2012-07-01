aws-arn-parser
==============

Does what it says on the tin! Parsers an Amazon Resource Name and
gives it back as object. 
NOTE: this module is in early days, at some point later I might make it actually
validate and normalize the returned object, or completely change how it works

example
=======

thing.js

``` js
var parser = require('aws-arn-parser');
var myAwsString = "arn:aws:iam::123456789012:server-certificate/division_abc/subdivision_xyz/ProdServerCert";

var arn = parser(myAwsString);

console.log(arn);

```

and when we run it
```
$ node thing.js
{ arn: 'arn',
  aws: 'aws',
  service: 'iam',
  region: '',
  namespace: '123456789012',
  relativeId: 'server-certificate/division_abc/subdivision_xyz/ProdServerCert' }
```

install
=======

With [npm](http://npmjs.org) do:

```
npm install aws-arn-parser
```

license
=======

MIT

[![Build Status](https://secure.travis-ci.org/sandfox/aws-arn-parser.png?branch=master)](http://travis-ci.org/[sandfox]/[aws-arn-parser])