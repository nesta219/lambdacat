var Twitter = require('twitter');
var creds = require('./config.json');
var fetch = require('node-fetch');

var client = new Twitter(creds);

exports.handler = (event, context, callback) => {
  fetch('https://random.cat/meow')
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        client.post('statuses/update', {status: 'Meow: ' + json.file}, function(err, tweet, id) {
          console.log('err:');
          console.log(err);

          console.log('done')
        });
    })

};
