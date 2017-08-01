const config = require('config');
const MongoClient = require('mongodb').MongoClient;

const dbHost = config.get('database.host');
const dbPort = config.get('database.port');
const dbName = config.get('database.name');

const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;

let database;

const POKEMON_COLLECTION_NAME = 'pokemon';

const connect = () => new Promise((resolve, reject) => {
  MongoClient.connect(url, (connectionError, db) => {
    if (connectionError) {
      console.error(connectionError);
      return reject(connectionError);
    }

    console.log('Database connected.');
    database = db;
    return resolve();
  });
});

const initialize = () => new Promise((resolve, reject) => {
  database.createCollection(POKEMON_COLLECTION_NAME, (error) => {
    if (error) {
      return reject(error);
    }

    console.log('Collection created.');
    return resolve();
  });
});

const insertData = (collectionName, data) => new Promise((resolve, reject) => {
  database.collection(collectionName).insertOne(data, (error, responseData) => {
    if (error) {
      return reject(error);
    }

    console.log('Data inserted.');
    return resolve(responseData);
  });
});

const getAll = collectionName => new Promise((resolve, reject) => {
  database.collection(collectionName).find({}).toArray((error, docs) => {
    if (error) {
      return reject(error);
    }

    return resolve(docs);
  });
});

module.exports = {
  POKEMON_COLLECTION_NAME,
  connect,
  initialize,
  insertData,
  getAll,
};
