(function(){
  // 父类 通过继承可以将多个类的公共部分提取出来
  class Animal {
    name:string;
    constructor(name:string){
      this.name=name
    }
    say(){
      console.log('动物');
    }
  }

  // extends继承或扩展，子类拥有父类所有方法和属性
  class Dog extends Animal{

    // 子类可以覆盖父类的方法或属性（方法重写）
    say(){
      console.log('汪汪汪~');
    };
    run(){
      console.log(`${this.name}在跑`);
      
    }
  }
  
  class Miao{
    name:string;
    constructor(name:string){
      this.name=name
    }
    say(){
      console.log('miaomiao');
    }
  }

  const dog1=new Dog('大王');
  const miao=new Miao('小喵');

  console.log(dog1);
  console.log(miao);
  dog1.say();
  dog1.run();
  
})()
