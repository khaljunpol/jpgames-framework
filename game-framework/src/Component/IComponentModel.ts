import { IModel } from "../Core/IModel";

export interface IComponentModel extends IModel {
    key: string;
    context: any;

    stateSchema: any;
    stateMachine: any;
    stateService: any;
}
