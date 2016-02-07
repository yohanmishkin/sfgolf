import Ember from 'ember';

export default Ember.Component.extend({
	noGolfers: Ember.computed('team.golfers.length', function() {
		return this.get('team.golfers.length') === 0;
	}),

	sortProps: ['score'],
	sortedGolfers: Ember.computed.sort('team.golfers', 'sortProps')
});
