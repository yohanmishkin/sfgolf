import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addGolfer(golfer) {			
			this.sendAction('addGolfer', golfer);	
		},

		removeGolfer(golfer) {
			this.sendAction('removeGolfer', golfer);
		}
	}
});
