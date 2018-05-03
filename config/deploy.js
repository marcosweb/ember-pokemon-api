/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
  };
  
  const s3 = {
    accessKeyId: 'AKIAJLGG6LXOTSG7DWLA',
    secretAccessKey: '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',
    bucket: 'ember-pokemon',
    region: 'us-east-1'
  };
  
  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  } 
  else if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3 = s3,
    ENV['s3-index'] = s3
  }

  return ENV;
};
