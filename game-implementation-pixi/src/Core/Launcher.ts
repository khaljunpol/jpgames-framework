import { IGame, ILauncher } from "jpgames-game-framework";
import { Game } from "../Game/Game";


export class Launcher implements ILauncher {

    private _game: IGame;

    constructor(name: string) {
        this._game = this.createGame(name);
    }

    public get game(): IGame {
        return this._game;
    }

    public init(game: IGame): void {
        game.init();
    }

    public createUI(): void {

    }

    protected createGame(name: string): IGame {
        return new Game(name);
    }

}