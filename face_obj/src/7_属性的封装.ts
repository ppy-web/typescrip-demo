(function(){
  class Person {
    // ts可以在属性前写修饰符 public(默认值，可以在任意位置修改) 
    // private 私有属性，只能在类内部进行修改

    public name: string;
    private _age:number;

    constructor(name:string ,age:number) {
      this.name = name;
      this._age = age;
    }
    get() {
      return this._age
    }
    set(val:number) {
      if(val>0){
        this._age = val
      }
     
    } 
  }
  const person1 = new Person("123", 213);
  person1.set(88)
  console.log(person1);
  class A {
    private long: string;
    protected color: string;
    constructor(color:string,long: string){
      this.color = color
      this.long = long
    }
  }
  // 定义A时使用语法糖
  class AA {
    constructor(public color:string){

    }
  }
  class B extends A {
    test() {
      console.log(this.color);
    }
  }
  const CC =new AA("绿")
  const BC = new B('红','180cm')
  BC.test()
  console.log(CC, 'CC的语法糖');
})();