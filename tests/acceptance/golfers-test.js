import Ember from 'ember';
import Pretender from 'pretender';
import { module, test } from 'qunit';
import { authenticateSession, invalidateSession } from '../helpers/ember-simple-auth';
import startApp from '../helpers/start-app';
import startMirage from '../helpers/start-mirage';

var App;
var pretendServer;

module('Acceptance | Golfers', {
  setup: function() {
    App = startApp();
    pretendServer = new Pretender(function() {
      this.post('/token', function() {
        return [200, { 'Content-Type': 'application/json' }, '{ "access_token": "access_token" }'];
      });
    });
    startMirage(this.container);
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    pretendServer.shutdown();
  },
});

test('visiting /golfers', function(assert) {
  authenticateSession(App);
  visit('/golfers');

  andThen(function() {
    assert.equal(currentURL(), '/golfers');
  });
});

test('Listing golfers', function(assert) {
  authenticateSession(App);
  server.createList('golfer', 5);
  visit('/golfers');

  andThen(function() {
    equal(find('.golfer-link').length, 5);
  });
});

test('Golfer profile displays country', function(assert) {
  authenticateSession(App);
  var golfer = server.create('golfer', { country: "Canada" });
  visit('/golfers/' + golfer.id);

  andThen(function () {
    equal(find('li:contains("Canada")').length, 1);
  });
});