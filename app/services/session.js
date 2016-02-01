import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({

  store: Ember.inject.service(),

  setCurrentUser: function() {
    if (this.get('isAuthenticated')) {
			let userId = this.get('data.authenticated.user_id');
      this.get('store').findRecord('user', userId).then((user) => {
        this.set('currentUser', user);
      });
    }
  }.observes('isAuthenticated')

});