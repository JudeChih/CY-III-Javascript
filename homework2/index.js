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
let blockCount = 32;
let blockobj = {
    x:0,
    y:0,
    img:0,
    w:51,
    h:19,
    display:true
}

$(document).ready(function(){
    for (var i = 0; i < blockCount; i++) {
        let block = clone(blockobj);
        block.x = (i % 8)*block.w;
        block.y = 50 + Math.floor(i / 8)*block.h;
        block.img = i % 8;
        ctx.drawImage(blockImg[block.img],block.x,block.y);
        blocks.push(block);
    }
});

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
    for(let block of blocks){
        if(block.display){
            ctx.drawImage(blockImg[block.img],block.x,block.y);
        }
    }
}

setInterval(refreshView,17);

var ball_boolean = true;
function moveBall(obj){
    if(obj.x < 0 && ball_boolean){
        obj.dx = 8;
    }else if(obj.x + 24 > canvas.width){
        obj.dx = -8;
    }
    if(obj.y < 0 && ball_boolean){
        if(obj.dy == -8){
            obj.dy *= -1;
        }
    }else if(bulletobj.x <= (obj.x + 12) &&  (obj.x + 12)<= bulletobj.x+bulletobj.w && (bulletobj.y <= obj.y + 24) && ball_boolean){
        if(obj.dy == 8){
            obj.dy *= -1;
        }
    }else if((bulletobj.x -6 > (obj.x + 12) ||  (obj.x + 12) > bulletobj.x+bulletobj.w +6) && (bulletobj.y <= obj.y + 24)){
        ball_boolean = false;
        if(obj.y + 24 > canvas.height){
            alert('你已經輸囉，請刷新頁面再玩一次吧！');
            clearInterval(int);
            return;
        }
    }

    if(checkBallTouchBlock(obj.x + obj.dx , obj.y + obj.dy)){
        obj.dy *= -1;
    }


    obj.x += obj.dx;
    obj.y += obj.dy;
}

function go(){
    moveBall(ballobj);
}

var int = setInterval(go,30);

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

function checkBallTouchBlock(x,y){
    let num = 0;
    for(let i = 0 ; i < blocks.length ; i++){
        if(blocks[i].display){
            num++;
            if(blocks[i].x <= x && x <= (blocks[i].x + blocks[i].w) && blocks[i].y <= y && y <= (blocks[i].y + blocks[i].h)){
                blocks[i].display = false;
                return true;
            }
        }
    }
    if(num == 0){
        alert('恭喜你破關囉！');
        clearInterval(int);
        return;
    }
    return false;
}