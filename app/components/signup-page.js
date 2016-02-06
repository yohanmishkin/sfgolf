import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const { service } = Ember.inject;

var Validations = buildValidations({
  firstName: {
      debounce: 500,
      validators: [
        validator('presence', true),
        validator('length', {
          max: 15
        })
      ]
  },
  lastName: {
      debounce: 500,
      validators: [
        validator('presence', true),
        validator('length', {
          max: 25
        })
      ]
  },
  email: {
      debounce: 500,
      validators: [
        validator('presence', true),
        validator('format', {
          type: 'email'
        })
      ]
  },
  password: {
      description: 'Password',
      debounce: 500,
      validators: [
        validator('presence', true),
        validator('length', {
          min: 4,
          max: 8
        }),
        validator('format', {
          regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,
          message: '{description} must include at least...'
        })
      ]
    }
});

export default Ember.Component.extend(Validations, {
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
