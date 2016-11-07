var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var nodemailer = require('nodemailer');
var exphbs = require('express-handlebars');
var password = require('./password.js')

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('index');
});

app.post('/sendemail', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'cpsjtho@gmail.com',
			pass: password
			}
	});
	var mailOptions = {
	    from: 'user@jaredspage.com',
	    subject: 'Mainpage Contact Form',
	    to: 'cpsjtho@gmail.com',
	    message: 'Name: ' + req.body.name + '\n' + 'Email: ' + 'req.body.email' + '\n' + 'Message: ' + req.body.message,
	    html: '<p> ' + req.body.message + ' </p>'
	};
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        res.json(error);
	    }
	    res.json(info);
	});
});

app.use('/static', express.static('client'));

app.listen(PORT, function(){
  console.log("Listening on port", PORT);
});