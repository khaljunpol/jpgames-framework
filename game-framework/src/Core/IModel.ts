export interface IModel {
    name: string;
    currentState: any;
    observable: any;
    subject: any;

    init(stateMachineService: any): void;
    sendAction(action: string);
    sendActions(action: string[]);
}
