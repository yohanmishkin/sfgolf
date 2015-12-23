import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addGolfer(golfer) {
			// Get current team
			console.log('Added ' + golfer.get('name'));
			// Check number on current team
			// Check ranking
			// Add to team
		},

		removeGolfer() {
			console.log('removeGolfer() was clicked');
		}
	}
});
