import { IView } from "../Core/IView";

export interface IComponentView extends IView { 
    show(): Promise<void>;
    hide(): Promise<void>;
}
