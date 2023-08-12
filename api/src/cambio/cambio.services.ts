import { BaseServices } from "../shared/services/services";
import { CambioEntity } from "./cambio.entity";

export class CambioServices extends BaseServices<CambioEntity> {
    constructor() {
        super(CambioEntity);
    }
}

export const CambioServicesInstance = new CambioServices();