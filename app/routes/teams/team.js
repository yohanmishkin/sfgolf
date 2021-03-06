import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var teams = this.modelFor('teams');
		return teams.findBy('id', params.id);
	}
});
