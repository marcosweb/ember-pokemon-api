import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
  tagName: 'div',
  className: ['container'],

  sprites: computed('pokemon.sprites', function () {
    const sprites = get(this, 'pokemon.sprites');
    const entries = Object.entries(sprites)
    return entries.filter(i => i[1]);
  })
});
