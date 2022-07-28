import { IModel } from "jpgames-game-framework";


export class Model implements IModel{
    protected _name: string;

    constructor(name: string){
        this._name = name;
    }

    public get name():string {
        return this._name;
    }
    
}