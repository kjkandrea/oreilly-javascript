const string = String('string')

const stringPropertiesNames = Object.getOwnPropertyNames(String.prototype);
const stringFirstProperty = stringPropertiesNames[0]

console.log(
  // stringPropertiesNames.join(','),
  stringFirstProperty
)

