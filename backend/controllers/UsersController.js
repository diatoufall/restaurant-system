const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        console.log("Reçu:", req.body); // Debug
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            });
            console.log("Créé:", user.toJSON()); // Debug
            return res.status(201).json(user);
        } catch (error) {
            console.error("Erreur:", error); // Debug
            return res.status(400).json({ error: error.message });
        }
    }
};