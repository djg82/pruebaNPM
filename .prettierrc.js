module.exports = {
  ...require('@michelin/eslint-config'),
  importOrder: [
    "^@?\\w+",
    "^index(\\.tsx)?$",
    "^[.+/]"
  ]
}
