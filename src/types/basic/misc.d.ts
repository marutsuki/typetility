/**
 * Defines a type that can be placed in template strings.
 */
export type Templatable = string | number | bigint | boolean | null | undefined;

/**
 * Defines a constructor type from a sequence of argument types.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T extends any[]> =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: T) => any;

/**
 * Defines a type that all classes follow
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Class = new (...args: any[]) => any;
