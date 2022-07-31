import { IController } from "./IController";
import { IModel } from "./IModel";

export interface IView {
    subject: any;
    addComponent(controller: IController): void;
    getComponentByName(name: string): IController;
    getComponentByModel(model: IModel): IController;
    onResize(): void;
}
