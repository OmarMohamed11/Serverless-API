# Serverless-API
[![Netlify Status](https://api.netlify.com/api/v1/badges/f79d1df0-8b2b-493b-8a27-0b2c8bf0e52d/deploy-status)](https://app.netlify.com/sites/flamboyant-engelbart-d87e10/deploys)

Mocking API endpoint calls with netlify functions `netlify-lambda`.

### Tech

Serverless-API uses [netlify functions](https://docs.netlify.com/functions/overview/#manage-your-serverless-functions) that uses [AWS lambda](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-prog-model-handler-callback)  under the hood:

>netlify Docs : When you call a serverless function’s endpoint, the handler receives an event object
```javascript
{
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {Incoming request headers}
    "queryStringParameters": {query string parameters }
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}
```

### How To Use

this function uses `queryStringParameters` with "fileName" parameter.
