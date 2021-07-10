import path from "path";

interface A {
    a: string;
}

type B = A & { b: string };

type cType = {
    [key in keyof B]: string;
};

let c: cType = {
    a: '1',
    b: '2'
};

console.log(path.extname('./index.less'));

type M = Record<'a' | 'b', string>;
const m: M = {
    a: '2',
    b: '3'
};

function tuple<T extends unknown[]>(...ts: T): T {
    return ts;
}

const a = tuple(1, true, '123');
const b = [1, true, '123'];

interface Fuck<T> {
    a: string;
    b: T;
}

const fuckNumber: Fuck<number> = {
    a: '1',
    b: 1
};