const HashSet = require('./hashset.js');

const test = new HashSet();

console.log('Adding elements:');
console.log('Add "apple":', test.add('apple'));
console.log('Add "banana":', test.add('banana'));
console.log('Add "apple" again:', test.add('apple'));
console.log('Current length:', test.length());

console.log('\nTesting has method:');
console.log('Has "apple"?', test.has('apple'));
console.log('Has "carrot"?', test.has('carrot'));

console.log('\nAdding more elements:');
['carrot', 'dog', 'elephant', 'frog', 'grape', 'hat', 'ice cream', 'jacket', 'kite', 'lion'].forEach(item => {
    test.add(item);
});

console.log('Length after adding more:', test.length());
console.log('All values:', test.values());

console.log('\nTesting remove:');
console.log('Remove "apple":', test.remove('apple'));
console.log('Try to remove "apple" again:', test.remove('apple'));
console.log('Length after remove:', test.length());

console.log('\nTesting clear:');
test.clear();
console.log('Length after clear:', test.length());
console.log('Values after clear:', test.values());