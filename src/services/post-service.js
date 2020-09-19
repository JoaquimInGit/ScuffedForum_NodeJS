const db = require('../configs/mongodb.js').getDB();
const ObjectId = require('mongodb').ObjectID;

exports.getPosts = () => {
    return new Promise((resolve, reject) => {
        db
            .collection('post')
            .find()
            .project({ 'title': 1, 'description': 1, "category" : 1, "userId" : 1})
            .toArray()
            .then(books => resolve(books))
            .catch(err => reject(err));
    });
};

exports.getPost = id => {
    return new Promise((resolve, reject) => {
        db
            .collection('post')
            .findOne({ _id: ObjectId(id) })
            .then(book => resolve(book))
            .catch(err => reject(err));
    });
};

exports.insertPost = (body, userId) => {
    return new Promise((resolve, reject) => {
        db
            .collection('post')
            .insertOne(
                {
                    title: body.title,
                    userId: userId,
                    description: body.description,
                    category: body.category,
                    comments: []

                })
            .then(res => resolve({ _id: res.insertedId, inserted: 1 }))
            .catch(err => reject(err));
});
};

exports.updatePost = (id, body) => {
    return new Promise((resolve, reject) => {
        db
            .collection('post')
            .updateOne({ _id: ObjectId(id) },
                {
                    $set:
                    {
                        title: body.title,
                        userId: body.userId,
                        description: body.description,
                        category: body.category,
                }
            })
            .then(res => resolve({ updated: 1 }))
            .catch(err => reject(err));
    });
};

exports.insertComment = (id, body, userId) => {
    return new Promise((resolve, reject) => {
        db
            .collection('post')
            .updateOne({ _id: ObjectId(id) },
                
                        {$push :
                        {
                            comments: { userId: userId, comment: body.comment}
                        }
                    }
                )
            .then(res => resolve({ updated: 1 }))
            .catch(err => reject(err));
    });
};

exports.removeComment = (id, body, userId) => {
    return new Promise((resolve, reject) => {
        db
            .collection('post')
            .updateOne({ _id: ObjectId(id) },
                
                        {$pull :
                        {
                            comments: { userId : userId}
                        }
                    }/*, {arrayFilters : [{"elem.userId" : userId}]}*/
                )
            .then(res => resolve({ updated: 1 }))
            .catch(err => reject(err));
    });
};

exports.removePost = id => {
    return new Promise((resolve, reject) => {
        db
            .collection('post')
            .deleteOne({ _id: ObjectId(id) })
            .then(res => resolve({ removed: 1 }))
            .catch(err => reject(err));
    });
};