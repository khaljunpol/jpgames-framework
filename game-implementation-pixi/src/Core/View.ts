import { IController, IModel, IView } from "jpgames-game-framework";
import { IResizeable } from "jpgames-game-framework/src/Others/IResizeable";
import { Container } from "pixi.js";


export class View extends Container implements IView, IResizeable {

    private _components: IController[];

    constructor(name: string) {
        super();

        this._components = [];

        // Name of the Container
        this.name = name;
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

    public onResize(): void {
    }

    protected addCustomChild(view: IView) {
        let pixiDisplayObject = view as View;

        if (this.children.includes(pixiDisplayObject)) {
            super.addChild(pixiDisplayObject);
        }
    }

}