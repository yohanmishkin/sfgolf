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
			var model = this.get('model');
			model.get('errors').clear();
			this.store.findRecord('team', 3).then(function(team) {
				
				// Check number on current team
				var teamGolfers = team.get('golfers');
				if (teamGolfers.length >= 10) {
					console.log('Team is full!');
					var message = 'Team is full! Remove some players from your team before adding any more.';
					model.get('errors').add('ranking', message);
					return;
				}

				// get array of current team's rankings
				var ranking = golfer.get('ranking');
				var teamRankings = teamGolfers.mapBy('ranking');
				var checks = [];

				if (ranking > 0 && ranking <= 5) {
					checks = [1, 2, 3, 4, 5];
				}
				else if (ranking > 5 && ranking <= 10) {
					checks = [6, 7, 8, 9, 10];
				}
				else if (ranking > 10 && ranking <= 15) {
					checks = [11, 12, 13, 14, 15];
				}
				else if (ranking > 15 && ranking <= 20) {
					checks = [16, 17, 18, 19, 20];
				}
				else if (ranking > 20 && ranking <= 25) {
					checks = [21, 22, 23, 24, 25];
				}

				var result = teamRankings.filter(function(r) {
					return (checks.indexOf(r) != -1)
				});

				if (result.length > 0) {
					var message = 'Cannot add golfer to the team. You already have someone on your team from that tier.';
					model.get('errors').add('ranking', message);
					return;
				}

				if (ranking > 25) {

					var greaterThan25 = teamRankings.filter(function(r) {
						return r >= 25;
					});

					if (greaterThan25.length >= 5) {
						var message = 'Cannot add golfer to the team. You have too many golfers from rankings 25+.';
						model.get('errors').add('ranking', message);
						return;		
					}
				}

				// Add to team
				team.get('golfers').pushObject(golfer);
				golfer.get('teams').pushObject(team);
				team.save();
				golfer.save();
			});
		},

		removeGolfer: function(golfer) {
			var team = this.store.peekRecord('team', 3);
			team.get('golfers').removeObject(golfer);
			golfer.get('teams').removeObject(team);
			team.save();
			golfer.save();
		}
	},
	
	clearErrors: function() {
		console.log('clearErrors() got called');
		this.model.get('errors').clear();
	}

});
