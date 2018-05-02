import Ember from 'ember';

const { computed, get, Component } = Ember;

export default Component.extend({
  tagName: 'div',
  className: ['row', 'bs-example'],

  urlPokemonDetail: computed('pokemon', function () {
    return `/pokemon/${get(this, 'pokemon.name')}`;
  })

});
