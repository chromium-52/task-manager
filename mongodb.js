/*
NOTE: this file is for reference only (for section 10) and can be deleted
*/

const { MongoClient, ObjectID } = require('mongodb');
// above same as:
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// connects to mongodb
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    // gets reference to the specified database
    const db = client.db(databaseName);

    // manipulate the collection

    // db.collection('users').insertOne(
    //   {
    //     name: 'Kenny Jung',
    //     age: 20,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     { description: 'Clean the house', completed: true },
    //     { description: 'Renew inspection', completed: false },
    //     { description: 'Pot plants', completed: false },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks!');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // fetch data

    // db.collection('users').findOne({ name: 'Jen' }, (error, user) => {
    //   if (error) {
    //     return console.log('Unable to fetch');
    //   }
    //   console.log(user);
    // });

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log('Unable to fetch tasks');
    //     }
    //     console.log(tasks);
    //   });

    // updating documents

    // const updatePromise = db.collection('users').updateOne(
    //   {
    //     _id: new ObjectID('60df77d00395fb33a8f84d36'),
    //   },
    //   {
    //     $set: { name: 'Andrew' },
    //   }
    // );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('tasks')
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // delete documents

    // db.collection('tasks')
    //   .deleteOne({ description: 'Renew inspection' })
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));

    // db.collection('users')
    //   .deleteMany({ age: 27 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
