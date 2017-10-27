const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59f09989445b00636f904b1e')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(docs => {
    //     console.log(docs);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59f31eb3b642e0a3cd7e0f6b')
    }, {
        $set: {
            name: 'Viet Anh',
            age: 22
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});