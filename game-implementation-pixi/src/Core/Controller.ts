import { IComponentController, IComponentView, IController, IModel, IView } from "jpgames-game-framework";
import { Model } from "./Model";
import { View } from "./View";

export class Controller implements IController {
    protected _view: IView;
    protected _model: IModel;

    constructor(name: string){        
        this.createModel(name);
        this.createView(name);
    }

    public get view(): IView {
        return this._view;
    }

    public get model(): IModel {
        return this._model;
    }

    public get name(): string{
        return this._model.name;
    }

    protected createModel(name: string): IModel {
        this._model = new Model(name);
        return this._model;
    }

    protected createView(name: string): IView {
        this._view = new View(name);
        return this._view;
    }
}