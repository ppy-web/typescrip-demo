(function(){
  //  abstract class 抽象类诞生即为父类，用来被其他人继承
  abstract class Animal{
    name:string;
    constructor(name:string){
      this.name=name
    };

    // 抽象类中可以添加抽象方法,只定义结构,没有方法体
    abstract say():void
  }
  class Dog extends Animal{
    // 子类的构造函数会覆盖父类的，所以要调用父类的构造函数
    say(){
      console.log('wawawa!'); 
    }
  }
  const dog = new Dog('旺财');
  dog.say();
})()