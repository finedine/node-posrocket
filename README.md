# node-clover

Simple NodeJS wrapper for [POSRocket API](http://launchpad.rocketinfra.com/v0.4.0/docs).

## Getting Started

### Installation

`npm install node-posrocket`

### Setup

Basically require `node-posrocket` and create a token with `getToken(code, client_id, client_secret, redirect_uri)` function to initialize wrapper.

### Example

```
const PR = require("node-posrocket");
const accessToken = PR.getToken(code, client_id, client_secret, redirect_uri); // to create an Access Token
const posRocket = PR.initialize(accessToken); // initialize the wrapper with a created Access Token

try {
    const me = await posRocket.me.get(); // This will return the response body if the request is successful.
} catch (error) {
    // All functions throw an error if they encounter with an error.
}

```

## Available Functions

## Contributing

If you want to contribute to a project and make it better, your help is very welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[npm-image]: https://img.shields.io/npm/v/node-posrocket.svg?style=flat
[npm-url]: https://www.npmjs.com/package/node-posrocket
