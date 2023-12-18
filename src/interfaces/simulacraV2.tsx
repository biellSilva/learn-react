import { IMatrice } from "./matrices";
import { ISimulacra } from "./simulacra";
import { IWeapon } from "./weapon";


export interface ISimulacraV2 extends ISimulacra {
    weapon: IWeapon | null
    matrix: IMatrice | null
}