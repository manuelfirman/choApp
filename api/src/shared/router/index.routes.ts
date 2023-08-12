import express, { Router } from "express";
import { IngredientRoutes } from "../../ingredientes/ingredient.routes";
import { StockRoutes } from "../../stock/stock.routes";
import { PricesRoutes } from "../../precios/prices.routes";
import { CambioRoutes } from "../../cambio/cambio.routes";

export class RoutesApp {
  public router: express.Application;
  constructor() {}

  public routes(): Router[] {
    return [
      new IngredientRoutes().router,
      new StockRoutes().router,
      new PricesRoutes().router,
      new CambioRoutes().router
      // Agregar routers de otros modulos al array
    ];
  }
}