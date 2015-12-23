import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addGolfer: function(golfer) {
			console.log(golfer.get('name') + ' made it to the route!');
			// Get current team
			let team = this.store.peekRecord('team', 3);
			team.get('golfers').pushObject(golfer);
			// Check number on current team
			// Check ranking
			// Add to team
		},

		removeGolfer: function(golfer) {
			// Get current team
			let team = this.store.peekRecord('team', 3);			
			team.get('golfers').removeObject(golfer);
			team.save();
		}
	}
});
