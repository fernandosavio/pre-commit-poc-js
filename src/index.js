const { print } = require('./module/submodule');

const attribute = 'Eeeeita';

const obj = {
  attribute,
  a: 'a',
  b: 'b',
};

console.table(obj);

print('Oeee mundão..');

module.exports = { attribute };
