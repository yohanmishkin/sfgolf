import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
  	lastName: DS.attr('string'),
  	email: DS.attr('string'),
  	password: DS.attr('string'),
  	team: DS.hasMany('golfer'),

  	name: Ember.computed('firstName', 'lastName', function() {
  		return `${this.get('firstName')} ${this.get('lastName')}`;
  	})
});
