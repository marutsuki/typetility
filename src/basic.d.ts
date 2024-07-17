export type Tail<T> = List<T> | undefined;

export type List<T> = {
    head: T;
    tail?: Tail<T>;
};

export type Entry = {
    key: string | number | symbol;
    value: unknown;
};

export type Templatable = string | number | bigint | boolean | null | undefined;

export type Pair<T> = [T, T];

export type DistinctPair<T, K1 = T, K2 = T> = K1 extends Templatable
    ? K2 extends Templatable
        ? K1 extends K2
            ? never
            : [K1, K2]
        : never
    : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T extends any[]> =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: T) => any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Class = new (...args: any[]) => any;
