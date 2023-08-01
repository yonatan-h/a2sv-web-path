const _ = require('lodash');

console.log(_.times(5, Math.random));

const whereDidYouGo = () => console.log('where did you go');
const say = _.debounce(whereDidYouGo, 1000);
say();
setTimeout(say, 900);
setTimeout(say, 1800);
setTimeout(() => console.log('2800 seconds later'), 2800);

const peopul = [
  { name: 'kebe', age: 8 },
  { name: 'lemma', age: 5 },
  { name: 'chala', age: 4 },
];
console.log(_.find(peopul, { name: 'lemma' }));

const people = _.keyBy(peopul, 'name');
console.log(people['lemma']);

const original = { firstLevel: { secondLevel: { thirdLevel: 'secret' } } };
const clone = _.cloneDeep(original);
clone.firstLevel.secondLevel.thirdLevel = 'another secret';
console.log(original, 'vs', clone);

const nums = [5, 5, 2, 2, 3, 3];
console.log('sort and unique', _.sortedUniq(nums));

console.log('reverse', _.reverse(nums));

const names = ['abebe', 'zebede', 'lemma'];
console.log('sort', _.sortBy(nums), _.sortBy(names));

const example = { name: 'abebe', email: 'a@a.a' };
console.log(
  'clone and reset',
  example,
  _.mapValues(example, () => 55)
);

console.log(_.max(nums));

console.log(_.chunk([1, 2, 3, 4], 2));
