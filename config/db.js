const mongoose = require('mongoose');


const connection = mongoose.createConnection('mongodb://localhost:27017/newTODOapp').on('open', () => {
    console.log('MongoDB: Connected');
}).on('error', (err) => {
    console.log('MongoDB: Error', err);
});


module.exports = connection;