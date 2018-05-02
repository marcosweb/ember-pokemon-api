import Ember from 'ember';
import Controller from '@ember/controller';
import { observer } from '@ember/object';

const { get, set } = Ember;

export default Controller.extend({

  queryParams: ['limit', 'offset'],

  limit: null,
  offset: null,

  nextPage: '',
  previousPage: '',

  nextOffset: null,
  previousOffset: null,

  statusModel: {
    next: '',
    previous: '',
    count: 0
  },

  // para usar com o componente {{simple-loading}},
  // em vez do loading.hbs padrão do Ember
  showLoading: false,

  onNextPage: observer('statusModel.next', function () {
    let nextPage = get(this, 'statusModel.next');
    if (nextPage) {
      set(this, 'nextPage', nextPage.split('?').pop());
      set(this, 'nextOffset', nextPage.split('=').pop());
    }
  }),

  onPrev: observer('statusModel.previous', function () {
    let previousPage = get(this, 'statusModel.previous');
    if (previousPage) {
      set(this, 'previousPage', previousPage.split('?').pop());
      set(this, 'previousOffset', previousPage.split('=').pop());
    }
  }),

  actions: {
    loadPokemon(name) {
      this.transitionToRoute('pokemon/' + name);
    },

    willTransition() {
      set(this, 'showLoading', true);
    },

    goNextPage(offset) {
      this.setProperties('offset', offset);
    },

    previousPage(offset) {
      this.sendAction('previousPage', offset)
    },

    willRender() {
      set(this, 'showLoading', true);
    },

    didRender() {
      set(this, 'showLoading', false);
    },
  }

});
