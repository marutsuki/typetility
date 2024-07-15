import { Complete } from '..';

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
 *  This would give a compilation error.
 * 
 *  const test: Complete<Obj> = {
        a: 'abc',
        // This value wouldn't be accepted
        b: undefined,
        c: {
            d: [1, 2, 3],
            // This value wouldn't be accepted
            e: undefined,
            f: {
                // This value wouldn't be accepted
                g: undefined,
            },
        },
    };

 */
const test: Complete<Obj> = {
    a: 'abc',
    b: 'abc',
    c: {
        d: [1, 2, 3],
        e: true,
        f: {
            g: 'test',
        },
    },
};

console.info(test);
