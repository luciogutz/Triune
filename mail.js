import Form from './js/form'
var nodemailer = require('nodemailer');


// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: "triunewebservices@gmail.com",
            pass: "Lucious313"
        }
    });

console.log('SMTP Configured');

// Message object
var message = {

    // sender info
    from: 'Lucio Gutierrez <lucio.gutierrez30@yahoo.com>s',

    // Comma separated list of recipients
    to: '"Receiver Name" <triunewebservices@gmail.com>s',

    // Subject of the message
    subject: 'How to send mail in nodejs ✔',

    // plaintext body
    text: 'Hello, everyone!',

    // HTML body
    html:'<p>s<b>sLook this</b>s  <img src=""/>s</p>s'+
         '<p>sHere i am send my picture attachment:<br/>s</p>s'
};

console.log('Sending Mail');
transport.sendMail(message, function(error){
  if(error){
      console.log('Error occured');
      console.log(error.message);
      return;
  }
  console.log('Message sent successfully!');

  // if you don't want to use this transport object anymore, uncomment following line
  //transport.close(); // close the connection pool
});
