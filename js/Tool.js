// 游戏工具类
document.onkeydown = keydown;
document.onkeyup = keyup;
window.addEventListener('deviceorientation', this.orientationListener, true); //方向感应器
window.addEventListener('MozOrientation', this.orientationListener, true); //方向感应器
window.addEventListener('devicemotion', this.orientationListener, true); //重力加速感应器
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


