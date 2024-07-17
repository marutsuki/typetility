import { Constructor } from '../../src';

class Test {
    public constructor(
        private a: string,
        private b: number[],
    ) {}
}

function init(ctor: Constructor<[string, number[]]>) {
    return new ctor('a', [1, 2, 3]);
}

init(Test);
