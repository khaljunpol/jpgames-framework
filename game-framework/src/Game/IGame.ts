import { IComponentController } from "../Component/IComponentController";
import { IGameController } from "./IGameController";

export interface IGame{

    name: string;
    application: any;
    controller: IGameController;

    init();
    addComponent(component: IComponentController);
    addComponents(components: IComponentController[]);
}