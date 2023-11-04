import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import { TStoreState } from '../types/store';
import { createDashSlice } from '../(internal)/dash/dashSlice';

export const useAppStore = create<TStoreState>()(
    devtools((...a) => ({
        dash: createDashSlice(...a),
    }))
)