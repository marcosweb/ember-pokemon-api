/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const env = EmberApp.env() || 'development';

  const fingerprintOptions = {
    enabled: true
  };

  switch (env) {
    case 'development':
      fingerprintOptions.prepend = 'http://localhost:4202/';
    break;
    case 'production':
      fingerprintOptions.prepend = 'http://ember-pokemon.s3-website-us-east-1.amazonaws.com/';
    break;
  }

  let app = new EmberApp(defaults, {
    fingerprint: fingerprintOptions,

    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': true
    },

    sourcemaps: {
      enabled: EmberApp.env() !== 'production',
      extensions: ['js']
    },

    sassOptions: {
      extension: 'sass',
      sourceMap: EmberApp.env() !== 'production'
    },

    minifyCSS: {
      enabled: EmberApp.env() === 'production',
      options: { processImport: true }
    },

    minifyJS: {
      enabled: EmberApp.env() === 'production'
    },

    storeConfigInMeta: false
  });

  // inclui um CSS no aplicação em 'vendor.css'
  app.import('node_modules/bootstrap/dist/css/bootstrap.css');

  return app.toTree();
};
