import { IComponentController, IGame, IGameController } from "jpgames-game-framework";
import { Application, Loader } from "pixi.js";
import { View } from "../Core/View";
import { GameController } from "./GameController";



export class Game implements IGame {

    protected _name: string;
    protected _application: Application;
    protected _controller: IGameController;
    protected _loader: Loader;

    public get name(): string {
        return this._name;
    }

    public get application(): any {
        return this._application;
    }

    public get controller(): IGameController {
        return this._controller;
    }


    constructor(name: string) {
        this._name = name;

        this._loader = new Loader();

        this.loadAssets();

    }
    protected loadAssets() {

    }

    protected onLoadComplete() {
        this.init();
    }

    public init() {
        this._controller = this.createController(this._name);

        this._application = this.createApplication();
        this.application.view.style.position = "fixed";

        this._controller.init();

        document.getElementById("game-container").appendChild(this.application.view);

        window.onresize = () => this.onResize();

        let pixiDisplayObject = (this._controller.view as View);
        this._application.stage.addChild(pixiDisplayObject);
    }


    public addComponent(component: IComponentController) {
        this._controller.view.addComponent(component);
    }
    public addComponents(components: IComponentController[]) {
        components.forEach(component => {
            this.addComponent(component);
        });
    }




    protected createApplication(): Application {
        return new Application({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    protected createController(name: string): IGameController {
        return new GameController(name);
    }

    public onResize(): void {

        // Resize the renderer
        this._application.renderer.resize(window.innerWidth, window.innerHeight);
        // Call other components to resize as well
        this._controller.view.onResize();
    }
}