const { Schema, model } = require('mongoose');

const ActivitySchema = Schema({
    title: String,
    description: String,
    checked: Boolean,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
},{
    timestamps: true
});

module.exports = model('Activity', ActivitySchema);