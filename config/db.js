const mongoose = require('mongoose');


const connection = mongoose.createConnection('mongodb://localhost:27017').on('open', () => {
    console.log('MongoDB: Connected');
});


module.exports = connection;