/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
  };

  const s3 = {
    accessKeyId: 'AKIAJIZXGQTJDMNMQI5Q',
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
