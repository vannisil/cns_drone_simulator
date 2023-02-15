const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

module.exports.exportCu = () => {
    MongoClient.connect('mongodb+srv://drone:drone@dronesimulator.qkjnfjo.mongodb.net/DroneSimulator?retryWrites=true&w=majority', function (err, db) {
      if (err) throw err;
      const collection = db.collection('cus');

      collection.find({}).toArray(function (err, documents) {
        if (err) throw err;
        const json = JSON.stringify(documents);
        fs.writeFile('cuCollection.json', json, function (err) {
          if (err) throw err;
          console.log('Data exported to mycollection.json');
          db.close();
        });
      });
    });
}