// The purpose of the provided webpack.config.js file and code is 
// to configure the Webpack bundler for a specific project. 
// Webpack is a popular module bundler for JavaScript applications.

//HTMLWebpackPlugin is a plugin that simplifies the creation of 
// HTML files to serve the bundled JavaScript files.

// WasmPackPlugin is a Webpack plugin designed for Rust projects that use WebAssembly.
// It configures Webpack to compile and bundle WebAssembly modules created from Rust code. 
// The crateDirectory option points to the base directory of the Rust project.

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new WasmPackPlugin({
    	crateDirectory: path.resolve(__dirname, '.') //Points to Rust project's base directory
    })
  ],
  experiments: {
    asyncWebAssembly: true
  }

}