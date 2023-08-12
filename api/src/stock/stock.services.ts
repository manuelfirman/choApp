import { BaseServices } from "../shared/services/services";
import { StockEntity } from "./stock.entity";


export class StockServices extends BaseServices<StockEntity> {
  constructor(){
    super(StockEntity);
  }

}

export const StockServicesInstance = new StockServices();