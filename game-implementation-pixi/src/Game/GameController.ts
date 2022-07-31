
import { IGameController, IGameModel, IGameView } from "jpgames-game-framework";
import { from, Subject } from "rxjs";
import { Controller } from "../Core/Controller";

export class GameController extends Controller implements IGameController {

    public get gameView(): IGameView {
        return this._view as IGameView;
    }

    public get gameModel(): IGameModel {
        return this._model as IGameModel;
    }

    constructor(name: string) {
        super(name);
    }

    public init(): void {
        this.gameModel.initGameLoop();
    }

    public start(): void{
        this.sendAction("START");
    }

    public sendAction(action: string): void {
        this.gameModel.sendAction(action);
    }

    
}