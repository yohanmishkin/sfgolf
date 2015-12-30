import Ember from 'ember';

export default Ember.Controller.extend({

	isNotOnTeam: Ember.computed('golfer.teams', function() {
		console.log(this.get('name'));
		let team = this.store.peekRecord('team', 3);
		return true;
		// return team.get('golfers').find('id', golfer.id).get('length') === 1;
	}),

	actions: {
		addGolfer: function(golfer) {
			// Get current team
			let team = this.store.findRecord('team', 3);
			// Check number on current team
			if (team.get('golfers.length') > 2)
			{
				console.log('Team is full!');
				return;
			}

			// if (golfer.get('ranking'))
			// Check ranking
			// Add to team
			team.get('golfers').pushObject(golfer);
			team.save();
		},

		removeGolfer: function(golfer) {
			// Get current team
			let team = this.store.peekRecord('team', 3);			
			team.get('golfers').removeObject(golfer);
			team.save();
		}
	}
});
