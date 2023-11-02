
/**
 * The activity grid
 */
export type TActivityGrid = {
    items: TActivityGridItem[];
    startDate: Date;
    endDate: Date;
    max: number;
    min: number;
}

/**
 * A single item in the activity grid
 */
export type TActivityGridItem = Record<string & Date, number>;