module.exports = (arnString) ->

	result = {}

	[
		result.arn,
		result.aws,
		result.service,
		result.region,
		result.namespace,
		result.relativeId
	] = arnString.split ':'

	result
