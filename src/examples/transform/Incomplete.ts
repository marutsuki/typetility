import { Incomplete } from '../../';

type Obj = {
    a: string;
    b?: string;
    c: {
        d: number[];
        e?: boolean;
        f: {
            g?: string;
        };
    };
};

/**
 * All nested properties can be set to ```undefined```.
 */
const test: Incomplete<Obj> = {
    a: undefined,
    b: undefined,
    c: {
        d: undefined,
        e: undefined,
        f: {
            g: undefined,
        },
    },
};

console.info(test);