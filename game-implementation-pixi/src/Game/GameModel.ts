
import { IGameModel } from "jpgames-game-framework";
import { Model } from "../Core/Model"
import { from } from "rxjs";
import { assign, createMachine, interpret } from "xstate";
import { GAME_LOOP_STATES, STATE_ACTIONS } from "../Core/Constants";


export class GameModel extends Model implements IGameModel {

    private _gameLoopMachine: any;
    private _gameLoopService: any;
    private _gameLoopObserver: any;

    constructor(name: string) {
        super(name);

        this._gameLoopMachine = this.createGameLoopMachine(name);

        this._gameLoopService = interpret(this._gameLoopMachine);

        this._gameLoopService.start();

        this._gameLoopObserver = from(this._gameLoopService);

        this._gameLoopObserver.subscribe((state) => this.onUpdateState(state));

        console.log(this);
    }

    protected createCoreLoopContext(): any {
        return {
            state: GAME_LOOP_STATES
        }
    }

    public sendAction(action: string): void {
        this._gameLoopService.send(action);
    }

    protected onUpdateState(state: any) {
        console.log("current State ", state.value);

        this._currentState = state;
    }

    protected createGameLoopMachine(name: string): any {

        return createMachine({
            id: name + "Loop",
            initial: GAME_LOOP_STATES.START,
            context: this.createCoreLoopContext(),
            states: {
                [GAME_LOOP_STATES.START]: {
                    initial: STATE_ACTIONS.SETUP,
                    states: {
                        [STATE_ACTIONS.SETUP]: {
                            on: {
                                NEXT: { target: STATE_ACTIONS.DISPLAY }
                            }
                        },
                        [STATE_ACTIONS.DISPLAY]: {
                            on: {
                                NEXT: { target: STATE_ACTIONS.COMPLETE }
                            }
                        },
                        [STATE_ACTIONS.COMPLETE]: {
                            type: 'final'
                        }
                    },
                    onDone: {
                        target: GAME_LOOP_STATES.PLAY,
                        actions: assign({
                            // action: () => this.completeStart()
                        })
                    },
                    data: {
                        currentState: (context, event) => context.state
                    }
                },
                [GAME_LOOP_STATES.PLAY]: {
                    initial: STATE_ACTIONS.SETUP,
                    states: {
                        [STATE_ACTIONS.SETUP]: {
                            on: {
                                NEXT: { target: STATE_ACTIONS.DISPLAY }
                            }
                        },
                        [STATE_ACTIONS.DISPLAY]: {
                            on: {
                                NEXT: { target: STATE_ACTIONS.COMPLETE }
                            }
                        },
                        [STATE_ACTIONS.COMPLETE]: {
                            type: 'final'
                        }
                    },
                    onDone: {
                        target: GAME_LOOP_STATES.END,
                        actions: assign({
                            action: () => GAME_LOOP_STATES.END
                        })
                    },
                    data: {
                        currentState: (context, event) => context.state
                    }
                },
                [GAME_LOOP_STATES.END]: {
                    initial: STATE_ACTIONS.SETUP,
                    states: {
                        [STATE_ACTIONS.SETUP]: {
                            on: {
                                NEXT: { target: STATE_ACTIONS.DISPLAY }
                            }
                        },
                        [STATE_ACTIONS.DISPLAY]: {
                            on: {
                                NEXT: { target: STATE_ACTIONS.COMPLETE }
                            }
                        },
                        [STATE_ACTIONS.COMPLETE]: {
                            type: 'final'
                        }
                    },
                    onDone: {
                        target: GAME_LOOP_STATES.START,
                        actions: assign({
                            action: () => GAME_LOOP_STATES.START
                        })
                    },
                    data: {
                        currentState: (context, event) => context.state
                    }
                },
            },
        });
    }

}