import Component from '@ember/component';

export default Component.extend({
  actions: {
    goNextPage(offset) {
      this.sendAction('goNextPage', offset)
    },
    previousPage(offset) {
      this.sendAction('previousPage', offset)
    }
  }
});
