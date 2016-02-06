import Ember from 'ember';
import Pretender from 'pretender';
import { module, test } from 'qunit';
import { authenticateSession, invalidateSession } from '../helpers/ember-simple-auth';
import startApp from '../helpers/start-app';
import startMirage from '../helpers/start-mirage';

var App;
var server;

module('Authentication', {
  setup: function() {
    App = startApp();
    server = new Pretender(function() {
      this.post('/token', function() {
        return [200, { 'Content-Type': 'application/json' }, '{ "access_token": "access_token" }'];
      });
    });
    startMirage(this.container);
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    server.shutdown();
  },
});

test('users can log in', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('a:contains("Log in")').length, 1, 'The page shows a login link when the session is not authenticated');
  });

  visit('/login');
  fillIn('input[placeholder="Email"]', 'rp');
  fillIn('input[placeholder="Password"]', 'asdf');
  click('button[type="submit"]');

  andThen(function() {
    assert.equal(find('a:contains("Log out")').length, 1, 'The page shows a logout link when the session is authenticated');
  });
});

test('users can sign up', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('a:contains("Sign up")').length, 1, 'The page shows a signup link when the session is not authenticated');
  });

  visit('/signup');
  fillIn('input[placeholder="First name"]', 'Stew');
  fillIn('input[placeholder="Last name"]', 'Bradley');
  fillIn('input[placeholder="Email"]', 'tjebb@steadfast.com');
  fillIn('input[placeholder="Enter password"]', 'passpass');
  fillIn('input[placeholder="Confirm password"]', 'passpass');
  click('button[type="submit"]');

  andThen(function() {
    assert.equal(find('a:contains("Log out")').length, 1, 'The page shows a logout link when the session is authenticated');
  });
});

test('a protected route is accessible when the session is authenticated', function(assert) {
  authenticateSession(App);
  visit('/golfers');

  andThen(function() {
    assert.equal(currentRouteName(), 'golfers.index');
  });
});

test('a protected route is not accessible when the session is not authenticated', function(assert) {
  invalidateSession(App);
  visit('/golfers');

  andThen(function() {
    assert.notEqual(currentRouteName(), 'golfers.index');
  });
});

test('users can logout', function(assert) {
  authenticateSession(App);
  visit('/');
  click('#logout');
  andThen(function() {
    assert.equal(find('a:contains("Log in")').length, 1, 'The page shows a login link when the users logout and session is unauthenticated');
  });
});
