import { StateCreator } from "zustand";
import { TDashSlice } from "../(internal)/dash/types/dashState"


export type TStoreState = {
    dash: TDashSlice;
}

export type TStoreSlice<T> = StateCreator<
    TStoreState,
    [['zustand/devtools', never]],
    [],
    T
>;