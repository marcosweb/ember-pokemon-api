/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    defaultDeployTarget: 'development',
    build: {},
    locationType: 'hash'
  };

  const s3 = {
    accessKeyId: 'AKIAI52YYOAQQFDPPKXQ',
    secretAccessKey: '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',
    bucket: 'ember-pokemon',
    region: 'us-east-1'
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3 = s3,
    ENV['s3-index'] = s3
  }

  return ENV;
};
