import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  ranking: faker.random.number,
  country: faker.address.country,
  age: faker.random.number  
});