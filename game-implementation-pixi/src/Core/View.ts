import { IController, IModel, IView } from "jpgames-game-framework";
import { Container } from "pixi.js";
import { Subject } from "rxjs";


export class View extends Container implements IView {

    protected _components: IController[];
    protected _views: IView[];
    protected _subject: any;

    public get subject(): any{
        return this._subject
    }

    constructor(name: string) {
        super();

        this._components = [];
        this._views = []

        // Name of the Container
        this.name = name;

        this._subject = this.createSubject();

        // Resize after initializing the class
        this.onResize();
    }

    public getComponentByName(name: string): IController {
        return this._components.find((x) => x.name == name) as IController;
    }

    public getComponentByModel(model: IModel): IController {
        return this._components.find((x) => x.model = model) as IController;
    }

    public addComponent(controller: IController): void {
        if (!this._components.includes(controller)) {
            this._components.push(controller);
        }

        this.addCustomChild(controller.view);
    }

    public addCustomChild(view: IView) {
        let pixiDisplayObject = view as View;

        if (!this._views.includes(view)) {
            this._views.push(view);
        }

        if (!this.children.includes(pixiDisplayObject)) {
            super.addChild(pixiDisplayObject);
        }
    }

    public onResize(): void {
    }

    protected createSubject():Subject<any>{
        return new Subject<any>()
    }
    
}