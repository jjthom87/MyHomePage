var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var nodemailer = require('nodemailer');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

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
			pass: 'Billabong'
			}
	});
	var mailOptions = {
	    from: req.body.name + " at email: " + req.body.email + " and phone: " + req.body.phone, // sender address
	    to: 'cpsjtho@gmail.com',
	    message: req.body.message,
	    html: '<p> ' + req.body.message + ' </p>'
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	        res.redirect('/');
	    }
	    console.log('Message sent: ' + info.response);
	    res.redirect('/');
	});
});

app.use('/static', express.static('client'));

app.listen(PORT, function(){
  console.log("Listening on port", PORT);
});