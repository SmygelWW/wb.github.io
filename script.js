//定义变量
var canvas=document.getElementsByTagName("canvas")[0];
var context=canvas.getContext("2d");
var ScaleX=0.05;
var ScaleY=0.05;
var initialPointsNum=50;
var points;
var originX;
var originY;

//初始化画布
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
originX=canvas.width/2;
originY=canvas.height/2;



clear();


points=randomPoints(initialPointsNum);

drawPoints(points);

setInterval(function fly(){
    clear();
    drawPoints(points);
    points=points.concat(randomPoints(initialPointsNum));
    movePoints(points);
},10);


//函数
//清空
function clear(){
    context.fillStyle="rgba(0,0,0,0.3)";
    context.fillRect(0,0,canvas.width,canvas.height);
}

//生成随机点
function randomPoints(PointsNum){
    var generated=[];
    for (let i=0;i<PointsNum;i++){
        var x=Math.floor(Math.random()*canvas.width);
        var y=Math.floor(Math.random()*canvas.height);
        var point={x:x-originX,y:y-originY};
        generated.push(point);
    }
    return generated;
}

//画点
function drawPoints(dp){
    for(let i=0;i<dp.length;i++){
        context.fillStyle="white";
        context.fillRect(dp[i].x+originX,dp[i].y+originY,1,1);
    }
}

//移动点
function movePoints(mp){
    for(let i=0;i<mp.length;i++){
        mp[i].x=mp[i].x+mp[i].x*ScaleX;
        mp[i].y=mp[i].y+mp[i].y*ScaleY;
        if(mp[i].x<-(canvas.width/2)||mp[i].x>(canvas.width/2)||mp[i].y<-(canvas.height/2)||mp[i].y>(canvas.height/2)){mp.splice(i,1);}
    }
}

//过渡动画
//返回
//图片效果
