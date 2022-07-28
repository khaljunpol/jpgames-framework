import { IGame } from "../Game/IGame";

export interface ILauncher {

  game: IGame;

  init(game: IGame): void;
  createUI(): void;
}
