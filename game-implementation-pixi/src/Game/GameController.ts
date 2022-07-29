
import { IGameController } from "jpgames-game-framework";
import { Controller } from "../Core/Controller";

export class GameController extends Controller implements IGameController {

    constructor(name: string) {
        super(name);

    }

    init(): void {
    }

}