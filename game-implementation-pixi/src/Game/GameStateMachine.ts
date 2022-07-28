import { createMachine, interpret } from "xstate";
import { createModel } from "xstate/lib/model";
import { Game } from "./Game";


export class GameStateMachine {
    // Singleton
    private static instance: GameStateMachine;
    public static getInstance(): GameStateMachine {
        if (!GameStateMachine.instance) {
            GameStateMachine.instance = new GameStateMachine("AutoCreatedName");
        }

        return GameStateMachine.instance;
    }

}
