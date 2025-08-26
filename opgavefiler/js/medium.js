/* Opgave 1*/
console.group('opgave 1');

const data = {
  items: ['opgave 1', 'opgave 2', 'opgave 3', 'opgave 4', 'opgave 5'],
};
data.items.push('opgave 6');

console.log(data.items);
console.groupEnd();

/*opgave 2*/
console.group('opgave 2');

data.items.splice(3, 2);

console.groupEnd();

/*opgave 3*/
console.group('opgave 3');

data.items[2] = 'changed';
console.log(data.items);

console.groupEnd();
