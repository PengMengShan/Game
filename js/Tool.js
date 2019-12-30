// 游戏工具类
document.onkeydown = keydown;
document.onkeyup = keyup;
window.addEventListener('deviceorientation', this.orientationListener, true); //方向感应器
window.addEventListener('MozOrientation', this.orientationListener, true); //方向感应器
window.addEventListener('devicemotion', this.orientationListener, true); //重力加速感应器
function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;//值表示设备围绕z轴的运动，以度为单位，值范围为0到360。
  var beta     = event.beta;//值表示设备围绕x轴的运动，以度为单位表示，值范围为-180到180.这表示    
                              // 设备的前后运动。
  var gamma    = event.gamma;//值表示设备围绕y轴的运动，以度为单位表示，值范围为-90到90.这表示设                    
                               // 备从左到右的运动
 
}
// 绑定键盘
function keydown(e) {
    var keyName;　
    var e = e || event;　
    var currKey = e.keyCode || e.which || e.charCode;　
    if ((currKey > 7 && currKey < 14) || (currKey > 31 && currKey < 47))　 {　　
        switch (currKey)　　 {　　　　
        case 37:
            game.fj.move("R");
            break;　　　
        case 39:
            game.fj.move("L");
            break;
     　
        }　　
    }
}
// 绑定键盘
function keyup(e) {
    var keyName;　
    var e = e || event;　
    var currKey = e.keyCode || e.which || e.charCode;　
    if ((currKey > 7 && currKey < 14) || (currKey > 31 && currKey < 47))　 {　　
        switch (currKey) {　　
        case 37:
            game.fj.move("CR");
            break;　　　
        case 39:
            game.fj.move("CL");
            break;　

        }　
    }

}

// 随机
 function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
// new 出新的墙
 function drWall() {
    var n = random(0, 15);
    var n3 = random(10, 21);
    var n2 = 15 - n;
    var wall = new Wall(this.myCanvas.height, 20 * n, 10 * n3, 2);
    game.wallList.push(wall);
    var wall = new Wall(this.myCanvas.height, 20 * n2, 10 * n3, 1);
    game.wallList.push(wall);
}


