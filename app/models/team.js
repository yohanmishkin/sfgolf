import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user'),
	golfers: DS.hasMany('golfer'),
	scores: Ember.computed.mapBy('golfers', 'score'),
	totalScore:	Ember.computed.sum('scores')	
});
