import { BaseServices } from "../shared/services/services";
import { PricesEntity } from "./prices.entity";

export class PricesServices extends BaseServices<PricesEntity> {
  constructor() {
    super(PricesEntity);
  }
  
}

export const PricesServicesInstance = new PricesServices();