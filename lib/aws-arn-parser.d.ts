declare module 'aws-arn-parser' {
    function arnParser(arnString: string): arnParser.Components;

    namespace arnParser {
        interface Components {
            arn: string;
            aws: string;
            service: string;
            region: string;
            namespace: string;
            relativeId: string;
        }
    }

    export = arnParser;
}
