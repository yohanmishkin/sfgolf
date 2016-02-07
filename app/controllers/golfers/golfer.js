import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	isNotOnTeam: (function() {
		let team = this.get('session.currentUser.team');		
		if (typeof team === "undefined") {
			return false;
		} else {
			let golferId = this.model.get('id');
			let golfer = team.get('golfers').findBy('id', golferId);
			if (typeof golfer === "undefined") {
				return true;
			} else {				
				return false;
			}
		}
	}).property('model.teams'),

	actions: {
		addGolfer: function(golfer) {
			let model = this.get('model');
			model.get('errors').clear();

			let team = this.get('session.currentUser.team');
			// Check number on current team
			let teamGolfers = team.get('golfers');
			if (teamGolfers.length >= 10) {
				console.log('Team is full!');
				const message = 'Team is full! Remove some players from your team before adding any more.';
				model.get('errors').add('ranking', message);
				return;
			}

			// get array of current team's rankings
			let ranking = golfer.get('ranking');
			let teamRankings = teamGolfers.mapBy('ranking');
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

			let result = teamRankings.filter(function(r) {
				return (checks.indexOf(r) != -1)
			});

			if (result.length > 0) {
				const message = 'Cannot add golfer to the team. You already have someone on your team from that tier.';
				model.get('errors').add('ranking', message);
				return;
			}

			if (ranking > 25) {

				let greaterThan25 = teamRankings.filter(function(r) {
					return r >= 25;
				});

				if (greaterThan25.length >= 5) {
					const message = 'Cannot add golfer to the team. You have too many golfers from rankings 25+.';
					model.get('errors').add('ranking', message);
					return;		
				}
			}

			// Add to team
			team.get('golfers').pushObject(golfer);
			golfer.get('teams').pushObject(team);
			team.save();
			golfer.save();
		},

		removeGolfer: function(golfer) {
			this.get('session.currentUser.team').then(function(team) {
				team.get('golfers').removeObject(golfer);
				golfer.get('teams').removeObject(team);
				team.save();
				golfer.save();
			});			
		}
	}

});
