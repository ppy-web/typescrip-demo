// 游戏控制器
import Snake from './Snake'
import ScorePanel from './ScorePanel'
import Food from './Food'

class GameControl {
  snake: Snake;
  scorePanel: ScorePanel;
  food: Food;
  direciton: string = ''; // 存储按键方向
  isLive: boolean = true; // 蛇是否活着，游戏是否结束

  constructor() {
    this.snake = new Snake;
    this.scorePanel = new ScorePanel(10,10);
    this.food = new Food;
    this.init(); // 游戏开始
  }

  // 游戏初始化方法
  init() {
    // 绑定键盘按下事件
    document.addEventListener('keydown', this.keyDownHander.bind(this)) // 利用bind绑定this是的this始终是当前GameControl对象
    // 调用run()使蛇移动
    this.run();
  }
  // 键盘按下的响应函数
  keyDownHander(e: KeyboardEvent) {
    // 需要检查e是否合法（用户是否按了正确的按键）
    // console.log(e.key); //ArrowUp, ArrowLeft, ArrowRight, ArrowDown
    this.direciton = e.key;
    // this.run();
  }

  // 创建一个让蛇移动的方法
  run() {
    // 根据（this.direction）来使蛇的位置改变
    // 
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direciton) {
      case "ArrowUp":
      case "Up":
        // case "W":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        // case "S":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // case "A":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        // case "D":
        X += 10
        break;
      default:
        break
    }
    // 蛇是否吃到了食物
    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (err: any) {
      // 捕捉异常
      alert(err.message + "GAME OVER!");
      this.isLive = false;
    }

    // 定时递归
    this.isLive && setTimeout(this.run.bind(this), 180 - (this.scorePanel.level - 1) * 15);
  }
  // 蛇是否吃到了食物
  checkEat(X: number, Y: number) {
    if(X === this.food.X && Y === this.food.Y){
      this.food.chenge();
      this.scorePanel.ScoreAdd();
      this.snake.addBody();
    }
  }
}

export default GameControl