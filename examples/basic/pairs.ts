import { DistinctPair, Pair } from '../../src/types/basic';

type Letter = 'A' | 'B' | 'C';

const pairs: Pair<Letter> = ['A', 'B'];

console.info(pairs);

const distinctPairs: DistinctPair<Letter> = ['A', 'B'];

console.info(distinctPairs);