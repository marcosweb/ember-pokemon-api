/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const env = EmberApp.env() || 'development';
  const isProduction = EmberApp.env() === 'production';

  const fingerprintOptions = {
    enabled: false
  };

  let app = new EmberApp(defaults, {

    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    },
    
    sourcemaps: {
      enabled: !isProduction,
      extensions: ['js']
    },

    sassOptions: {
      extension: 'sass',
      sourceMap: !isProduction
    },

    minifyCSS: {
      enabled: isProduction,
      options: { processImport: true }
    },

    minifyJS: {
      enabled: isProduction
    },

    storeConfigInMeta: false
  });

  // inclui um CSS no aplicação em 'vendor.css'
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/css/bootstrap-theme.min.css');

  return app.toTree();
};
