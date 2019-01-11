var apiai = require('apiai');

var app = apiai("ac2a4fbe907349c6ac9ba3ee1f27dfc0");

var request = app.textRequest('What internships do you offer?', {
    sessionId: 'lases'
});

var responsex;

request.on('response', function(response) {
    responseParsed=response.result.fulfillment.speech;
    console.log(responseParsed);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
