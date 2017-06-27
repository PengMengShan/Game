// 飞机类
(function(){
    var Plane = window.Plane = function(x, y) {
    this.x = x
    this.y = y;
    this.arc = 0;
    this.score = 0;
    this.Hscore = localStorage.getItem("score");// 存档
    this.die = 0;
    this.timerL;
    this.speed = 2;
    this.timerR;
    this.k1 = 1;
    this.k2 = 1;
    this.k3 = 1;
    this.t = 0;
};

// 画飞机
 Plane.prototype.dr = function() {
    var ctx = game.ctx2;
    ctx.save();
    ctx.translate(this.x + 30 / 2, this.y + 50 / 2);
    ctx.rotate(this.arc);
    ctx.beginPath();
    ctx.globalAlpha=0.6;
    ctx.fillStyle = "red";
    ctx.moveTo( - 12+20, -20+30);
    ctx.lineTo(0+20, -14+30);
    ctx.lineTo(12+20, -20+30);
    ctx.lineTo(0+20, 20+30);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.globalAlpha=1;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "#fff";
    ctx.moveTo( - 15, -25);
    ctx.lineTo(0, -17);
    ctx.lineTo(15, -25);
    ctx.lineTo(0, 25);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle ="red";
    ctx.moveTo(0, -17);
    ctx.lineTo(0, 25);
    ctx.stroke();
    ctx.restore();
}

// 移动飞机
 Plane.prototype.move = function(fx) {
    switch (fx){　　　　
    case "R":
        if (this.k1) {
            this.timerR = setInterval(function() {
            if(game.fj.arc <= Math.PI/2){
                game.fj.arc += Math.PI / 100;
            }
                game.fj.k1 = 0;
            } ,20)

        }
        break;　　　　
    case "L":
        if (this.k2) {
            this.timerL = setInterval(function() {
            if(game.fj.arc >= -Math.PI/2){
                game.fj.arc -= Math.PI / 100;}
                game.fj.k2 = 0;
            },20)

        }
        break;　
        　　
    case "CR":
        clearInterval(this.timerR);
        this.k1 = 1;
        break;　　　　
    case "CL":
        clearInterval(this.timerL);
        this.k2 = 1;
        break;

    }
    　
   　　　
}
//飞出屏幕死
 Plane.prototype.checkborder = function(screenWidth, screenHeight) {
    if (this.x <= 15||this.x >= 510-50) {
        this.die=1;
         document.querySelector("#jieshu").load();
         document.querySelector("#jieshu").play();
        }
}
// 飞机屏幕移动d
 Plane.prototype.moved = function() {
    var _s = (this.speed+(Math.PI/2-Math.abs(this.arc))*(this.speed/5)) * Math.cos(this.arc);
    this.x -= (this.speed+(Math.PI/2-Math.abs(this.arc))*(this.speed/5))  * Math.sin(this.arc);
    if(this.y<300){
         this.y += _s;
    }else{
            game.gy-=_s;
            if(game.gy<=-705){
                game.gy+=1410;
            }
      game.gy2-=_s;
        if(game.gy2<=-705){
                game.gy2+=1410;
        }
    }
        this.score+=Math.round(_s);
        this.t += Math.round(_s);
        if(this.t >=420){
             drWall();
             this.t=0;
             this.speed+=0.3;
        document.querySelector("#feiji").load();
        document.querySelector("#feiji").play();
       }
}
})()
