const db = require('../configs/mongodb.js').getDB();
const ObjectId = require('mongodb').ObjectID;

exports.getCategory = () => {
    return new Promise((resolve, reject) => {
        db
            .collection('category')
            .find()
            .project({ nameCategory: 1 })
            .toArray()
            .then((genres) => resolve(genres))
            .catch(err => reject(err));
    });
};
exports.insertCategory = (body) => {
    return new Promise((resolve, reject) => {
        db
            .collection('category')
            .insertOne({
                nameCategory: body.nameCategory,
            })
            .then(res => resolve({ inserted: 1, _id: res.insertedId }))
            .catch(err => reject(err));
    });
};
exports.removeCategory = (id) => {
    return new Promise((resolve, reject) => {
        db
            .collection('category')
            .deleteOne({ _id: ObjectId(id) })
            .then(() => resolve({ removed: 1 }))
            .catch(err => reject(err));
    });
};