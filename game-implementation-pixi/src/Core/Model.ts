import { IModel } from "jpgames-game-framework";


export class Model implements IModel {
    protected _name: string;
    protected _currentState: any;


    public get name(): string {
        return this._name;
    }
    public get currentState(): any {
        return this._currentState;
    }

    constructor(name: string) {
        this._name = name;
    }

    public sendAction(action: string) {
        console.warn("extend this class");
    }

    public sendActions(action: string[]) {
        console.warn("extend this class");
    }

}