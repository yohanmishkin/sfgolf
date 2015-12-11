import Ember from 'ember';

export default Ember.Controller.extend({

	teamMembers: function() {
		return this.store('golfers');
	},

	actions: {

	}

});
