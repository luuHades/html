const Container= document.querySelector('#Container');
const ctx = Container.getContext('2d');
Container.width = 800;
Container.height = 600;
let fps, fpsInterval, startTime, now, then, elapsed;
let jump_key = false;
let GravityPoint =8;

const keys = [];
//frameX Y để chuyển đổi tư thế nhân vật
const Char = {
    x: 0,
    y: 475,
    width: 64,
    height: 96, 
    frameX: 0,
    frameY: 0,
    speed: 7,
    moving: false,
    step:0,//giúp game mượt hơn 
};
const CharSora = new Image();
CharSora.src = "img/kingdomhearts_sora.png";
const background = new Image();
background.src = "img/Forest.png";
//sX sY sW SH Lấy ảnh từ nhân vật   
//dX dY dW dH vẽ độ lớn của nhân vật
function drawSora (img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//move
document.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
})
document.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    Char.moving = false;
})

function CharMove(){
    Char.step++;
    function CharMoveRight(){
        if( keys[39]&& Char.x < Container.width-64 ){
            Char.x += Char.speed;
            Char.frameY =2;
            Char.moving = true;   
        }    
    }
    function CharMoveLeft(){
        if( keys[37]&& Char.x >0 ){
            Char.x -= Char.speed;
            Char.frameY =1;
            Char.moving = true;
        }        
    }
    function CharMoveFront(){
        if(keys[40]){
            Char.frameY =0;
            Char.moving = true;
        }        
    }
    function CharMoveBack(){
        if(keys[38]){
            Char.frameY =3;
            Char.moving = true;
        }    
        }
    CharMoveRight();
    CharMoveLeft();
    CharMoveFront();
    CharMoveBack();
}

function CharJump(){
    if(keys[32] ){
        if (jump_key=== false){
            for ( let i = 0;i< 2; i++){
            Char.y -= 10;
            jumpPoint++;
            }
        }
        if (jumpPoint ===20){
            GravityPoint = 3;
            jump_key = true;
        }
    }
    if( jumpPoint >18){
        setTimeout(function GravityHold(){
        GravityPoint=8;
    },200)}
    if (Char.y === 475){
        jump_key = false ;
        jumpPoint = 0;
    }
}
let jumpPoint =0;
let jump = setInterval (CharJump, 2000);


function Walk(){
    if (Char.frameX <3 && Char.moving ===true&& Char.step ===15) {
        Char.frameX++;
        Char.step = 0 ; 
        }
    else if (Char.step ===15) {
        Char.frameX = 0;
        Char.step = 0 ;
    }
}

    setTimeout(function GravityHold(){
        GravityPoint=10;
    },300)
function animated(){
    requestAnimationFrame(animated);
    now =Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        //vẽ nhân vật, background
        ctx.clearRect(background, 0 ,0, Container.width,Container.height);
        ctx.drawImage(background, 0 ,0, Container.width, Container.height)
        requestAnimationFrame(animated);
        drawSora(CharSora,(Char.width/2)*Char.frameX ,(Char.height/2)*Char.frameY ,Char.width/2, Char.height/2, Char.x, Char.y,Char.width, Char.height)
        CharMove();
        Walk();
        Gravity();
        CharJump();
        if (Char.y > 475){ Char.y = 475};
    }
}
function Gravity(){
    if(Char.y< 475 ){
        Char.y += GravityPoint;
        }
}
// tính FPS 
function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    // startTime = then;
    animated();
}
startAnimating(60);
