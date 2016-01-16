import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  ranking: function(i) { return i + 1; },
  country: faker.address.country,
  age: faker.random.number,
  r1: faker.list.random(62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75),
  r2: faker.list.random(62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75),
  r3: faker.list.random(62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75),
  r4: faker.list.random(62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75),
  teams: []
});