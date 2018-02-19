# Easy Barebones Lambda development (node)

This alows you to geet started building a lambda funtion you can run/test locally and depoly from the cli when ready.

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

Create your function in AWS however you want console/cli, save the ARN
Edit your Gruntfile.js and input your the ARN
```
arn: 'arn:aws:lambda:us-west-2:xxxx0096260:function:xxxxx',
```

Create a app in Slack and create an incomeing webhook to a channel of your chosing.
Edit your index.js
```
var slack_url = 'https://hooks.slack.com/services/T5xxxxxR8TG/B9AxxxxT/1Qxxxxxxxxxxxx';
```
The event.json is will be passed to the lambda function during testing, edit it to match the payload expected when deployed.

As always...

```
npm install
```

## Running the tests locally
```
grunt lambda_invoke
```
### Deplying to the server
```
grunt deploy
```

