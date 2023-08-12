import { BaseRouter } from "../shared/router/router";
import { PricesController } from "./prices.controller";
import { PricesMiddlewares } from "./prices.middlewares";

export class PricesRoutes extends BaseRouter<PricesController, PricesMiddlewares> {
  constructor() {
    super(PricesController, PricesMiddlewares, "prices");
  }

  routes(path: string): void {
    this.router.get(
      `/${path}`,
      (req, res, next) => this.middleware.pricesMiddleware(req, res, next),
      (req, res) => this.controller.getAllController(req, res)
    );

    this.router.get(
      `/${path}/:id`,
      (req, res, next) => this.middleware.pricesMiddleware(req, res, next),
      (req, res) => this.controller.getByIdController(req, res)
    );

    this.router.post(
      `/${path}`,
      (req, res, next) => this.middleware.pricesMiddleware(req, res, next),
      (req, res) => this.controller.postController(req, res)
    );

    this.router.put(
      `/${path}/:id`,
      (req, res, next) => this.middleware.pricesMiddleware(req, res, next),
      (req, res) => this.controller.putController(req, res)
    );

    this.router.delete(
      `/${path}/:id`,
      (req, res, next) => this.middleware.pricesMiddleware(req, res, next),
      (req, res) => this.controller.deleteController(req, res)
    );
  }
}