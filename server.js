require('dotenv').config();
const express = require('express');
const app = express();

// Middleware ESSENTIEL
app.use(express.json());

// Import ABSOLU des routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Route test
app.get('/', (req, res) => res.send('API Works'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));