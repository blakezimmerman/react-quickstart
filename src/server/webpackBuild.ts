import * as express from "express";
import * as handlebars from "handlebars";
import * as path from "path";

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../../webpack/webpack.dev";

import { clientConfig } from "./app";

const compiler = webpack(webpackConfig);
const outputPath = (compiler as any).outputPath;

export const webpackBuild = (app: express.Express) => {
  app.use(
    webpackDevMiddleware(compiler, {
      stats: {
        colors: true,
      },
      watchOptions: {
        ignored: /node_modules/,
      },
      publicPath: "/",
    }),
  );

  app.use(webpackHotMiddleware(compiler));

  app.set("views", outputPath);

  app.use("/*", (req, res, next) => {
    const filename = path.resolve(outputPath, "index.handlebars");
    (compiler.outputFileSystem as any).readFile(
      filename,
      "utf8",
      (err: Error, result: string) => {
        if (err) {
          return next(err);
        }
        const template = handlebars.compile(result);
        const index = template({ config: JSON.stringify(clientConfig) });
        res.set("content-type", "text/html");
        res.send(index);
        res.end();
      },
    );
  });
};
