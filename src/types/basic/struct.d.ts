import { Templatable } from './misc';

/**
 * The tail of a recursive list.
 */
type Tail<T> = List<T> | undefined;

/**
 * Defines a tail recursive list.
 */
export type List<T> = {
    head: T;
    tail?: Tail<T>;
};

/**
 * Defines a object with a `key` and `value` entry.
 */
export type Entry = {
    key: string | number | symbol;
    value: unknown;
};

/**
 * Defines a 2-valued tuple of a specific type.
 *
 * @template T1 the type of the first element
 * @template T2 the type of the second element, defaults to `T1`
 */
export type Pair<T1, T2 = T1> = [T1, T2];

type _DistinctPair<T1, T2, K1 = T1, K2 = T2> = K1 extends Templatable
    ? K2 extends Templatable
        ? K1 extends K2
            ? never
            : [K1, K2]
        : never
    : never;

/**
 * Defines a 2-valued tuple where the values are distinct.
 *
 * @template T1 the type of the first element
 * @template T2 the type of the second element, defaults to `T1`
 */
export type DistinctPair<T1, T2 = T1> = _DistinctPair<T1, T2>;
