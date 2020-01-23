const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        user = await User.create({
            name,
        });

        return res.json(user);
    },

    async show(req, res) {
        const { id } = req.body;

        user = await User.findById(id);

        return res.json(user);
    },
        
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },
    
    async update(req, res) {
        const { id, name } = req.body;

        const user = await User.findByIdAndUpdate(id, {
            $set: { name }
        });

        return res.json(user);
    },
    
    async destroy(req, res) {
        const { id } = req.body;
        
        const user = await User.findByIdAndDelete(id);

        return res.json({ message: "ok" });
    },
}