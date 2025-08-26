/* opgave 1 */
console.group('opgave 1');

const person = {
  name: 'Bo',
  age: 42,
  job: 'Faglærer',
};

console.log(person);

console.groupEnd();

/* opgave 2 */
console.group('opgave 2');

console.log(person.name);
console.log(person.job);
console.log(`${person.name} 'arbejder som' ${person.job}`);

console.groupEnd();

/* opgave 3 */
console.group('opgave 3');

delete person.age;

console.log(person);

console.groupEnd();
