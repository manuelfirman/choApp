import { BaseRouter } from "../shared/router/router";
import { StockController } from "./stock.controller";
import { StockMiddlewares } from "./stock.middlewares";

export class StockRoutes extends BaseRouter<StockController, StockMiddlewares> {
  constructor(){
    super(StockController, StockMiddlewares, "stock");
  }

  routes(path: string): void {
    this.router.get(
      `/${path}`,
      (req, res, next) => this.middleware.stockMiddleware(req, res, next),
      (req, res) => this.controller.getAllController(req, res)
    );

    this.router.get(
      `/${path}/:id`,
      (req, res, next) => this.middleware.stockMiddleware(req, res, next),
      (req, res) => this.controller.getByIdController(req, res)
    );

    this.router.post(
      `/${path}`,
      (req, res, next) => this.middleware.stockMiddleware(req, res, next),
      (req, res) => this.controller.postController(req, res)
    );

    this.router.put(
      `/${path}/:id`,
      (req, res, next) => this.middleware.stockMiddleware(req, res, next),
      (req, res) => this.controller.putController(req, res)
    );

    this.router.delete(
      `/${path}/:id`,
      (req, res, next) => this.middleware.stockMiddleware(req, res, next),
      (req, res) => this.controller.deleteController(req, res)
    );

  }
}