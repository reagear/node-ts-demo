import { add } from './math/add';
import { minus, addOne } from './math/minus';
import * as os from 'os';
import * as path from 'path';
// @ts-ignore
import * as fuck from './fuck';
import './study-test'

/**
 * 测试方法
 */
function f(): void {
    let a = 1;
    let b = 2;
    let result: number;
    result = add(a, b);
    result = minus(result, b);
    console.log(result);
    console.log(os.arch());
    let pathname = path.join(__dirname, '../a', 'b', 'c');
    console.log(pathname);
    fuck.sayHello();
}

f();
