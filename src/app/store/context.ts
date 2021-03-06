import { IAction } from "./actions";
import { IAppState, initState } from "./AppState";

export interface IAppContext {
  dispatch: (...actions: IAction<any, any>[]) => void;
  state: IAppState
}

export const initContext: IAppContext = {
  dispatch: () => { },
  state: initState
};
