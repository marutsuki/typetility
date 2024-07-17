import { Entries } from '../../src/types/object';

type Type = {
    a: string;
    b: number;
    c: boolean;
};

const aEntry: Entries<Type> = {
    key: 'a',
    value: 'val',
};

const bEntry: Entries<Type> = {
    key: 'b',
    value: 123,
};

const cEntry: Entries<Type> = {
    key: 'c',
    value: true,
};

console.info(aEntry, bEntry, cEntry);
