import Ember from 'ember';

export default Ember.Controller.extend({	                                                               
  	username: '',
  	password: '',
  	
  	actions: {                                                                                   
    	registerUser: function() {
      		
      		var user = this.store.createRecord('user', {
        		username: this.get('username')
      		});
      		
      		user.set('typedPass', this.get('password'));
      		user.save().then(function() {
        		//this is basically what happens when you trigger the LoginControllerMixin's "authenticate" action
        		this.get('session').authenticate('app:authenticators:custom', {
	          		username: this.get('username'),
	          		password: this.get('password')
    			});
  			});
    	}
    }
});
