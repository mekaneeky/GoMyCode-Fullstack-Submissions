const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(function(req,res,next) {
    const date_now = new Date();
    const day = date_now.getDay();
    const hours = date_now.getHours();

    if ((day < 1 || day > 5) || (hours < 9 || hours > 17)) {
        res.render("closed")
    } else {
        next();
    }

})

app.get('/contact-us', function(req,res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.render('contact-us');
});


app.post('/contact-us', function(req,res) {
    console.log("Form response submitted")
    //Payload mgmt code here
    res.status(200)
    res.redirect("/")
});


app.get('/about-us', function(req,res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.render("about-us")
});


app.get('/', function(req,res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.render("home")
});

app.get('/*', function(req,res) {
    res.render('404')
});


app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});


  