import { Reverse } from '../../object';

type Obj = {
    A: 'AVal';
    B: 'BVal';
    C: 'CVal';
};

const test: Reverse<Obj> = {
    AVal: 'A',
    BVal: 'B',
    CVal: 'C',
};

console.info(test);
