import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'sfgolf/tests/helpers/start-app';

module('Acceptance | golfers', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /golfers', function(assert) {
  visit('/golfers');

  andThen(function() {
    assert.equal(currentURL(), '/golfers');
  });
});

test('Listing golfers', function(assert) {
  server.createList('golfer', 5);
  visit('/golfers');

  andThen(function() {
    equal(find('.golfer-link').length, 5);
  })
});