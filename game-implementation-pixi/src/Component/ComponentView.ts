import { IComponentView } from "jpgames-game-framework";
import { View } from "../Core/View";

export class ComponentView extends View implements IComponentView {

    protected _isShown: boolean;

    constructor(name: string) {
        super(name);

        this._isShown = false;
    }

    public show(): Promise<void> {

        return new Promise<void>((resolve, reject) => {
            if (!this._isShown) {
                this.visible = true;
                this._isShown = true;
                resolve();
            }
            console.log("SHOW");
        });
    }

    public hide(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this._isShown) {
                this.visible = false;
                this._isShown = false;
                resolve();
            }
            console.log("HIDE");
        }); 
    }
}