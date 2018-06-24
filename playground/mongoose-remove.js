const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

Todo.findOneAndRemove({_id: '5b2fee9951e935740def655e'}).then((todo) => {

});

Todo.findByIdAndRemove('5b2fee9951e935740def655e').then((todo) => {
  console.log(todo);
});
