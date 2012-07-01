var test = require('tap').test;
var awsParser;
var validArnString = 'arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/Bob';

test('load parser', function (t){
	awsParser = require('../lib/aws-arn-parser');
	t.type(awsParser, 'function', "parser loaded");
	t.end();
});

test('Parse valid string', function (t){

	arnObj = awsParser(validArnString);
	console.log(arnObj);
	t.equal(arnObj.service, 'iam');
	t.equal(arnObj.region, '');
	t.equal(arnObj.namespace, '123456789012');
	t.equal(arnObj.relativeId, 'user/division_abc/subdivision_xyz/Bob');

	t.end();

});
