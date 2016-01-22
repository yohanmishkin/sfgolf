import Ember from 'ember';

export default Ember.Component.extend({
	actions: {                                                                                   
    	registerUser: function() {
      		
      		var user = this.store.createRecord('user', {
        		firstName: this.get('firstName'),
        		lastName: this.get('lastName'),
        		email: this.get('email'),
        		password: this.get('password')	
      		});
      		
      		user.save().then(function() {
        		this.get('session').authenticate('app:authenticators:oauth2', {
	          		username: this.get('email'),
	          		password: this.get('password')
    			});
  			});
    	}
    }
});
