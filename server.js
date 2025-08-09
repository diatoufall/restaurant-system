require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('Restaurant API');
});

// Import des routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});