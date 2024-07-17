import { Entry } from './basic';

export type Complete<T extends object> = {
    [P in keyof T]-?: T[P] extends object ? Complete<T[P]> : T[P];
};

export type Incomplete<T extends object> = {
    [P in keyof T]?: T[P] extends object ? Incomplete<T[P]> : T[P];
};

export type Reverse<T extends Record<keyof T, T[keyof T]>> = {
    [P in keyof T as T[P]]: P;
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

type FlatEntries<
    T extends object,
    R = '',
    E = T,
    K = keyof T,
> = R extends string
    ? K extends string
        ? K extends keyof T
            ? T[K] extends E
                ? never
                : T[K] extends object
                  ? FlatEntries<T[K], `${R}.${K}`, E | T[K]>
                  : {
                        key: `${R}.${K}`;
                        value: T[K];
                    }
            : never
        : never
    : never;

export type Flat<T extends object> =
    FlatEntries<T> extends infer EntryList
        ? EntryList extends Entry
            ? {
                  [P in EntryList as P['key']]: P['value'];
              }
            : never
        : never;
