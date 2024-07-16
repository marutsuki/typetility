export type FlatEntries<
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

/**
 * @todo tsc takes a very long time to apply this utility type.
 */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
export type Flat<T extends object> = {
    [P in FlatEntries<T> as P['key']]: P['value'];
};
