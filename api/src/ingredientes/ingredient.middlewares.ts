
import { BaseMiddleware } from "../shared/middleware/middlewares";
import { IngredientEntity } from "./ingredient.entity";
import { Request, Response, NextFunction } from "express";

export class IngredientMiddlewares extends BaseMiddleware<IngredientEntity> {
  constructor(){
    super(IngredientEntity);
  }

  async ingredientMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("ingredientMiddleware");
    next();
  }
}