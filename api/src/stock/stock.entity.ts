import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntityApp } from "../shared/entity/entity";
import { IngredientEntity } from "../ingredientes/ingredient.entity";

@Entity()
export class StockEntity extends BaseEntityApp {
  @Column()
  quantity: number;

  @ManyToOne(() => IngredientEntity, (ingredient) => ingredient.stock)
  @JoinColumn({ name: "ingrendient_id" })
  ingredient: IngredientEntity;
}