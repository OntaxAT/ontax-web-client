
/**
 * A very basic entity type used as a base for other entities.
 */
export type TEntity = {
    id: string;
}

export type TAdressableEntity = TEntity & {
    username: string;
}
