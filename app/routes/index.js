import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      data: this.store.findAll('scribble'),
      scribble: {}
    }
  },

  actions: {
    createScribble(info) {
      let newScribble = this.store.createRecord('scribble', {
        title: info.title,
        text: info.text,
        author: info.author,
        createdDate: new Date()
      });

      newScribble.save();
    }
  }
});
