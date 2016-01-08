import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  ranking: function(i) { return i + 1; },
  country: faker.address.country,
  age: faker.random.number,
  teams: []
});