var path = require('path');

module.exports = {
  entry: {
    'index': './js/index.js',
    'about': './js/about.js',
    'member': './js/member.js',
    'memberDet': './js/memberDet.js',
    'studyActivity': './js/studyActivity.js',
    'studyActivityDet': './js/studyActivityDet.js',
    'studyTrends': './js/studyTrends.js',
    'studyTrendsDet': './js/studyTrendsDet.js',
    'masterTraining': './js/masterTraining.js',
    'product': './js/product.js',
    'oldMember': './js/oldMember.js',
    'oldMemberDet': './js/oldMemberDet.js'
  },
  output: {
    path: './js/build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};