import { BaseMiddleware } from "../shared/middleware/middlewares";
import { PricesEntity } from "./prices.entity";
import { Request, Response, NextFunction } from "express";


export class PricesMiddlewares extends BaseMiddleware<PricesEntity> {
  constructor(){
    super(PricesEntity);
  }

  async pricesMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("pricesMiddleware");
    next();
  }
}