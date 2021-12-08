(function(){
  class Animal{
    name:string;
    constructor(name:string){
      this.name=name
    };
    say(){
      console.log('Hello Super');
    }
  }
  class Dog extends Animal{
    age:number;
    // 子类的构造函数会覆盖父类的，所以要调用父类的构造函数
    say(){
      // super关键字 表示当前类的父类
      super.say()
    }
    constructor(name:string ,age:number){
      super(name);
      this.age=age;
    }
  }
  const dog = new Dog('旺财',2);
  dog.say();
})()