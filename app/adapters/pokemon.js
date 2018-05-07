import Ember from 'ember';
import DS from 'ember-data';

const { $ } = Ember;

export default DS.JSONAPIAdapter.extend({

  host: 'https://pokeapi.co',
  namespace: 'api/v2',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  pathForType: function () {
    return 'pokemon';
  },

  getPokemon(name) {
    const url = `${this.host}/${this.namespace}/pokemon/${name}`;
    return $.getJSON(url).then(results => results);
  }

});
