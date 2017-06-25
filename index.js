const express = require('express');
const path = require('path');

const DEFAULT_PORT = 3000;

const port = process.env.PORT || DEFAULT_PORT;
const app = express();

if (process.env.NODE_ENV === 'DEV') {
  // Step 1: Create & configure a webpack compiler
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');
  const compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
  );

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(
    require('webpack-hot-middleware')(compiler, {
      heartbeat: 10000,
      log: console.log,
      path: '/__webpack_hmr',
    }),
  );
}

app.use('/', express.static(path.join(__dirname, 'dist')));

const server = app.listen(port, () => {
  server.keepAliveTimeout = 0;
  process.stdout.write(`listening on port ${port}\n`);
});
