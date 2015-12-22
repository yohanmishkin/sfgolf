import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addGolfer() {
			// Get current team
			// Check number on current team
			// Check ranking
			// Add to team
			console.log('addGolfer() was clicked');
		},

		removeGolfer() {
			console.log('removeGolfer() was clicked');
		}
	}
});
