import {Action, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {DenemeAction, DenemeAction1} from "../actions/deneme.action";
import {Deneme} from "./deneme";

@State<Deneme.State>(Deneme.OPTIONS)

@Injectable()
export class DenemeState{
  constructor() {
  }

  @Action(DenemeAction)
  denemeAction(
    {patchState,getState}:StateContext<Deneme.State>,
    {payload}:DenemeAction){
    return  patchState({animal:payload})
  }

  @Action(DenemeAction1)
  denemeAction1(
    {patchState,getState,setState}:StateContext<Deneme.State>,
    {payload}:DenemeAction1){
    const state=getState()
    return  setState({...state,animal:payload})
  }
}
