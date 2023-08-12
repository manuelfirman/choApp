import { Entity, Column } from 'typeorm';
import { BaseEntityApp } from '../shared/entity/entity';

@Entity()
export class PricesEntity extends BaseEntityApp {
  @Column()
  date: Date;

  @Column()
  panchoSuper: number;

  @Column()
  panchoChico: number;

  @Column()
  agua: number;

  @Column()
  botella: number;

  @Column()
  comidaPanchero: number;
}