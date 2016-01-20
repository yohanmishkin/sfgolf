import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default DS.RESTAdapter.extend({
  namespace: 'api',
});
