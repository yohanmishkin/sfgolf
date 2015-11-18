import DS from 'ember-data';

export default Ember.Object.extend({
  name: '', //DS.attr('string'),
  ranking: 0,
  country: 'US',
  score: 0,  

  slug: Ember.computed('name', function() {
  	return this.get('name').dasherize();
  })
});
