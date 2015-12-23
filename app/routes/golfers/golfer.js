import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var golfers = this.modelFor('golfers');	
		return golfers.findBy('slug', params.slug);
	}

});
