const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, maxLength: 50 },
    time: { type: Date },
}, {
    collection: 'user'
});

module.exports = mongoose.model('User', UserSchema);