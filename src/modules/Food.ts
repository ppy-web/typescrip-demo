// import Snake from "./Snake";
// 定义类
class Food{
  // 定义属性表示元素
  element: HTMLElement;
  // snake: Snake;
  constructor() {
    this.element = document.getElementById("food")!; // !表示该元素不会为null
    // this.snake = new Snake;
  }
  // 定义获取食物XY坐标的方法
  get X(){
    return this.element.offsetLeft;
  }
  get Y(){
    return this.element.offsetTop;
  }
  chenge() {
    // 生成随机位置 (0-290, 0-290)
    // 蛇每次移动10
    // 食物坐标是整10
    let left = Math.round(Math.random()*29)*10;
    let top = Math.round(Math.random()*29)*10;
    
    // for(let i=1; i< this.snake.bodies.length; i++) {
    //   if(left === this.snake.bodies[i].offsetLeft && top === this.snake.bodies[i].offsetTop) {
    //      left = Math.round(Math.random()*29)*10;
    //      top = Math.round(Math.random()*29)*10;
    //   }
    // }

    this.element.style.left = left+'px';
    this.element.style.top = top+'px';
  }
}
// const foo = new Food();

// console.log(foo.X, foo.Y);
// foo.chenge();
// console.log(foo.X, foo.Y);

export default Food