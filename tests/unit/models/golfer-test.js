import { moduleForModel, test } from 'ember-qunit';

moduleForModel('golfer', 'Unit | Model | golfer', {
  // Specify the other units that are required for this test.
  needs: ['model:team']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
