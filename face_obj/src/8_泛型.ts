// function fn(a:any):any{
//   return a
// }

// 定义函数或类时，遇到类型不明确的可以用泛型
function funType<K>(a: K): K{
  return a
}    // a的类型时K

// 直接调用具有泛型的函数
 funType(100); // 不指定泛型，自动判断
 funType<string>('Jiao'); // 指定泛型

 interface Inter{ 
   len: number;
 }

 // 1、在函数中实现泛型
 // R extends Inter 泛型R必须是Inter的实现类（子类）
 function fn2 <R extends Inter>(a: R):number {
   return a.len
 }
 fn2({len:122})
 // 2、在类中实现泛型
 class fanClass<E>{
  constructor(public name:E){
    this.name = name
  }
 }
 const mc =new fanClass<string>("name");