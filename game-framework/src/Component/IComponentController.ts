import { IController } from "../Core/IController";
import { IComponentModel } from "./IComponentModel";
import { IComponentView } from "./IComponentView";

export interface IComponentController extends IController {
    componentView: IComponentView;
    componentModel: IComponentModel;
    init(): void;
}
