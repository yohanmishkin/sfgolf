import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('signup-page', 'Integration | Component | signup page', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(5);

  this.render(hbs`{{signup-page}}`);

  assert.equal(this.$('input[placeholder="First name"]').text(), '');
  assert.equal(this.$('input[placeholder="Last name"]').text(), '');
  assert.equal(this.$('input[placeholder="Email"]').text(), '');
  assert.equal(this.$('input[placeholder="Enter password"]').text(), '');
  assert.equal(this.$('input[placeholder="Confirm password"]').text(), '');
});
