import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({
	store: Ember.inject.service(),

	setCurrentUser: function() {
		// this.get('session.data.authenticated').then(function(asdf) {
		// 	console.log(asdf);
		// });

		if (this.get('isAuthenticated')) {
			this.get('store').findRecord('user', {}).then((user) => {
				console.log(user.get('firstName'));
				this.set('currentUser', user);
			});
		}
	}.observes('isAuthenticated')
});