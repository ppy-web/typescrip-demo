// 蛇

class Snake{
  element: HTMLElement;
  head:HTMLElement;
  bodies: HTMLCollection;
  constructor() {
    this.element = document.getElementById('snake');
    // 获取头元素
    this.head = document.querySelector('#snake>div') as HTMLElement;
    // 动态获取所有div
    this.bodies = this.element.getElementsByTagName('div')

  }
  get X(){
    return this.head.offsetLeft;
  }
  get Y(){
    return this.head.offsetTop;
  }

  set X(off:number){
    this.head.style.left = off+'px';
  }
  set Y(off:number){
    this.head.style.top = off+'px';
  }

  // 蛇增加身体的方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }
}