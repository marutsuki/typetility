import { IncludeTypes, ExcludeTypes } from '../../types/object';

type Type = {
    a: string;
    b: number;
    c: boolean;
    d: {
        a: string;
        b: number;
    };
};

// Include properties of type string
const includeStrings: IncludeTypes<Type, string> = {
    a: 'abc',
};

// Exclude properties of type string
const excludeStrings: ExcludeTypes<Type, string> = {
    b: 0,
    c: false,
    d: {
        a: '',
        b: 0,
    },
};

console.info(includeStrings, excludeStrings);
