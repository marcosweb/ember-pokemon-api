import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  queryParams: {
    limit: 100,
    offset: 20
  },
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pokemons');
  this.route('pokemon', { path: '/pokemon/:name' });
});

export default Router;
