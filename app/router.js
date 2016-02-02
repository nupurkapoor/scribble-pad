import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

// Setting router for navigation menu. Home page is the default index page nad doesn't need one specifically.
Router.map(function() {
	this.route('about', { path: '/about' });
  	this.route('contact', { path: '/contact' });
});

export default Router;
