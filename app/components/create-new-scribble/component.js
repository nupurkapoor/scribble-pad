import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost(scribble) {
      this.sendAction('createScribble', scribble);
      this.set('scribble', {});
    }
  }
});
