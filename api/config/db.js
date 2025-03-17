const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nodebatch')
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });

module.exports = mongoose;
