import { IComponentModel } from "jpgames-game-framework";
import { from } from "rxjs";
import { createMachine, interpret } from "xstate";
import { Model } from "../Core/Model";

export class ComponentModel extends Model implements IComponentModel {
    protected _context: any;

    protected _stateSchema: any;
    protected _stateMachine: any;
    protected _stateService: any;

    public get context(): any {
        return this._context;
    }

    public get key(): string {
        return "";
    }

    public get stateMachine(): any {
        return this._stateMachine
    }

    public get stateService(): any {
        return this._stateService
    }

    public get stateSchema(): any{
        return this._stateSchema;
    }

    constructor(name: string) {
        super(name);

        this._context = this.createStateContext();

        this._stateSchema = this.createStateSchema();

        this._stateMachine = this.createStateMachine(name);

        this._stateService = interpret(this._stateMachine);

        this._stateService.start();
    }

    public sendAction(action: string): void {
        this._stateService.send(action);
    }

    protected createStateContext(): any {
        return {
            state: 0
        }
    }

    protected createStateSchema(): any {
        return{

        }
    }

    protected createStateMachine(name: string): any {

        return createMachine({
            id: name + "StateMachine",
            initial: 0,
            context: this._context,
            ...this._stateSchema,
        });
    }
}