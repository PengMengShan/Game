(function(){
    //构造函数
    var Game = window.Game = function(){
        //得到画布
        this.myCanvas = document.getElementById("myCanvas");
        //设置上下文，也设置成为Game的属性
         this.ctx2 = this.myCanvas.getContext("2d");
         this.wallList = [];
         this.fj = null;
         this.stimer = null;
         this.t = [];
         this.leg = 0;
         this.gy = 0;
         this.gy2 = 705;
         this.overt= 0;
        //设置画布的宽度和高度
         this.init();
        //读取所有资源
        this.loadResource(function(){
            //回调函数
        this.ctx2.drawImage(this.R["bg1"],0,0,this.myCanvas.width,this.myCanvas.height);
        this.ctx2.fillText( "彭蒙善出品" + "必属精品" , this.myCanvas.width/2 , this.myCanvas.height*0.95);
        this.ctx2.fillText("    游戏名：" +  "纸飞机下降" + "" + "" , this.myCanvas.width/2.5, this.myCanvas.height*0.1);
        this.ctx2.fillText("作  者" +  "："  + "彭蒙善" , this.myCanvas.width/2.5, this.myCanvas.height*0.17);

        document.querySelector("#beijing").load();
        document.querySelector("#beijing").play();
        });
    }
    //设置画布的宽度和高度
    Game.prototype.init = function(){
        //设置canvas的宽度和高度，适配当前的视口
        this.myCanvas.width = document.documentElement.clientWidth;
        this.myCanvas.height = document.documentElement.clientHeight;
        //要验收，因为要把宽度、高度卡在一个区间内。
        if(this.myCanvas.width > 500){
             this.myCanvas.width = 500;
        }
        if(this.myCanvas.height > 800){
             this.myCanvas.height = 800;
        }
        var left = this.myCanvas.width;
        startBtn.style.left =  left/2 - 75 + "px";
        overBtn.style.left =  left/2 - 75 + "px";


    }
    // 设置一个游戏初始化，每次继续游戏就初始
    Game.prototype.Init = function() {
        this.wallList = [];
        this.fj = null;
        this.t = [];
        this.leg = 0;
        this.overt=0;
        this.gy = 0;
        this.gy2 =705;
        clearInterval(this.stimer);
}
    //读取资源
    Game.prototype.loadResource = function(callback){
        //设置R对象
        this.R = {
               "bg" :"img/bg.jpg",
               "bg1" :"img/bg1.jpg",

        };
        //现在要得到图片的总数
        var imagesAmount = Object.keys(this.R).length;
        //备份this
        var self = this;
        //计数器，加载好的图片个数
        var count = 0;
        //遍历R对象，加载图片
        for(var k in this.R){
            (function(k){
                var image = new Image();
                image.src = self.R[k];
                //监听图片加载完成
                image.onload = function(){
                    //计数
                    count++;
                    //改变R对象，让R对象对应的k的值变为这个图片对象
                    self.R[k] = this;
                    //提示用户
                    self.ctx2.textAlign = "center";
                    self.ctx2.font = "bold 25px 宋体";

                    self.ctx2.fillStyle = "gold";

                    //清屏
                    self.clear();
                    // self.ctx2.fillText("爱前端" +  "-" + "彭蒙善出品" + "必属精品" , self.myCanvas.width/2 , self.myCanvas.height*0.95);
                    //如果加载好的数量等于总数，说明全都加载好了
                    if(count == imagesAmount){
                        //全部加载完毕，执行回调函数。
                        callback.call(self);
                    }
                }
            })(k);
        }
    }
    //清屏
    Game.prototype.clear = function(){
        this.ctx2.clearRect(0,0,this.myCanvas.width,this.myCanvas.height);

    }

// 当前游戏进展信息
  Game.prototype.drMm = function() {
    var ctx = this.ctx2;
    var _fj = this.fj;
    ctx.save();
    ctx.beginPath();
    ctx.shadowColor = "";
    ctx.shadowOffsetY = 2;
    ctx.shadowOffsetX = 2;
    ctx.fillStyle = "#fff";
    ctx.font = "bold 16px Microsoft Yahei";
    ctx.fillText("你已下降"+_fj.score+"米", this.myCanvas.width*0.2, 30);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.fillText("最高纪录："+_fj.Hscore+"米", this.myCanvas.width*0.75, 30);
    ctx.restore();
}
  // 绘制背景图
  Game.prototype.drPp = function() {
    var _fj = this.fj;
    for (var i = 0; i < this.wallList.length; i++) {
        if (this.wallList[i].die) {
            this.wallList.splice(i, 1);
        }
    }
    this.ctx2.clearRect(0, 0, 510,630);

    this.loop();
     if (!_fj.die) {
        for (var i = 0; i < this.wallList.length; i++) {
        this.wallList[i].dr();
        this.wallList[i].Touch(_fj.x,_fj.y);
        this.wallList[i].move();
    }
        _fj.dr();
        _fj.moved();
        _fj.checkborder();
        this.drMm();
    } else {
        this.gameover();

    }
}
// 游戏结束显示
  Game.prototype.gameover = function() {
    var ctx = this.ctx2;
    ctx.save();
    ctx.beginPath();
    // ctx.shadowColor = "#000";
    ctx.shadowOffsetY = 3;
    ctx.shadowOffsetX = 3;
    ctx.fillStyle = "#000";
    ctx.font = "bold 40px Verdana";
    ctx.fillText("ＧＡＭＥ ＯＶＥＲ", this.myCanvas.width/2, 160);
    ctx.font = "bold 30px Verdana";
    ctx.fillText("您的成绩是"+game.fj.score+"米",  this.myCanvas.width/2, 240);
    if(game.fj.Hscore){
       ctx.fillText("最高纪录："+game.fj.Hscore+"米",  this.myCanvas.width/2, 290);
    }
    ctx.fill();
    ctx.restore();
    if(!this.overt){
        overDiv.style.display = "block";

        if(game.fj.score>game.fj.Hscore)
        localStorage.setItem("score",game.fj.score);
        }
     this.overt++;

}

    //开始游戏
    Game.prototype.start = function(){

       this.fj = new Plane(this.myCanvas.width/2,-80);
        this.stimer = setInterval(function(){
        game.drPp();
        },20);
        document.querySelector("#kai").load();
        document.querySelector("#kai").play();
    }
    //主循环的内容，这个函数中的所有语句都是每帧要执行的
    Game.prototype.loop = function(){
        //清屏
        this.clear();

        this.ctx2.drawImage(this.R["bg"],0,0,this.myCanvas.width,this.myCanvas.height);
    }
    // 继续游戏
    Game.prototype.gamestart = function() {

      game.start();

   }

})();
