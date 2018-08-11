import * as express from "express";
import exphbs from "express-handlebars";
import * as path from "path";
import { clientConfig, env } from "./app";
import { webpackBuild } from "./webpackBuild";

const clientDir = path.resolve(__dirname, "../client/");

export const serveApp = (app: express.Express) => {
  app.set("views", clientDir);
  app.engine("handlebars", exphbs());
  app.set("view engine", "handlebars");

  if (env === "development") {
    webpackBuild(app);
  } else {
    app.use(express.static(clientDir));
    app.get("/*", (req, res) =>
      res.render("index", {
        config: JSON.stringify(clientConfig),
      }),
    );
  }
};
