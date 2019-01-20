"use strict";

const arnScheme = "arn";
const delimiter = ":";
const arnSections = 6;

// Zero indexed position in the urn
const sectionScheme = 0;
const sectionPartition = 1;
const sectionService = 2;
const sectionRegion = 3;
const sectionAccountID = 4;
const sectionResource = 5;

// Error strings
const invalidType = "arn is not a string";
const invalidScheme = "arn has invalid scheme";
const invalidSections = "arn has not enough sections";

// Custom splitN for the lols because javascript.split doesn't return the leftover portion
// Loosely based upon https://gist.github.com/slevithan/2048056
const splitN = (str, sep, limit) => {
  const re = new RegExp(sep, "g");
  let lastLastIndex = 0;
  let match;
  let output = [];
  while ((match = re.exec(str))) {
    if (re.lastIndex > lastLastIndex) {
      output.push(str.slice(lastLastIndex, match.index));
      lastLastIndex = re.lastIndex;
      if (output.length >= limit) {
        break;
      }
    }
    if (re.lastIndex === match.index) {
      re.lastIndex++; // Avoid an infinite loop
    }
  }

  if (lastLastIndex === str.length) {
    if (match[0].length || !separator.test("")) {
      output.push("");
    }
  } else {
    output.push(str.slice(lastLastIndex));
  }

  return output;
};

exports.parse = arn => {
  if (typeof arn !== "string") {
    throw new TypeError(invalidType);
  }

  const sections = splitN(arn, delimiter, arnSections - 1);

  if (sections[sectionScheme] !== arnScheme) {
    throw new Error(invalidScheme);
  }

  if (sections.length !== arnSections) {
    throw new Error(invalidSections);
  }

  return {
    partition: sections[sectionPartition],
    service: sections[sectionService],
    region: sections[sectionRegion],
    accountID: sections[sectionAccountID],
    resource: sections[sectionResource]
  };
};

exports.toString = arn => {
  return [
    arnScheme,
    arn.partition,
    arn.service,
    arn.region,
    arn.accountID,
    arn.resource
  ].join(delimiter);
};
