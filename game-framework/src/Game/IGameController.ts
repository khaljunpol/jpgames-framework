import { IController } from "../Core/IController";
import { IGameModel } from "./IGameModel";
import { IGameView } from "./IGameView";

export interface IGameController extends IController {
  gameView: IGameView;
  gameModel: IGameModel;
  
  init(): void;
  start(): void;
  sendAction(action: string): void;
}
