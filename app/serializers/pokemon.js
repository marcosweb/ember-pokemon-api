import Ember from 'ember';
import DS from 'ember-data';
import { getOwner } from '@ember/application';

const { set } = Ember;

export default DS.RESTSerializer.extend({

  primaryKey: 'name',

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    let controller = getOwner(this).lookup('controller:pokemons');
    const { next, previous, count } = payload;

    set(controller, 'statusModel', { next, previous, count });

    payload = {
      pokemon: payload.results
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
