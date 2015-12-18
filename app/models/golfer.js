import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	ranking: DS.attr('number'),
	country: DS.attr('string'),
	score: DS.attr('number'),
	teams: DS.hasMany('team'),

	name: Ember.computed('firstName', 'lastName', function() {
		return `${this.get('firstName')} ${this.get('lastName')}`;
	})
  
});
