
import { IGameModel } from "jpgames-game-framework";
import { Model } from "../Core/Model"
import { from } from "rxjs";
import { assign, createMachine, interpret } from "xstate";
import { GAME_LOOP_STATES, STATE_ACTIONS } from "../Core/Constants";
import { basename } from "path";


export class GameModel extends Model implements IGameModel {

    protected _gameContext: any;

    protected _stateMachines: Record<string, any>;
    protected _stateSchemas: Record<string, any>;

    protected _gameLoopMachine: any;
    protected _gameLoopService: any;

    public get gameContext(): any {
        return this._gameContext;
    }
    public get gameLoopService(): any {
        return this._gameLoopService;
    }

    constructor(name: string) {
        super(name);
        
        this._stateMachines = {};
        this._stateSchemas = {};

        console.log(this);
    }

    public initGameLoop(): void {
        this._gameContext = this.createCoreLoopContext();

        this._gameLoopMachine = this.createGameLoopMachine(this._name);

        this._gameLoopService = interpret(this._gameLoopMachine);

        this._gameLoopService.start();

        // Initialize observables
        super.init(this._gameLoopService);
    }

    public sendAction(action: string): void {
        super.sendAction(action);
        this._gameLoopService.send(action);
    }

    protected createCoreLoopContext(): any {
        return {
            state: GAME_LOOP_STATES.START
        }
    }
    
    public attachStateMachine(key: string, machine: any) {
        if (!this._stateMachines.hasOwnProperty(key)) {
            this._stateMachines[key] = machine;
        }
    }

    public attachStateSchema(key: string, schema: any) {
        if (!this._stateSchemas.hasOwnProperty(key)) {
            this._stateSchemas[key] = schema;
        }
    }

    protected createGameLoopMachine(name: string): any {

        return createMachine({
            // id: name + "Loop",
            // initial: GAME_LOOP_STATES.START,
            // context: this._gameContext,
            // states: {
            //     [GAME_LOOP_STATES.START]: {
            //         initial: STATE_ACTIONS.SETUP,
            //         states: {
            //             [STATE_ACTIONS.SETUP]: {
            //                 on: {
            //                     NEXT: { target: STATE_ACTIONS.PROCESS }
            //                 }
            //             },
            //             [STATE_ACTIONS.PROCESS]: {
            //                 on: {
            //                     NEXT: { target: STATE_ACTIONS.COMPLETE }
            //                 }
            //             },
            //             [STATE_ACTIONS.COMPLETE]: {
            //                 type: 'final'
            //             }
            //         },
            //         onDone: {
            //             target: GAME_LOOP_STATES.PLAY,
            //             actions: assign({
            //                 state: () => GAME_LOOP_STATES.PLAY
            //             })
            //         },
            //         data: {
            //             currentState: (context, event) => context.state
            //         }
            //     },
            //     [GAME_LOOP_STATES.PLAY]: {
            //         initial: STATE_ACTIONS.SETUP,
            //         states: {
            //             [STATE_ACTIONS.SETUP]: {
            //                 on: {
            //                     NEXT: { target: STATE_ACTIONS.PROCESS }
            //                 }
            //             },
            //             [STATE_ACTIONS.PROCESS]: {
            //                 on: {
            //                     NEXT: { target: STATE_ACTIONS.COMPLETE }
            //                 }
            //             },
            //             [STATE_ACTIONS.COMPLETE]: {
            //                 type: 'final'
            //             }
            //         },
            //         onDone: {
            //             target: GAME_LOOP_STATES.END,
            //             actions: assign({
            //                 state: () => GAME_LOOP_STATES.END
            //             })
            //         },
            //         data: {
            //             currentState: (context, event) => context.state
            //         }
            //     },
            //     [GAME_LOOP_STATES.END]: {
            //         initial: STATE_ACTIONS.SETUP,
            //         states: {
            //             [STATE_ACTIONS.SETUP]: {
            //                 on: {
            //                     NEXT: { target: STATE_ACTIONS.PROCESS }
            //                 }
            //             },
            //             [STATE_ACTIONS.PROCESS]: {
            //                 on: {
            //                     NEXT: { target: STATE_ACTIONS.COMPLETE }
            //                 }
            //             },
            //             [STATE_ACTIONS.COMPLETE]: {
            //                 type: 'final'
            //             }
            //         },
            //         onDone: {
            //             target: GAME_LOOP_STATES.START,
            //             actions: assign({
            //                 state: () => GAME_LOOP_STATES.START
            //             })
            //         },
            //         data: {
            //             currentState: (context, event) => context.state
            //         }
            //     },
            // },
        });
    }

}