/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
  };

  // const s3 = {
  //   accessKeyId: 'AKIAI3EMHYY5T7WGOAFQ',
  //   secretAccessKey: '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',
  //   bucket: 'ember-pokemon',
  //   region: 'us-east-1'
  // };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }
  else if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3 = {
      accessKeyId: 'AKIAI3EMHYY5T7WGOAFQ',
      secretAccessKey: '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',
      bucket: 'ember-pokemon',
      region: 'us-east-1'
    },
    ENV['s3-index'] = {
      accessKeyId: 'AKIAI3EMHYY5T7WGOAFQ',
      secretAccessKey: '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',
      bucket: 'ember-pokemon',
      region: 'us-east-1'
    }
  }

  return ENV;
};
