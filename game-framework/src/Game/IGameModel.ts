import { IModel } from "../Core/IModel";

export interface IGameModel extends IModel {
    gameContext: any;
    gameLoopService: any;
    initGameLoop(): void

    attachStateMachine(key: string, machine: any);
    attachStateSchema(key: string, schema: any);
}
