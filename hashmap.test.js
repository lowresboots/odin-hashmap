const HashMap = require('./hashmap.js');

const test = new HashMap();

console.log('Populating hash map with initial values...');
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log('\nCurrent state after initial population:');
console.log('Length:', test.length());
console.log('All entries:', test.entries());

console.log('\nTesting value overwriting...');
test.set('apple', 'dark red');
test.set('banana', 'bright yellow');
test.set('carrot', 'light orange');
console.log('Updated values:');
console.log('apple:', test.get('apple'));
console.log('banana:', test.get('banana'));
console.log('carrot:', test.get('carrot'));

console.log('\nAdding "moon: silver" to trigger growth...');
test.set('moon', 'silver');

console.log('\nState after growth:');
console.log('Length:', test.length());
console.log('All entries:', test.entries());

console.log('\nTesting other methods:');
console.log('Has "apple"?', test.has('apple'));
console.log('Has "nothere"?', test.has('nothere'));
console.log('Getting "nothere":', test.get('nothere'));
console.log('\nAll keys:', test.keys());
console.log('All values:', test.values());

console.log('\nTesting remove:');
console.log('Removing "apple":', test.remove('apple'));
console.log('Trying to remove "apple" again:', test.remove('apple'));
console.log('Length after remove:', test.length());

console.log('\nTesting clear:');
test.clear();
console.log('Length after clear:', test.length());
console.log('Entries after clear:', test.entries());