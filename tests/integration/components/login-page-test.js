import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-page', 'Integration | Component | login page', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{login-page}}`);

  assert.equal(this.$('input[Placeholder="email"]').text(), '');
  assert.equal(this.$('input[Placeholder="password"]').text(), '');

});
