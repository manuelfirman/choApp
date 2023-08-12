import { BaseServices } from "../shared/services/services";
import { IngredientEntity } from "./ingredient.entity";

export class IngredientServices extends BaseServices<IngredientEntity> {
  constructor() {
    super(IngredientEntity);
  }

}

export const IngredientServicesInstance = new IngredientServices();