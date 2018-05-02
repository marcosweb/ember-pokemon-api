import Ember from 'ember';

const { get, Route } = Ember;

export default Route.extend({

  model() {
    const pokemonName = get(this, 'router.url').split('/').pop();
    return this.store.adapterFor('pokemon').getPokemon(pokemonName);
  },

  setupController: function (controller, model) {
    controller.set('pokemon', model)
  }

});
