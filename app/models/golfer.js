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
	score: Ember.computed('r1', 'r2', 'r3', 'r4', function() {
		let r1 = this.get('r1'),
			r2 = this.get('r2'),
			r3 = this.get('r3'),
			r4 = this.get('r4');

		return r1 + r2 + r3 + r4;
	}),

	name: Ember.computed('firstName', 'lastName', {
		get(key) {
      		let firstName = this.get('firstName'),
	        	lastName  = this.get('lastName');

	      	return firstName + ' ' + lastName;
	    },
	    set(key, value) {
	    	let [firstName, lastName] = value.split(' ');

	      	this.set('firstName', firstName);
	      	this.set('lastName', lastName);

	      	return value;
	    }
	})
  
});
