console.log('Hello Ts!');  // tsc ./XXX.ts ts编译成js

// 声明变量a，类型为number
let a: number;
a = 10;
a = 23;

let c: boolean = false;
let d = true;


function sum(ap: number, bp: number): number {
  return ap + bp;
}

console.log(sum(123, 456,));
let result = sum(123, 3432);

let zml: 10; //字面量

let sex: 'meal' | 'female';  // 联合类型
let ty: number | boolean;

let an: any; //任意类型，关闭这个变量的类型检测。显式/隐式

let e: unknown; // unknown  -  类型安全的any
e = 'wewewer';
let s: string;

//类型检查 
if (typeof e === 'string') {
  console.log(e);
  s = e;
}

// 类型断言的两种用法
s = e as string;
s = <string>e

//void return void 返回值

function f(num: number): boolean | number {
  if (num === 1) {
    return true
  } else {
    return 123
  }
  // 没有返回值
  return
  return undefined 
}

// never 永远不会返回结果,用于报错函数
function fn1(): never {
  throw new Error('报错信息')
}

// 对象
let obj: object;
obj = {};
obj = function (){}

// 用来限制对象的属性 必选属性  ?表示属性是可选的 []表示任意的属性
let objb: { name:string; age?:number, [propName: string]:any};

// 用来限制函数结构，类型声明
let objd:(a:number, b:number)=>number

// array 声明的两种方式
let arra: string[]; // 字符串数组

 let arrg: Array<number> // 数字数组

 // 元组， 固定长度数组，存储效率高
 let yuanArr: [string, string, number, boolean];

//enum 枚举,列出所有情况，重命名变量
enum Gender {
  Male = 0,
  Femal = 1
}

let enumttt: {name:string, gender: Gender};
 enumttt = {
  name: '马冬梅',
  gender: Gender.Male
 }

 // & 表示同时满足
 let j:{name:string}&{age:number};

 // 类型别名
type myT = string; // myT代替string
type myT2 = 1|2|3|4|5|6 // myT2 代替 1|2|3|4|5|6
 let K: 1|2|3|4|5|6;
 let k3:myT2;
 console.log(k3);
 

 // ts到js需要编译后才能被浏览器使用，使用编译选项可以更高效的编译

 // 编译配置相关













