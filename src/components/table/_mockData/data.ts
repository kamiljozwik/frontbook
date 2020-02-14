import faker from 'faker';

const newPerson = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status: Math.random() > 0.5 ? 'active' : 'inactive',
    country: faker.address.country(),
    age: Math.ceil(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
  };
};

export function makeData(count: number) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(newPerson());
  }
  return arr;
}
