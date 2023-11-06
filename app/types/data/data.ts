import { TPaginationData } from "./pagination";

/**
 * State of async data
 */
export type TAsyncDataState = 'inactive' | 'loading' | 'success' | 'error';

/**
 * Async data type with additional state information
 */
export type TAsyncData<T> = {
    data: T | undefined;
    state: TAsyncDataState;
}

export type TPaginatedAsyncData<T> = TAsyncData<T> & TPaginationData;