import { BaseMiddleware } from "../shared/middleware/middlewares";
import { CambioEntity } from "./cambio.entity";
import { Request, Response, NextFunction } from "express";


export class CambioMiddlewares extends BaseMiddleware<CambioEntity> {
    constructor() {
        super(CambioEntity);
    }

    async cambioMiddleware(req: Request, res: Response, next: NextFunction) {
      console.log("ingredientMiddleware");
      next();
    }
}