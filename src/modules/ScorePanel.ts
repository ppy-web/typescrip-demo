  // 计分板

  class ScorePanel{   
    score=0;
    level=1; 
    scoreELe: HTMLElement;
    levelELe: HTMLElement;

    // 设置变量限制等级
    constructor(public maxlevel:number = 10, public upscore: number=10){
      this.scoreELe=document.getElementById('score')!;
      this.levelELe=document.getElementById('level')!;
    }
    // 设置加分方法
    ScoreAdd() {
      this.scoreELe.innerHTML= ++this.score+ '';
      this.score%this.upscore==0&&this.LevelUp();
    }
    // 提升等级
    LevelUp() {
      if(this.level<this.maxlevel){
      this.levelELe.innerHTML= ++this.level+ '';
      }
    }
  }

  // const scp = new ScorePanel(8,20);
  // for (let index = 0; index < 300; index++) {
  //   scp.ScoreAdd();
  // }

  export default ScorePanel