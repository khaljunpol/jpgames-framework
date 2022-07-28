import { IController } from "./IController";
import { IModel } from "./IModel";

export interface IView {
    addComponent(controller: IController): void;
    getComponentByName(name: string): IController;
    getComponentByModel(model: IModel): IController;
}
