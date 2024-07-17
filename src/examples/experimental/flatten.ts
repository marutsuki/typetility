import { Flat } from '../../types/experimental';

type RecType = {
    abc: number;
    rec: RecType;
    nested: {
        nestedProp: boolean;
        nestedRec: RecType;
    };
};

type Type = {
    a: string;
    b: number;
    c: boolean;
    d: {
        nestedA: string;
        nestedB: number;
        e: {
            maru: number[];
        };
    };
};

type FlatType = Flat<Type>;

type FlatRecType = Flat<RecType>;

const flatType: FlatType = {
    '.a': '',
    '.b': 0,
    '.c': false,
    '.d.nestedA': '',
    '.d.nestedB': 0,
    '.d.e.maru.length': 0,
};

const flatRecType: FlatRecType = {
    '.abc': 0,
    '.nested.nestedProp': false,
};

console.info(flatType, flatRecType);
