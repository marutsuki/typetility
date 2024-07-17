import { GetterName, SetterName } from '../../src/types/string';

const getter: GetterName<'property'> = 'getProperty';

console.info(getter);

const setter: SetterName<'property'> = 'setProperty';

console.info(setter);
