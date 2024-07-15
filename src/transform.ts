export type Complete<T extends object> = {
    [P in keyof T]-?: T[P] extends object ? Complete<T[P]> : T[P];
};

export type Incomplete<T extends object> = {
    [P in keyof T]?: T[P] extends object ? Incomplete<T[P]> : T[P];
};
