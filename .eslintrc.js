module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "prettier"],
  plugins: ["prettier", "graphql"],
  rules: {
    "import/no-webpack-loader-syntax": [0],
    "graphql/template-strings": [
      `error`,
      {
        env: `relay`,
        schemaString: printSchema(schema, { commentDescriptions: true }),
        tagName: `graphql`,
      },
    ],
    "prettier/prettier": "warn"
  }
}