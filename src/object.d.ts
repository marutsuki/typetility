export type Complete<T extends object> = {
    [P in keyof T]-?: T[P] extends object ? Complete<T[P]> : T[P];
};

export type Incomplete<T extends object> = {
    [P in keyof T]?: T[P] extends object ? Incomplete<T[P]> : T[P];
};

export type Reverse<T extends Record<keyof T, T[keyof T]>> = {
    [P in keyof T as T[P]]: P;
};

export type Entry = {
    key: string | symbol | number;
    value: unknown;
};

export type Entries<T extends object> = {
    [P in keyof T]: {
        key: P;
        value: T[P];
    };
}[keyof T];

export type CombineEntries<E extends Entry> = {
    [P in E as P['key']]: P['value'];
};

export type IncludeTypes<T, I> = T extends I
    ? T
    : T extends object
      ? CombineEntries<
            Extract<
                Entries<T>,
                {
                    key: keyof T;
                    value: I;
                }
            >
        >
      : never;

export type ExcludeTypes<T extends object, O> = T extends O
    ? never
    : T extends object
      ? CombineEntries<
            Exclude<
                Entries<T>,
                {
                    key: keyof T;
                    value: O;
                }
            >
        >
      : never;
