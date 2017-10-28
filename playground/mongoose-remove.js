const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('59f40485fcdbe2b7fe10ee08').then(todo => {
    console.log(todo);
});