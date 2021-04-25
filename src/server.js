require("dotenv").config();
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const headers = {
  "Cache-Control": "no-cache",
};

const proxyObject = {
  headers,
  target: process.env.API_URL,
  secure: false,
  changeOrigin: true,
  logLevel: "debug",
  autoRewrite: true,
};

const apiProxy = {
  "/products": {
    ...proxyObject,
  },
  "/api/graphql/query": {
    target: "http://localhost:9090",
    changeOrigin: true,
  },
  "/oauth2": {
    ...proxyObject,
  },
  "/auth": {
    ...proxyObject,
  },
};

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({
  dev,
});

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev && apiProxy) {
      Object.keys(apiProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, apiProxy[context]));
      });
    }

    server.all("*", (req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
