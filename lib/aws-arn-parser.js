/**
 * Components of ARN by position
 * @type {Array}
 */
var components = [
    'arn',
    'aws',
    'service',
    'region',
    'namespace',
    'relativeId',
]

module.exports = function(arnString) {
    return arnString.split(':').reduce(function(result, part, idx){
        result[ components[idx] ] = part
        return result
    }, {})
}
