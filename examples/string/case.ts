import { CamelList, Capitalize, FirstWord } from '../../src/types/string';

type Lower = 'lower';
const capitalized: Capitalize<Lower> = 'Lower';

console.info(capitalized);

type SomeWords = 'HelloMyWorld';
const firstWord: FirstWord<SomeWords> = 'Hello';

console.info(firstWord);

type SomeWords2 = 'helloMyWorld';
const firstWord2: FirstWord<SomeWords2, true> = 'hello';

console.info(firstWord, firstWord2);

type CamelCase = 'getOffMyBoat';
const camelCaseList: CamelList<CamelCase> = ['get', 'Off', 'My', 'Boat'];

console.info(camelCaseList);
