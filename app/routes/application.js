import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	session: Ember.inject.service(),

  beforeModel() {
    return this._setCurrentUser();
  },

  sessionAuthenticated() {  	
    this._super(...arguments);
    this._setCurrentUser().catch((error) => { console.log(error); this.get('session').invalidate() });
  },

  _setCurrentUser() {
    return this.get('session').setCurrentUser();
  }

});