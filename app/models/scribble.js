import DS from 'ember-data';

/* This way scribbles will be able to load Ember Data pieces independently.*/
let {
  Model,
  attr
} = DS;

export default Model.extend({
  title: attr('string'),
  author: attr('string'),
  createdDate: attr('date'),
  text: attr('string')
});