let ctx = canvas.getContext('2d');
let bullet = new Image();
bullet.src = 'images/bullet.jpg';
let bulletobj = {
    x:151,
    y:450,
    w:106,
    h:17
}
let ball = new Image();
ball.src = 'images/ball.png';
let ballobj = {
    x:192,
    y:426,
    w:24,
    h:24,
    dx:8,
    dy:8
}
let block1 = new Image();
let block2 = new Image();
let block3 = new Image();
let block4 = new Image();
let block5 = new Image();
let block6 = new Image();
let block7 = new Image();
let block8 = new Image();
block1.src ='images/block1.jpg';
block2.src ='images/block2.jpg';
block3.src ='images/block3.jpg';
block4.src ='images/block4.jpg';
block5.src ='images/block5.jpg';
block6.src ='images/block6.jpg';
block7.src ='images/block7.jpg';
block8.src ='images/block8.jpg';
let blockImg = [block1,block2,block3,block4,block5,block6,block7,block8];
let blocks = [];


bullet.onload = function(){
    ctx.drawImage(bullet,bulletobj.x,bulletobj.y);
}
ball.onload = function(){
    ctx.drawImage(ball,ballobj.x,ballobj.y);
}

canvas.onmousemove = function(e){
    if(e.offsetX-53 <= 0){
        ctx.clearRect(bulletobj.x -1,bulletobj.y -1,bulletobj.w +2,bulletobj.h +2);
        ctx.drawImage(bullet,0,bulletobj.y);
        bulletobj.x = 0;
    }else if(e.offsetX+53 >= 408){
        ctx.clearRect(bulletobj.x -1,bulletobj.y -1,bulletobj.w +2,bulletobj.h +2);
        ctx.drawImage(bullet,302,bulletobj.y);
        bulletobj.x = 302;
    }else{
        ctx.clearRect(bulletobj.x -1,bulletobj.y -1,bulletobj.w +2,bulletobj.h +2);
        ctx.drawImage(bullet,e.offsetX-53,bulletobj.y);
        bulletobj.x = e.offsetX-53;
    }
}
function refreshView (){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(ball,ballobj.x,ballobj.y);
    ctx.drawImage(bullet,bulletobj.x,bulletobj.y);
}

setInterval(refreshView,17);

function moveBall(obj){
    if(obj.x < 0 || obj.x + 24 > canvas.width){
        obj.dx *= -1;
    }
    if(obj.y < 0 || obj.y + 24 > canvas.height){
        obj.dy *= -1;
    }else if((bulletobj.x <= (obj.x + 12) <= bulletobj.x+bulletobj.w)){
        obj.dy == -8;
    }

    obj.x += obj.dx;
    obj.y += obj.dy;
}
function go(){
    moveBall(ballobj);
}
setInterval(go,30);



function clone(source){
    if(null == source || "object" != typeof source) return null;
    let target = new Object();
    for(let attr in source){
        if(typeof(source[attr] != 'object')){
            target[attr] = source[attr];
        }else{
            target[attr] = clone(source[attr]); //遞迴
        }
        target[attr] = source[attr];
    }
    return target;
}