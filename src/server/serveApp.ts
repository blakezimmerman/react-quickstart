import * as express from 'express';
import * as path from 'path';
import * as exphbs from 'express-handlebars';
import webpackBuild from './webpackBuild';
import { env, clientConfig } from './app';

const clientDir = path.resolve(__dirname, '../client/');

const serveApp = (app: express.Express) => {
  app.set('views', clientDir);
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');

  if (env === 'development') {
    webpackBuild(app);
  } else {
    app.use(express.static(clientDir));
    app.get('/*', (req, res) =>
      res.render('index', {
        config: JSON.stringify(clientConfig)
      })
    );
  }
};

export default serveApp;
