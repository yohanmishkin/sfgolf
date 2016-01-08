import Ember from 'ember';

export default Ember.Controller.extend({
	sortProps: ['totalScore'],
	sortedTeams: Ember.computed.sort('model', 'sortProps')
});
