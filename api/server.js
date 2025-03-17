const express = require('express');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.listen(5000, () => {
    console.log(`Server running on port ${PORT}`)
});