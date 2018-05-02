import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    limit: { refreshModel: true, replace: true },
    offset: { refreshModel: true, replace: true }
  },

  model(params) {
    return this.store.query('pokemon', params);
  }

});
