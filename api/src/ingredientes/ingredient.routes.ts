import { BaseRouter } from "../shared/router/router";
import { IngredientController } from "./ingredient.controller";
import { IngredientMiddlewares } from "./ingredient.middlewares";

export class IngredientRoutes extends BaseRouter<IngredientController, IngredientMiddlewares> {
  constructor() {
    super(IngredientController, IngredientMiddlewares, "ingredient");
  }

  routes(path: string): void {
    this.router.get(
      `/${path}`,
      (req, res, next) => this.middleware.ingredientMiddleware(req, res, next),
      (req, res) => this.controller.getAllController(req, res)
    );

    this.router.get(
      `/${path}/:id`,
      (req, res, next) => this.middleware.ingredientMiddleware(req, res, next),
      (req, res) => this.controller.getByIdController(req, res)
    );

    this.router.post(
      `/${path}`,
      (req, res, next) => this.middleware.ingredientMiddleware(req, res, next),
      (req, res) => this.controller.postController(req, res)
    );

    this.router.put(
      `/${path}/:id`,
      (req, res, next) => this.middleware.ingredientMiddleware(req, res, next),
      (req, res) => this.controller.putController(req, res)
    );

    this.router.delete(
      `/${path}/:id`,
      (req, res, next) => this.middleware.ingredientMiddleware(req, res, next),
      (req, res) => this.controller.deleteController(req, res)
    );
  }
}