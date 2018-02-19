# Easy Barebones Lambda development (node)

This allows you to geet started building a lambda function you can run/test locally and depoly from the cli when ready.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

```
aws-cli
grunt
node/npm
```

### Installing

This is a example of a funny lambda function I use to send messages to a slack channel. 
You can run this pretty quick to see it in action.

Create your function in AWS however you want console/cli, save the ARN
Edit your Gruntfile.js and input your the ARN
```
arn: 'arn:aws:lambda:us-west-2:xxxx0096260:function:xxxxx',
```

Create a app in Slack and create an incoming webhook to a channel of your chosing, copy the URL.
Edit your index.js
```
var slack_url = 'https://hooks.slack.com/services/T5xxxxxR8TG/B9AxxxxT/1Qxxxxxxxxxxxx';
```
The event.json is will be passed to the lambda function during testing, I console log it as an example. Edit it to match the payload expected when you start creating your functions.

As always...

```
npm install
```

## Running the tests locally
```
grunt lambda_invoke
```
### Deploying to the server
```
grunt deploy
```

