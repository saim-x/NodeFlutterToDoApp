const app = require('./app');
const db = require('./config/db');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Hello World')

})
app.listen(port, ()=>{
    console.log(`Server is up on http://localhost:${port}`);
})