import { IModel } from "jpgames-game-framework";
import { from, Observable, Subject } from "rxjs";


export class Model implements IModel {
    protected _name: string;
    protected _currentState: any;
    protected _observable: any;
    protected _subject: Subject<any>;

    public get name(): string {
        return this._name;
    }
    public get currentState(): any {
        return this._currentState;
    }
    public get observable(): any {
        return this._observable;
    }
    public get subject(): any {
        return this._subject;
    }

    constructor(name: string) {
        this._name = name;
        this._observable = new Observable((subscriber) => {
            subscriber.next(this._currentState);
        });
    }

    public init(stateMachineService: any): void {
        // Create observable from state machine service
        this._observable = from(stateMachineService);
        // Create a subject so it is subscribeable with multiple subscribers
        this._subject = new Subject<any>();
        // Attach observable to subject
        this._observable.subscribe(this._subject);

        this._subject.subscribe({ next: (state) => this.onUpdateState(state) });
    }

    public sendAction(action: string) {
        // console.warn("extend this class");
    }

    public sendActions(action: string[]) {
        // console.warn("extend this class");
    }

    protected onUpdateState(state: any) {

    }

}