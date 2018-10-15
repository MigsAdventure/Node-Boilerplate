const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String },
    familyName: { type: String },
    givenName: { type: String },
    name: { type: String },
    imageUrl: { type: String },
    googleId: { type: String },
    perler_cards: [{ type: Schema.Types.ObjectId, ref: 'Perler' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
