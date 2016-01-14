import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	ranking: DS.attr('number'),
	country: DS.attr('string'),
	teams: DS.hasMany('team'),

	r1: DS.attr('number'),
	r2: DS.attr('number'),
	r3: DS.attr('number'),
	r4: DS.attr('number'),
	score: Ember.computed.sum('r1', 'r2', 'r3', 'r4'),

	name: Ember.computed('firstName', 'lastName', function() {
		return `${this.get('firstName')} ${this.get('lastName')}`;
	})
  
});
