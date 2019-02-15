// TypeScript Version: 2.3
//
// This file, and the overall project configuration, follow the steps and conventions defined at
// <https://github.com/Microsoft/dtslint#add-types-for-a-library-not-on-definitelytyped>.

export interface Sections {
    partition: string;
    service: string;
    region: string;
    accountID: string;
    resource: string;
}

export function parse(arnString: string): Sections;
export function toString(arnSections: Sections): string;
