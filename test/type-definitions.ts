/// <reference path="../lib/aws-arn-parser.d.ts" />

import arnParser from 'aws-arn-parser';

// Test valid usage.

const validArnString: string = 'arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/Bob';
const components: arnParser.Components = arnParser(validArnString);
console.log(components.arn);
console.log(components.aws);
console.log(components.service);
console.log(components.region);
console.log(components.namespace);
console.log(components.relativeId);

// Test invalid usage.

// $ExpectError
arnParser({ foo: 'bar ' });

// $ExpectError
arnParser(123);

// $ExpectError
arnParser(false);

// $ExpectError
arnParser(() => {});

// $ExpectError
console.log(components.foo);
