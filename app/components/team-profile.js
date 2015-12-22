import Ember from 'ember';

export default Ember.Component.extend({
	noGolfers: Ember.computed('team.golfers.length', function() {
		return this.get('team.golfers.length') === 0;
	})
});
