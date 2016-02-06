import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/start-mirage';

moduleForComponent('team-profile', 'Integration | Component | team profile', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('it renders a team', function(assert) {
  assert.expect(1);

  let user = server.create('user', { firstName: 'Jack' });
  let model = server.create('team', { user: user.id });
  let golfers = server.createList('golfer', 10, { teams: [model.id] } );

  this.set('model', model);
  this.render(hbs`{{team-profile team=model}}`);

  assert.equal(this.$('h4').text(), user.firstName + "'s team");

});
