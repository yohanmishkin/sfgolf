import Ember from 'ember';
import Golfer from '../models/golfer';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


var davis = Golfer.create({ name: 'Davis Love III' });
var tiger = Golfer.create({ name: 'Tiger Woods' });
var lefty = Golfer.create({ name: 'Lefty Gomez' });

var golfers = [davis, tiger, lefty];

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function() {
		return golfers;
	}
});
