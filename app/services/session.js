import Ember from 'ember';
import ESASession from "ember-simple-auth/services/session";

const { RSVP } = Ember;

export default ESASession.extend({
	session: Ember.inject.service(),
  store: Ember.inject.service(),

  setCurrentUser() {
  	return new RSVP.Promise((resolve, reject) => {  		
      let userId = this.get('session.authenticated.user_id');      
      if (!Ember.isEmpty(userId)) {      	
        return this.get('store').find('user', userId).then((user) => {
        	console.log('user: ', user);
          this.set('currentUser', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }

});