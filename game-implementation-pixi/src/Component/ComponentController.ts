import { IComponentController, IComponentModel, IComponentView, IGameController } from "jpgames-game-framework";
import { from, Subject } from "rxjs";
import { Controller } from "../Core/Controller";
import { GameController } from "../Game/GameController";

export class ComponentController extends Controller implements IComponentController {

    protected _gameController: IGameController;

    public get componentView(): IComponentView {
        return this._view as IComponentView;
    }
    public get componentModel(): IComponentModel {
        return this._model as IComponentModel;
    }
    constructor(name: string, gameController: IGameController) {
        super(name);

        this._gameController = gameController;

        this.init();
    }

    public init(): void {

    }

    public onUpdateGameState(state: any): void
    {
        
    }
}