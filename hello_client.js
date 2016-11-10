//var unirest = require('unirest');

//unirest.get('http://www.thinkful.com/').end(function(response) {
//  console.log('Status:', response.statusCode);
//  console.log('Headers: ', response.headers);
//  console.log('Body:', response.body);
//});

//Exercise below 
var unirest = require('unirest');

unirest.get('http://localhost:8080/').end(function(response) {
    console.log('Status:', response.statusCode);
    console.log('Headers: ', response.headers);
    console.log('Body:', response.body);
});