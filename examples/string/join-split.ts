import { Join, Split } from '../../src/types/string';

type AString = 'maru';
const split: Split<AString> = ['m', 'a', 'r', 'u'];

console.info(split);

type AList = ['m', 'a', 'r', 'u'];
const join: Join<AList> = 'maru';

console.info(join);
