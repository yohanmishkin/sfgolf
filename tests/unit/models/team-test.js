import { moduleForModel, test } from 'ember-qunit';

moduleForModel('team', 'Unit | Model | team', {
  // Specify the other units that are required for this test.
  needs: ['model:golfer', 'model:user']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
