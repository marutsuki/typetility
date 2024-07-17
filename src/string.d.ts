export type Split<S extends string> = S extends ''
    ? []
    : S extends `${infer H}${infer T}`
      ? [H, ...Split<T>]
      : never;

export type Join<S extends string[]> = S extends []
    ? ''
    : S extends [infer H, ...infer T]
      ? H extends string
          ? T extends string[]
              ? `${H}${Join<T>}`
              : `${H}`
          : never
      : never;

export type Capitalize<S extends string> =
    Split<S> extends [infer L, ...infer T]
        ? L extends string
            ? T extends string[]
                ? Join<[Uppercase<L>, ...T]>
                : Uppercase<L>
            : never
        : never;

export type FirstWord<S extends string, I = false> =
    Split<S> extends [infer H, ...infer T]
        ? H extends string
            ? H extends Uppercase<H>
                ? I extends false
                    ? T extends string[]
                        ? `${H}${FirstWord<Join<T>, true>}`
                        : H
                    : ''
                : T extends string[]
                  ? `${H}${FirstWord<Join<T>, I>}`
                  : H
            : ''
        : '';

export type CamelList<S extends string, I = true> = S extends ''
    ? []
    : FirstWord<S, I> extends infer NextWord
      ? NextWord extends string
          ? Split<S> extends [...Split<NextWord>, ...infer Rest]
              ? Rest extends string[]
                  ? Rest extends []
                      ? [NextWord]
                      : [NextWord, ...CamelList<Join<Rest>, false>]
                  : [NextWord]
              : []
          : []
      : [];

export type GetterName<S extends string> =
    CamelList<S, true> extends infer L
        ? L extends string[]
            ? Join<['get', Capitalize<Join<L>>]>
            : never
        : never;

export type SetterName<S extends string> =
    CamelList<S, true> extends infer L
        ? L extends string[]
            ? Join<['set', Capitalize<Join<L>>]>
            : never
        : never;
