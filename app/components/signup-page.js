import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

	actions: {
    register() {      
  		let user = this.store.createRecord('user', {
    		firstName: this.get('firstName'),
    		lastName: this.get('lastName'),
    		email: this.get('email'),
    		password: this.get('password')	
  		});

  		user.save().then(function(newUser) {
    		this.get('session').authenticate('authenticator:oauth2', newUser.get('email'), newUser.get('password'));
      });
    }
  }
});
