import { CambioControllers } from "./cambio.controller";
import { CambioMiddlewares } from "./cambio.middlewares";
import { BaseRouter } from "../shared/router/router";

export class CambioRoutes extends BaseRouter<CambioControllers, CambioMiddlewares> {
    constructor() {
        super(CambioControllers, CambioMiddlewares, "cambio");
    }

    routes(path: string): void {
      this.router.get(
        `/${path}`,
        (req, res, next) => this.middleware.cambioMiddleware(req, res, next),
        (req, res) => this.controller.getAllController(req, res)
      );

      this.router.get(
        `/${path}/:id`,
        (req, res, next) => this.middleware.cambioMiddleware(req, res, next),
        (req, res) => this.controller.getByIdController(req, res)
      );

      this.router.post(
        `/${path}`,
        (req, res, next) => this.middleware.cambioMiddleware(req, res, next),
        (req, res) => this.controller.postController(req, res)
      );

      this.router.put(
        `/${path}/:id`,
        (req, res, next) => this.middleware.cambioMiddleware(req, res, next),
        (req, res) => this.controller.putController(req, res)
      );

      this.router.delete(
        `/${path}/:id`,
        (req, res, next) => this.middleware.cambioMiddleware(req, res, next),
        (req, res) => this.controller.deleteController(req, res)
      );
    }
}