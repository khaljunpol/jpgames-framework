import { IGameController } from "./IGameController";

export interface IGame{

    name: string;
    application: any;

    controller: IGameController;

    init();
}