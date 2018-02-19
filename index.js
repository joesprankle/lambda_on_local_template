var https = require('https');
var url = require('url');
var slack_url = 'https://hooks.slack.com/services/T5xxxxxR8TG/B9AxxxxT/1Qxxxxxxxxxxxx';
var slack_opts = url.parse(slack_url);
slack_opts.method = 'POST';
slack_opts.headers = {'Content-Type': 'application/json'};

exports.handler = function(event, context) {
	console.log(JSON.stringify(event));
	
	var items = Array(
"A drowning man will use the head of another man for buoyancy",
"Results = success - expectations",
"I have socks older than most of you.",
"Has anyone checked the site?",
"Have we stopped marketing?",
"Where's Krishen?",
"We need campaigns!",
"Have you seen this conversion rate?!",
"I'm up to a gram a day",
"Did the build go?",
"It's a pill...that helps you AGE BETTER!");
  
var payload = items[Math.floor(Math.random()*items.length)]

	var req = https.request(slack_opts, function(res) {
		if (res.statusCode === 200) {
			context.succeed("OK");
		} else {
			context.fail('Failed: ' + res.statusCode);
		}
	});

	req.on('error', function(e) {
         console.log('Error with request: ' + e.message);
         context.fail(e.message);
     });

    req.write(JSON.stringify({text: payload}));
    req.end();
}

