const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    options: { configFileName: path.resolve(__dirname, './tsconfig.json') }, // << added
  })
  config.plugins.push(new TSDocgenPlugin()) // optional
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
