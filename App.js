const express=require('express');
const todoController = require('./Controller/control');


const app=express();

//const bodyParser= require('body-parser');


app.set('view engine','ejs');

app.use(express.static('./assets'));

todoController(app);
app.listen(3000);
console.log('Listening on port 3000 ');