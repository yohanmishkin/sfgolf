import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var teams = this.store.findAll('team');
		return teams.findBy('id', params.owner.id);
	}
});
