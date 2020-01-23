const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	name: String,
	lastLogged: Date,
},{
	timestamps: true
});

module.exports = model('User', UserSchema);