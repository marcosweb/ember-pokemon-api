/* eslint-env node */
'use strict';

import awsCredentials from './credentials';

module.exports = function(deployTarget) {
  let ENV = {
    defaultDeployTarget: 'development',
    build: {},
    locationType: 'hash'
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3 = awsCredentials,
    ENV['s3-index'] = awsCredentials
  }

  return ENV;
};
