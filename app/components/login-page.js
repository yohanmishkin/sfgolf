import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:oauth2', email, password).catch((reason) => {
        this.get('flashMessages').danger(reason.error);
      });
    }
  }
});