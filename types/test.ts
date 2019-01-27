import * as arn from '@sandfox/arn';

//
// parse()
//
{
    // Test valid usage.

    const text = 'arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/Bob';
    const sections = arn.parse(text); // $ExpectType Sections

    sections.partition; // $ExpectType string
    sections.service; // $ExpectType string
    sections.region; // $ExpectType string
    sections.accountID; // $ExpectType string
    sections.resource; // $ExpectType string

    // Test invalid usage.

    arn.parse(false); // $ExpectError
    arn.parse(123); // $ExpectError
    arn.parse(() => {}); // $ExpectError
    arn.parse({ foo: 'bar ' }); // $ExpectError

    sections.foo; // $ExpectError
}

//
// toString()
//
{
    // Test valid usage.

    const sections: arn.Sections = {
        partition: 'aws',
        service: 'iam',
        region: '',
        accountID: '123456789012',
        resource: 'user/division_abc/subdivision_xyz/Bob',
    };
    const text = arn.toString(sections); // $ExpectType string

    // Test invalid usage.

    arn.toString(false); // $ExpectError
    arn.toString(123); // $ExpectError
    arn.toString('Hello World!'); // $ExpectError
    arn.toString(() => {}); // $ExpectError
    arn.toString({ foo: 'bar ' }); // $ExpectError
}
