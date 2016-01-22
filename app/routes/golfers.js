import Ember from 'ember';
import Golfer from '../models/golfer';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function() {
		return this.store.findAll('golfer');
	}
});
