import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

	actions: {
    
    register() {      
      let self = this;
      let { email, password } = this.getProperties('email', 'password');
      let user = this.store.createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        password: this.get('password')
      });

      user.save().then(function() {        
      	self.get('session').authenticate('authenticator:register', email, password, {}).catch((reason) => {
          self.set('errorMessage', reason.error || reason);
        });
      });
    }

  }

});
