import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('golfers', function() {
    this.route('golfer', { path: ':slug' });
  });
  this.route('leaderboard');
  this.route('team');

  this.route('login');
  this.route('signup');
});

export default Router;
