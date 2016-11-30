const getFruits = require('./get-fruits');
const addFruit = require('./add-fruit');

// const users = [
//   { firstName: 'Matt', lastName: 'Glover', age: 25, type: 'worker' },
//   { firstName: 'Sam', lastName: 'Galson', age: 30, type: 'professor' },
//   { firstName: 'Matt', lastName: 'Sharp', age: 24, type: 'hipster' },
//   { firstName: 'Rich', lastName: 'Warren', age: 22, type: 'boss' },
// ];

const home = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    getFruits((err, fruits) => {
      if (err) {
        console.log('error');
      }
      reply.view('fruits', { fruits });
    });
  },
};

const newFruit = {
  method: 'GET',
  path: '/{name}/{colour}/{stone}',
  handler(req, reply) {
    addFruit((err, fruits) => {
      if (err) {
        console.log('error');
      }
      console.log('hello');
      reply.view('fruits', { fruits });
    }, req.params);
  },
};

module.exports = [
  home,
  newFruit,
];
