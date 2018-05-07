import Ember from 'ember';
import Route from '@ember/routing/route';

const { get, set } = Ember;

export default Route.extend({

  queryParams: {
    limit: { refreshModel: true, replace: true },
    offset: { refreshModel: true, replace: true }
  },

  model(params) {
    return this.store.query('pokemon', params);
  },

  afterModel(model) {
    const adapter = this.store.adapterFor('pokemon');
    return model.map(item => {
      adapter.getPokemon(item.id).then(detail => {
        set(item, 'image', detail.sprites.front_default);
      })
    })
  }

});
