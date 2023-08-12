import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntityApp } from '../shared/entity/entity';
import { StockEntity } from '../stock/stock.entity';

@Entity()
export class IngredientEntity extends BaseEntityApp {
  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 200 })
  description: string;

  
  @OneToMany(() => StockEntity, (stock) => stock.ingredient)
  stock: StockEntity[];
}