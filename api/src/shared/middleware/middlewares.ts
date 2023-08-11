import { BaseEntity, EntityTarget, Repository } from "typeorm";
import { AppDataSource } from "../../config/postgreSQL";

export abstract class BaseMiddleware<T extends BaseEntity> {
  public repository: Repository<T>;

  constructor(entity: EntityTarget<T>){
    this.repository = AppDataSource.getRepository(entity);
  }

  async getRepository<U extends BaseEntity>(entity: EntityTarget<U>){
    return AppDataSource.getRepository(entity);
  }

  

}