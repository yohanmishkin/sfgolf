import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

	actions: {
    registerUser() {
      const sesh = this.get('session');
  		let user = this.store.createRecord('user', {
    		firstName: this.get('firstName'),
    		lastName: this.get('lastName'),
    		email: this.get('email'),
    		password: this.get('password')	
  		});
  		
  		user.save().then(function(newUser) {
    		sesh.authenticate('authenticator:oauth2', {
        		identification: newUser.get('email'),
        		password: newUser.get('password')
        });
      });
    }
  }
});
