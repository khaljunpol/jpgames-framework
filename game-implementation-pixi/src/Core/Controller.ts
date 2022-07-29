import { IComponentController, IComponentView, IController, IModel, IView } from "jpgames-game-framework";
import { Model } from "./Model";
import { View } from "./View";

export class Controller implements IController {
    protected _view: IView;
    protected _model: IModel;

    constructor(name: string) {
        this._model = this.createModel(name);
        this._view = this.createView(name);
    }

    public get view(): IView {
        return this._view;
    }

    public get model(): IModel {
        return this._model;
    }

    public get name(): string {
        return this._model.name;
    }

    protected createModel(name: string): IModel {
        return new Model(name);
    }

    protected createView(name: string): IView {
        return new View(name);
    }
}