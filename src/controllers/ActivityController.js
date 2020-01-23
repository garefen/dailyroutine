const Activity = require('../models/Activity');

module.exports = {
    async store(req, res) {
        const { title, description, userId } = req.body;

        const activity = await Activity.create({
            title,
            description,
            checked: false,
            userId,
        });

        return res.json(activity);
    },

    async index(req, res) {
        const { userId } = req.body;

        const activity = await Activity.find({
            userId
        });

        return res.json(activity);
    },

    async show(req, res) {
        const { id } = req.body;

        const activity = await Activity.findById(id);

        return res.json(activity);
    },
    
    async update(req, res) {
        const { id, title, description } = req.body;

        const activity = await Activity.findByIdAndUpdate(id, {
            $set: {
                title,
                description,
                checked: false
            }
        });

        return res.json(activity);
    },
    
    async destroy(req, res) {
        const { id } = req.body;
        
        const activity = await Activity.findByIdAndDelete(id);

        return res.json({ message: "ok" });
    },
}