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

export type IncludeTypes<T, I> = T extends I
    ? T
    : T extends object
      ? {
            [P in Extract<
                Entries<T>,
                {
                    key: keyof T;
                    value: I;
                }
            > as P['key']]: P['value'];
        }
      : never;

export type ExcludeTypes<T extends object, O> = T extends O
    ? never
    : T extends object
      ? {
            [P in Exclude<
                Entries<T>,
                {
                    key: keyof T;
                    value: O;
                }
            > as P['key']]: P['value'];
        }
      : never;
