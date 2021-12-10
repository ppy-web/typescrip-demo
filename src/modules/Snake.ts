// 蛇

class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollectionOf<HTMLElement>; // 泛型
  constructor() {
    this.element = document.getElementById('snake')!;
    // 获取头元素
    this.head = document.querySelector('#snake>div') as HTMLElement;
    // 动态获取所有div
    this.bodies = this.element.getElementsByTagName('div')

  }
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  set X(offset: number) {
    if (this.X === offset) return
    // 蛇不可以掉头
    if (this.bodies[1] && this.bodies[1].offsetLeft === offset) {
      // offset>X说明想向右掉头，则需要-10使方向回正
      offset = offset > this.X ? this.X - 10 : this.X + 10;
    }

    if (offset < 0 || offset > 290) {
      // 满足条件则蛇撞墙了，抛出异常
      throw new Error('蛇撞墙了！')
    }

    // 移动身体
    this.moveBody();
    this.head.style.left = offset + 'px';
    // 检查有没有撞自己
    this.checkHeadBody();
  }
  set Y(offset: number) {
    if (this.Y === offset) return

    // 蛇不可以掉头
    if (this.bodies[1] && this.bodies[1].offsetTop === offset) {
      // offset>X说明想向下掉头，则需要-10使方向回正
      offset = offset > this.Y ? this.Y - 10 : this.Y + 10;
    }

    if (offset < 0 || offset > 290) {
      // 满足条件则蛇撞墙了
      throw new Error('蛇撞墙了！')
    }
    // 移动身体
    this.moveBody();
    this.head.style.top = offset + 'px';
    // 检查有没有撞自己
    this.checkHeadBody();
  }

  // 蛇增加身体的方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }
  // 蛇移动身体
  moveBody() {
    // 从后往前遍历获取蛇的所有身体
    // 将后面的身体设置为前面身体的位置
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1]).offsetLeft;
      let Y = (this.bodies[i - 1]).offsetTop;

      (this.bodies[i]).style.left = X + 'px';
      (this.bodies[i]).style.top = Y + 'px';

    }
  }
  // 获取所有身体，检查是否和头部相撞
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      if (this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop) {
        // 进入判断，说明撞到了身体
        throw new Error('撞到自己了~~')
      }
    }
  }
}

export default Snake