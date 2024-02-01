const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Hello World')

})
app.listen(port, ()=>{
    console.log(`Server is up on http://localhost:${port}`);
})