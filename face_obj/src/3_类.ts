class Person{
  // 实例属性（存到类的属性中）可读写
  name:string = '马冬梅';
  age:number = 5000;
  
  // 类属性，静态属性 可读
  static wuqi:string = '水盆';

  // 只读
  readonly addr:string = '房子' ;

  static readonly nickname='马什么梅';

  // 实例方法  static开头则是类方法
  sayHello() {
    console.log('什么冬梅？');
  }

}

const per = new Person()

console.log(per);
console.log(Person.wuqi); // 静态属性直接通过类访问
// console.log(per.sayHello());

