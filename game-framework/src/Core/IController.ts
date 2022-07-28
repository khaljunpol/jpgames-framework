import { IComponentController } from '../Component/IComponentController';
import { IModel } from './IModel';
import { IView } from './IView';

export interface IController {
  view: IView;
  model: IModel;
  name: string;
}
