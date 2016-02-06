import Ember from 'ember';
import EmberValidations from "ember-validations";
const { service } = Ember.inject;

export default Ember.Component.extend(EmberValidations, {
  session: service('session'),
  
  validations: {
    firstName: {
      presence: true,
      length: {minimum: 1, maximum: 50}
    },
    lastName: {
      presence: true,
      length: {minimum: 1, maximum: 50}
    },
    email: {
      format: {with: /.*@.*\..*/, message: "Must be formatted like an email"}
    },
    password: {
      length: {minimum: 6},
      confirmation: true
    }
  },

	actions: {
    
    register() {      
      
      let self = this;
      let { email, password } = this.getProperties('email', 'password');
      
      this.validate().then(() => {
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
      }).catch((reason) => {

        var errorHashes = reason;
        var errorKeys = Object.keys(errorHashes);
        this.get('flashMessages').clearMessages();
        errorKeys.forEach((key) => {
          errorHashes[key].forEach((error) => {
            this.get('flashMessages').danger(key + ': ' + error, {sticky: true});
          });
        });
      });

    }

  }

});
