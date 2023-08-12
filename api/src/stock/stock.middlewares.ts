import { BaseMiddleware } from "../shared/middleware/middlewares";
import { StockEntity } from "./stock.entity"
import { Request, Response, NextFunction } from "express";


export class StockMiddlewares extends BaseMiddleware<StockEntity> {
  constructor(){
    super(StockEntity);
  }

  async stockMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("stockMiddleware");
    next();
  }
}
