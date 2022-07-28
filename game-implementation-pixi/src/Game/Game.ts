import { IGame, IGameController } from "jpgames-game-framework";
import { IResizeable } from "jpgames-game-framework/src/Others/IResizeable";
import { Application } from "pixi.js";
import { GameController } from "./GameController";
import { createMachine, assign } from "xstate";


export enum GAME_PHASES {
    START = <any>"START",
    PLAY = <any>"PLAY",
    END = <any>"END"
}

export interface GameContext {
    name: string,
    state: GAME_PHASES,
    prevState: GAME_PHASES
}

const start = assign({
    state: GAME_PHASES.PLAY,
    prevState: GAME_PHASES.START,
});

const play = assign({
    state: GAME_PHASES.END,
    prevState: GAME_PHASES.PLAY,
});

const end = assign({
    state: GAME_PHASES.END,
    prevState: GAME_PHASES.START,
});

export class Game implements IGame, IResizeable {

    private _name: string;
    private _application: Application;
    private _controller: IGameController;

    public get name(): string {
        return this._name;
    }

    public get application(): any {
        return this._application;
    }

    public get controller(): IGameController {
        return this._controller;
    }


    private _stateMachine: any;

    public get stateMachine() {
        return this._stateMachine;
    }

    constructor(name: string) {

        this._stateMachine = createMachine({
            id: "TEST",
            initial: GAME_PHASES.START,
            context: {} as {
                state: GAME_PHASES;
                prevState: GAME_PHASES;
            },
            states: {
                [GAME_PHASES.START]: {
                    on: {
                        STARTED: {
                            target: GAME_PHASES.PLAY,
                            actions: "start",
                        },
                    },
                },
                [GAME_PHASES.PLAY]: {
                    on: {
                        PLAYED: {
                            target: GAME_PHASES.END,
                            actions: "play",
                        },
                    },
                },
                [GAME_PHASES.END]: {
                    on: {
                        ENDED: {
                            target: GAME_PHASES.START,
                            actions: "end",
                        },
                    },
                },
            },
            actions: {
                start,
                play,
                end,
            },
        });

        this._name = name;

        this._controller = this.createController(name);

        this._application = this.createApplication();
        this.application.view.style.position = "fixed";

        document.getElementById("game-container").appendChild(this.application.view);
        window.addEventListener('resize', this.onResize);
    }

    

    public init() {

    }

    protected createApplication(): Application {
        return new Application();
    }

    protected createController(name: string): IGameController {
        return new GameController(name);
    }

    public onResize(): void {
        // Resize the renderer
        this._application.renderer.resize(window.innerWidth, window.innerHeight);
    }
}