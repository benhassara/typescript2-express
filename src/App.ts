import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';


class App {
  // our ExpressJS instance
  public express: express.Application;

  /**
   * Run configuration methods on the Express instance.
   */
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  public static init(): App {
    return new App();
  }

  /**
   * Configure Express middleware.
   */
  private middleware() {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes() {
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
  }
}

export default App.init().express;
