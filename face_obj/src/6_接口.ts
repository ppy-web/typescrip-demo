(function () {
  // 描述一个对象的类型,对类型做出限制,不可重复声明
  type myType = {
    name: string,
    age: number
  };
  const obj: myType = {
    name: 'ddd',
    age: 123
  };

  // 接口用来定义一个类结构，同时也可以当作类型声明去使用，可以重复声明
  interface myInterface {
    name: string,
    age: number
  }
  interface myInterface {
    gender: string
  }

  const Obj: myInterface = {
    name: "sss",
    age: 111,
    gender: "uhbaiousdf"
  }

  // 接口中所有属性都不能有实际的值，只定义结构，所有方法都是抽象方法
  interface mInter {
    name: string,
    say(): void
  }

  // 定义类时实现一个接口,实现了一个规范，接口是对类的一个限制，定义了一个标准（满足要求才能使用），与抽象方法有点像
  class Myclass implements mInter {
    name: string;
    constructor(name: string) {
      this.name = 'name';
    }
    say() {
      console.log('hello');

    }
  }
})();