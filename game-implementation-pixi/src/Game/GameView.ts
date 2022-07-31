
import { IGameView, IView } from "jpgames-game-framework";
import { View } from "../Core/View";

export class GameView extends View implements IGameView {

    constructor(name: string) {
        super(name);
    }

    public onResize(): void{
        super.onResize();

        // Resize coupled views as well
        this._views.forEach(view => {
            view.onResize();
        });
    }

}