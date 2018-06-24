const bodyParser= require('body-parser');

var data=[{item: 'Germany win the World Cup 2018' },{item: " Manuel Neuer wins the balon'dor "},{item: "Marco Reus is the world's most talented midfielder in the world" }];
var urlencodedParser = bodyParser.urlencoded({extended: false});  
  
module.exports = function(app){

   app.get('/todo',function(req,res){
      res.render('todo',{ cmon : data});
    });
   app.post('/todo',urlencodedParser,function(req,res){
    data.push(req.body);
    res.json(data);
   });
   app.delete('/todo/:item',function(req,res){
     data = data.filter(function(todo){
       return todo.item.replace(/ /g,'-') !== req.params.item;

     });
     res.json(data);
   });
};