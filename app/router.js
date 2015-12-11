import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('golfers', function() {
    this.route('golfer', { path: ':id' });
  });
   
  this.route('teams', function() {
  	this.route('team', { path: ':id' });
  });
  // this.route('login');
  // this.route('signup');  
});

export default Router;
