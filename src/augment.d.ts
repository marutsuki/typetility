import { CombineEntries } from './object';

type VisitorEntries<T extends object, R> = {
    [P in keyof T]: P extends string
        ? {
              key: `visit${Capitalize<P>}`;
              value: (val: T[P]) => R;
          }
        : never;
}[keyof T];

export type Visitor<T extends object, R = void> = CombineEntries<
    VisitorEntries<T, R>
>;
