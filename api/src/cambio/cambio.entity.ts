import { Entity, Column } from "typeorm";
import { BaseEntityApp } from "../shared/entity/entity";

@Entity()
export class CambioEntity extends BaseEntityApp {
  @Column()
  date: Date;

  @Column("varchar", { length: 100 })
  shift: string;

  @Column("varchar", { length: 100 })
  panchero: string;

  @Column()
  salchichaSuperEntrada: number;

  @Column()
  salchichaChicaEntrada: number;

  @Column()
  panSuperEntrada: number;

  @Column()
  panChicoEntrada: number;

  @Column()
  aguaEntrada: number;

  @Column()
  botellaEntrada: number;

  @Column()
  salchichaSuperSalida: number;

  @Column()
  salchichaChicaSalida: number;

  @Column()
  panSuperSalida: number;

  @Column()
  panChicoSalida: number;

  @Column()
  aguaSalida: number;

  @Column()
  botellaSalida: number;

  @Column()
  subtotal: number;

  @Column()
  pagoPanchero: number;

  @Column()
  mercadoPago: number;

  @Column()
  otroDescuento: number;

  @Column()
  total: number;
}