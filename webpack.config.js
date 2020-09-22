const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Importing the source files and exporting to the destination
module.exports = {
  entry: './src/js/app.js',
  devtool: 'inline-source-map',
  // Output management plugins
  plugins: [
  	 new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Output Management',
     }),
   ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Loaders for the files
  module: {
  	 // CSS and Stylesheet loaders
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader',
         ],
       },
       // Image and icon loaders
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [

           'file-loader',
         ],
       },
       // Font loaders
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader',
         ],
       },
       //  Data file loaders
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader',
         ],
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader',
         ],
       },
     ],
   },
};