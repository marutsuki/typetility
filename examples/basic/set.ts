import { Complement, Difference, Negate } from "../../src/types/basic/number";

type StuffIDontWant = "a" | 2 | false;

// Compile error
const stuffIWant: Negate<StuffIDontWant> = "a";
// const stuffIWant: Complement<StuffIDontWant> = 2;
// const stuffIWant: Complement<StuffIDontWant> = false;
// const stuffIWant: Complement<StuffIDontWant> = "b";
console.info(stuffIWant);

type SetA = "a" | "b" | "c";

type SetB = "b" | "c";

type Diff = Difference<SetA, SetB>;

const c: Diff = "a";