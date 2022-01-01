const string = String('string')

const stringPropertiesNames = Object.getOwnPropertyNames(String.prototype);
const stringFirstProperty = stringPropertiesNames[0]
const length = string[stringFirstProperty]

console.log(
  stringPropertiesNames,
  stringFirstProperty,
  length
)

