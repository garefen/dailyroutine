const Activity = require('../models/Activity');

module.exports = {
    async store(req, res) {
        const { id } = req.body;

        const activity = await Activity.findByIdAndUpdate(id, {
            $set: {
                checked: true
            }
        });

        return res.json(activity);
    }
}