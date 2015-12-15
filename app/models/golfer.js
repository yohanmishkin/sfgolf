import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	ranking: DS.attr('number'),
	country: DS.attr('string'),
	score: DS.attr('number'),
	owners: DS.hasMany('user'),

	name: Ember.computed('firstName', 'lastName', function() {
		return `${this.get('firstName')} ${this.get('lastName')}`;
	})
  
});
