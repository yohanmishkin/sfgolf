import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/start-mirage';

moduleForComponent('golfer-profile', 'Integration | Component | golfer profile', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('it renders a golfer', function(assert) {
  assert.expect(2);

  const model = server.create('golfer');
  this.set('model', model);

  this.render(hbs`{{golfer-profile golfer=model}}`);

  assert.equal(this.$('li:first').text(), 'Ranking: ' + model.ranking);
  assert.equal(this.$('li:nth-child(2)').text(), 'Country: ' + model.country);

});
