const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: { type: String, required: true, maxLength: 10 },
    coordinates: [{ type: Object, required: true }]
}, { 
    collection: coordinates 
});

module.exports = mongoose.model('User', UserSchema);