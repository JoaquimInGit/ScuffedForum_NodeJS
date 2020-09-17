const MongoClient = require("mongodb").MongoClient;
//CRia a ligação ao driver

const mongodb = new MongoClient('mongodb://localhost:27017');

const connectDB = () => {
    return new Promise((resolve, reject) => {
        mongodb.connect(err => {
            if (err) reject(err);
            else resolve();
        });
    });
};

const getDB = () => mongodb.db('ScuffedForum');
const disconnectDB = () => _db.close();

module.exports = { connectDB, getDB, disconnectDB };