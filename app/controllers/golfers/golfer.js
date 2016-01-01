import Ember from 'ember';

export default Ember.Controller.extend({

	isNotOnTeam: (function() {
		var golferId = this.model.get('id');
		var team = this.store.peekRecord('team', 3);
		var golfer = team.get('golfers').findBy('id', golferId);
		if (typeof golfer === "undefined") {
			return true;
		} else {
			return false;
		}
	}).property('model.teams'),

	actions: {
		addGolfer: function(golfer) {
			// Get current team
			this.store.findRecord('team', 3).then(function(team) {
				
				// Check number on current team
				if (team.get('golfers.length') >= 10)
				{
					console.log('Team is full!');
					return;
				}

				var ranking = golfer.get('ranking');
				if (ranking > 0 && ranking <= 5) {

				}
				else if (ranking > 5 && ranking <= 10) {
					
				}
				else if (ranking > 10 && ranking <= 15) {
					
				}
				else if (ranking > 15 && ranking <= 20) {
					
				}
				else if (ranking > 20 && ranking <= 25) {
					
				}
				else {

				}

				// Add to team
				team.get('golfers').pushObject(golfer);
				golfer.get('teams').pushObject(team);
				team.save();
				golfer.save();
				console.log('Number on team: ' + team.get('golfers.length'));
			});
		},

		removeGolfer: function(golfer) {
			// Get current team
			this.store.peekRecord('team', 3).then(function(team) {
				team.get('golfers').removeObject(golfer);
				team.save();
			});	
		}
	}
});
