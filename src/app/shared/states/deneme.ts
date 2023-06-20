import {StoreOptions} from "@ngxs/store/src/symbols";

export namespace Deneme{
  export const NAME='DenemeState';
  export const DEFAULTS={
    plant:null,
    animal:null,
    city:null
  } as State

  export const OPTIONS={name:NAME, defaults:DEFAULTS} as StoreOptions<State>


export interface State{
  animal:any,
  plant:any,
  city:any
}

}
