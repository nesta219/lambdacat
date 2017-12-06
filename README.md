# LambdaCat

## Introduction

> Just a simple "Meow world" with AWS Lambda functions.  Check it out in action at http://twitter.com/_lambda_cat_


## Installation

> This guide will assume basic knowledge of the AWS console & Lambda functions.  If you need more information, check out the documentation here: https://aws.amazon.com/documentation/lambda/

> Create a new lambda function with the `Basic Edge Lambda Permission` Policy Template set, and set the invocation handler to `index.handler`

> Create a copy of `config.sample.json`, rename it to `config.json`, and fill it in with your appropriate AWS credentials.

> run `npm run zip` to create your deployment package, set your lambda function's code entry type to `Upload a .ZIP file`, and then upload the zip file

> Add a recurring trigger by clicking on `CloudWatch Events` in the `Add a Trigger` panel.  Create a new rule with a `cron` or `rate` expression of your choosing in the `Schedule expression` field.  Click add.

> Be sure to hit `Save`, and you're done!
