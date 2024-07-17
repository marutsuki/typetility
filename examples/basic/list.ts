import { List, Tail } from '../../src/types/basic';

const test: List<string> = {
    head: 'abc',
    tail: {
        head: 'def',
        tail: {
            head: 'ghi',
        },
    },
};

let node: Tail<string> = test;
let out = '';
while (node !== undefined) {
    out = out.concat(test.head);
    node = test.tail;
}

console.info(out);
