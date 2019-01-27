# arn

Parser for [Amazon Resource Name](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) strings. 

_Single file and dependency free_

[![Build Status](https://travis-ci.com/sandfox/aws-arn-parser.svg?branch=master)](https://travis-ci.com/sandfox/aws-arn-parser)



Does what it says on the tin! Parsers an Amazon Resource Name and gives it back as object.
Losely based upon the aws golang [implementation](https://github.com/aws/aws-sdk-go/blob/master/aws/arn/arn.go)

## install

With [npm](http://npmjs.org) do:

```
npm install @sandfox/arn
```

## api

__parse__ : Parse parses an ARN into its constituent parts. Empty sections in the ARN are represented by empty strings.

```js
const { parse } = require('@sandfox/arn');
const arn = parse("arn:aws:iam::123456789012:server-certificate/division_abc/subdivision_xyz/ProdServerCert");
```

output:
```js
{ 
  partition: 'aws',
  service: 'iam',
  region: '',
  accountID: '123456789012',
  resource: 'server-certificate/division_abc/subdivision_xyz/ProdServerCert' 
}
```

Fields:
 - `partition`: The partition that the resource is in. For standard AWS regions, the partition is "aws". If you have resources in other partitions, the partition is "aws-partitionname". For example, the partition for resources in the China (Beijing) region is "aws-cn".
 - `service`: The service namespace that identifies the AWS product (for example, Amazon S3, IAM, or Amazon RDS). For a list of namespaces, see http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces.
 - `region`: The region the resource resides in. Note that the ARNs for some resources do not require a region, so this component might be omitted.
 - `accountID`: The ID of the AWS account that owns the resource, without the hyphens. For example, 123456789012. Note that the ARNs for some resources don't require an account number, so this component might be omitted.
 - `resource`: The content of this part of the ARN varies by service. It often includes an indicator of the type of resource — for example, an IAM user or Amazon RDS database - followed by a slash (/) or a colon (:), followed by the resource name itself. Some services allows paths for resource names, as described in http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arns-paths.



__toString__ : Returns the canonical representation of an ARN in object form as returned by `parse`. Any missing sections will be truncated.

```js
const { toString } = require('@sandfox/arn');
const arn = { 
  partition: 'aws',
  service: 'iam',
  accountID: '123456789012',
  resource: 'server-certificate/division_abc/subdivision_xyz/ProdServerCert' 
}

console.log(toString(arn))
```

output
```js
'arn::aws:iam::123456789012:server-certificate/division_abc/subdivision_xyz/ProdServerCert'
```


## license

MIT
