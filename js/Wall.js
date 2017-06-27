// 阻碍墙类
(function(){
    var Wall = window.Wall = function(y, width, hight, type) {
    this.y = y;
    this.width = width;
    this.hight = hight;
    this.type = type;
    this.die=0;
};
// 绘制墙
Wall.prototype.dr = function() {
    var ctx = game.ctx2;
    ctx.save();
    if (this.type == 1) {
        ctx.beginPath();
        ctx.strokeStyle = "skyblue";
        ctx.lineWidth = 8;
        ctx.globalAlpha = 0.4;
        ctx.moveTo(0, this.y + 30);
        ctx.lineTo(this.width + 20, this.y + 30);
        ctx.arcTo(this.width + 40, this.y + 30, this.width + 40, this.y + 50, 20);
        ctx.lineTo(this.width + 40, this.y + 30+this.hight);
        ctx.arcTo(this.width + 40, this.y + 70+this.hight, this.width, this.y + 70+this.hight, 20);
        ctx.lineTo(0, this.y + 70+this.hight);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#1E1D1D";
        ctx.lineWidth = 10;
        ctx.moveTo(0, this.y);
        ctx.lineTo(this.width, this.y);
        ctx.arcTo(this.width + 20, this.y, this.width + 20, this.y + 20, 20);
        ctx.lineTo(this.width + 20, this.y + this.hight);
        ctx.arcTo(this.width + 20, this.y + 40+ this.hight, this.width, this.y + 40+ this.hight, 20);
        ctx.lineTo(0, this.y  + 40+ this.hight);
        ctx.stroke();
    } else if (this.type == 2) {
        ctx.beginPath();
        ctx.strokeStyle = "skyblue";
        ctx.lineWidth = 8;
        ctx.globalAlpha = 0.4;
        ctx.moveTo(510, this.y + 30);
        ctx.lineTo(510 - this.width + 20, this.y + 30);
        ctx.arcTo(510 - this.width, this.y + 30, 510 - this.width, this.y + 50, 20);
        ctx.lineTo(510 - this.width, this.y+ 30+this.hight);
        ctx.arcTo(510 - this.width, this.y + 70+this.hight, 510 - this.width + 20, this.y  + 70+this.hight, 20);
        ctx.lineTo(510, this.y + 70+this.hight);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.strokeStyle =  "#1E1D1D";
        ctx.lineWidth = 10;
        ctx.moveTo(510, this.y);
        ctx.lineTo(510 - this.width, this.y);
        ctx.arcTo(510 - this.width - 20, this.y, 510 - this.width - 20, this.y + 20, 20);
        ctx.lineTo(510 - this.width - 20, this.y + this.hight);
        ctx.arcTo(510 - this.width - 20, this.y  + 40+ this.hight, 510 - this.width, this.y + 40+ this.hight, 20);
        ctx.lineTo(510, this.y  + 40+ this.hight);
        ctx.stroke();
    }
       ctx.restore();

}

// 检测碰撞墙就死
Wall.prototype.Touch = function(a, b) {
    if (this.type == 1) {
        if (b < (this.y + this.hight + 15) && b > this.y - 40 && a > 0 - 25 && a < this.width + 15) {
            game.fj.die = 1;
            document.querySelector("#baoz").load();
            document.querySelector("#baoz").play();
        }
    } else if (this.type == 2) {
        if (b < (this.y + this.hight + 15) && b > this.y - 40 && a > 510 - this.width - 40 && a < 510 + 15) {
            game.fj.die = 1;
            document.querySelector("#baoz").load();
            document.querySelector("#baoz").play();

        }
    }
}
   //墙移动的间距
Wall.prototype.move = function() {
    if(this.y>-300){
    this.y -= (game.fj.speed+(Math.PI/2-Math.abs(game.fj.arc))*(game.fj.speed/5)) * Math.cos(game.fj.arc);
    }else{
        this.die=1;
        }
}
})()


