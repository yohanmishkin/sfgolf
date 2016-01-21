import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service('session'),

  actions: {
    login() {
      this.set('errors', null);
      var params = { identification: this.get('identification'), password: this.get('password') };
      // Redirects to index route on success (configurable in config/environment.js)
      this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', params);

  		// let { identification, password } = this.getProperties('identification', 'password');
  		// this.get('authManager').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
    // 		this.set('errorMessage', reason.error);
  		// }).then(() => {
  		// 	alert('Success!');
  		// }, (err) => {
  		// 	alert('Error: ' + err.responseText);
  		// });
	  }
	}

});
