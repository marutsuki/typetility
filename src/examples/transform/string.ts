import {
    CamelList,
    Capitalize,
    FirstWord,
    GetterName,
    Join,
    SetterName,
    Split,
} from '../../string';

type AString = 'maru';
const split: Split<AString> = ['m', 'a', 'r', 'u'];

console.info(split);

type AList = ['m', 'a', 'r', 'u'];
const join: Join<AList> = 'maru';

console.info(join);

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

const getter: GetterName<'property'> = 'getProperty';

console.info(getter);

const setter: SetterName<'property'> = 'setProperty';

console.info(setter);