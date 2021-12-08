class Dog {
  name: string
  age: number;
  // 构造函数，会在对象创建时调用
  constructor(name: string, age: number) {

    this.name = name;
    this.age = age;
    console.log('构造函数');
  }

  bark() {
    // 在方法中可以通过this表示当前调用方法的对象
    console.log(this.name);
    
    // alert('wwawaawa')
  }
}


const dog = new Dog('小黑',2);
const dog1 = new Dog('小白', 1);
// const dog2 = new Dog();
// console.log();
dog1.bark()
// console.log(dog1);
// console.log(dog2);
