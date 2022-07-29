export interface IModel {
    name: string;

    currentState: any;

    sendAction(action: string);
    sendActions(action: string[]);
}
