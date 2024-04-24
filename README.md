# Node.js Basics

This is a simple Node.js project that demonstrates the basic features of Node.js.

> Note: I tried to only use built in Node.js modules when possible to only showcase Node.js features (e.g. avoiding `express`)

## How to run the project

1. Clone the project and `cd` into the project directory
2. Run `npm install`

- To run the `router` example, run `npm run router`
- To run the `api` example, run `npm run api`

> Note: You can also add an environment variable `PORT` to specify the port number. The default port is `4000`.

## Test the project

### Router

- Open a browser and navigate to `http://localhost:4000/`

### API

- Open a browser and navigate to `http://localhost:4000/api/users` or `http://localhost:4000/api/users/1` and so on

> You could also test the API using `curl`, `Postman` or the `*.http` files in the root directory
>
> Note: To run the `*.http` files, you need to install the [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in VS Code

### FS

- Run `npm run fs` to test the `fs` module

### Path

- Run `npm run path` to test the `path` module

## Resources

- [Node.js](https://nodejs.org/)
- [Node.js Docs](https://nodejs.org/en/docs/)

## License

- [MIT](LICENSE.md)
