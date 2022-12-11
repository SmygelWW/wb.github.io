const canvas = document.getElementsByTagName("canvas")[0];
const context = canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
originX=canvas.width/2;
originY=canvas.height/2;
(function () {
    var originX;
    var originY;
    let width;
    let height;
    class Line {
      constructor(origin, size, length, color, style = "pattern") {
        this.size = size;
        this.origin = origin;
        this.length = length;
        this.color = color;
        this.style = style;
        this.origin = `M${origin.x},${origin.y}`;
        this.offSet = 0;
        this.line = null;
        this.offSetSpeed = length / size;
      }
      getColorString() {
        return `hsla(${this.color.h}deg,${this.color.s}%,${this.color.l}%,${this.color.a})`;
      }
      generators() {
        return [
          {
            line: `h${this.size}`,
            mag: this.size
          },
          {
            line: `h-${this.size}`,
            mag: this.size
          },
          {
            line: `v${this.size}`,
            mag: this.size
          },
          {
            line: `v-${this.size}`,
            mag: this.size
          },
          {
            line: `l${this.size},${this.size}`,
            mag: Math.hypot(this.size, this.size)
          },
          {
            line: `l${this.size}-${this.size}`,
            mag: Math.hypot(this.size, this.size)
          },
          {
            line: `l-${this.size},${this.size}`,
            mag: Math.hypot(this.size, this.size)
          },
          {
            line: `l-${this.size}-${this.size}`,
            mag: Math.hypot(this.size, this.size)
          }
        ];
      }
      generate() {
        let segments = this.generators(this.size);
        let path = this.origin;
        let mag = 0;
        let fragment;
        let i;
        for (i = 0; i < this.length; i += 1) {
          fragment = segments[(Math.random() * segments.length) | 0];
          path += ` ${fragment.line}`;
          mag += fragment.mag;
        }
        this.line = {
          path,
          mag
        };
        return this;
      }
      renderStyle(style) {
        if (style === "glitches") {
          context.lineDashOffset = this.line.mag + this.offSet;
          context.setLineDash([
            this.size ** 1.5,
            (this.line.mag / this.length) * this.size ** 2
          ]);
          this.offSet += 20;
          // this.size / (this.size ** 2);
          context.lineWidth = 2;
          return this;
        }
        if (style === "pattern") {
          context.lineDashOffset = this.line.mag - this.offSet;
          context.setLineDash([this.line.mag, this.line.mag]);
          this.offSet += 10;
          //this.size / (this.size ** 100);
          context.lineWidth = 0.2;
        }
      }
      mutatePath() {
        let lineFragment = this.line.path.split(" ").slice(1);
        let generator = this.generators();
        lineFragment[(Math.random() * lineFragment.length) | 0] =
          generator[(Math.random() * generator.length) | 0].line;
        this.line.path = `${this.line.path.split(" ")[0]} ${lineFragment.join(
          " "
        )}`;
      }
      draw() {
        !this.line && this.generate();
  
        context.strokeStyle = this.getColorString();
        this.renderStyle(this.style);
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke(new Path2D(this.line.path));
        return this;
      }
    }
    function clear() {
      context.fillStyle = `hsla(200deg, 20%, 10%, 0.3)`;
      context.fillRect(0, 0, width, height);
    }
    function generateLines(amount) {
      let lines = [];
      let styles = [
        {
          size: 1.25,
          style: "pattern",
          color: { h: 210, s: 100, l: 70, a: 0.5 }
        },
        { size: 2.5, style: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
        { size: 5, style: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
        { size: 10, style: "pattern", color: { h: 310, s: 80, l: 55, a: 0.15 } },
        { size: 20, style: "pattern", color: { h: 200, s: 25, l: 35, a: 0.12 } },
        { size: 20, style: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
        { size: 40, style: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
        { size: 80, style: "pattern", color: { h: 220, s: 50, l: 60, a: 0.12 } },
        { size: 40, style: "glitches", color: { h: 300, s: 100, l: 50, a: 0.3 } },
        { size: 20, style: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
        { size: 60, style: "glitches", color: { h: 30, s: 100, l: 50, a: 0.3 } }
      ];
      for (let i = 0; i < amount; i += 1) {
        let style = styles[(Math.random() ** 2 * styles.length) | 0];
        lines.push(
          new Line(
            { x: width * 0.5, y: height * 0.5 },
            style.size,
            500 + Math.random() * 1000,
            style.color,
            style.style
          )
        );
      }
      return lines;
    }
    let id;
    function resize() {
      id = cancelAnimationFrame(id);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const lines = generateLines(40);
      function update() {
        if (!(id % 3)) {
          clear();
          lines.forEach((line) => {
            line.draw();
            if (!(id % 5) && Math.random() > 0.95) {
              line.mutatePath();
            }
          });
        }
        id = requestAnimationFrame(update);
      }
      id = requestAnimationFrame(update);
    }
    window.onresize=resize
    resize();


    var h1=document.getElementsByTagName("h1")[0]
    h1.innerHTML="WELCOM<span class=\"last\">E</span>"
    setTimeout(function(){
      h1.innerHTML="T<span class=\"last\">O</span>"
      setTimeout(function(){
        h1.innerHTML="EEYES.NE<span class=\"last\">T</span>"
        setTimeout(function(){
          var img=document.getElementsByTagName("img")[0]
          img.style.display="block"
          h1.style.animation="breath 3000ms ease-in-out infinite alternate"
          h1.style.letterSpacing="1em"
          h1.innerHTML="TAP TO<br>CONTINU<span class=\"last\">E</span>"
          var clicked=false;
          window.addEventListener("click",function(){
            if(clicked){}
            else{clicked=true
              index()}
          })
        },1500)
      },1500)
    },1500)

    function index(){
      var img=document.getElementsByTagName("img")[0]
      img.parentNode.removeChild(img)
      h1.parentNode.removeChild(h1)
      var iframe=document.getElementById("index")
      iframe.style.display="block"
      
    }

    // document.onclick=index()
  })();//背景









// function index(){
//     var str=h1.innerHTML
//     if(str=="TAP TO<br>CONTINU<span class=\"last\">E</span>"){}
//     else{showindex()}
// }

// function showindex(){
// //定义变量
// var ScaleX=0.05;
// var ScaleY=0.05;
// var initialPointsNum=50;
// var points;

// clear();


// points=randomPoints(initialPointsNum);

// drawPoints(points);

// setInterval(function fly(){
//     clear();
//     drawPoints(points);
//     points=points.concat(randomPoints(initialPointsNum));
//     movePoints(points);
// },10);


// //函数
// //清空
// function clear(){
//     context.fillStyle="white";
//     context.fillRect(0,0,canvas.width,canvas.height);
// }

// //生成随机点
// function randomPoints(PointsNum){
//     var generated=[];
//     for (let i=0;i<PointsNum;i++){
//         var x=Math.floor(Math.random()*canvas.width);
//         var y=Math.floor(Math.random()*canvas.height);
//         var point={x:x-originX,y:y-originY};
//         generated.push(point);
//     }
//     return generated;
// }

// //画点
// function drawPoints(dp){
//     for(let i=0;i<dp.length;i++){
//         context.fillStyle="white";
//         context.fillRect(dp[i].x+originX,dp[i].y+originY,1,1);
//     }
// }

// //移动点
// function movePoints(mp){
//     for(let i=0;i<mp.length;i++){
//         mp[i].x=mp[i].x+mp[i].x*ScaleX;
//         mp[i].y=mp[i].y+mp[i].y*ScaleY;
//         if(mp[i].x<-(canvas.width/2)||mp[i].x>(canvas.width/2)||mp[i].y<-(canvas.height/2)||mp[i].y>(canvas.height/2)){mp.splice(i,1);}
//     }
// }
// }
// // //过渡动画
// // //返回
// // //图片效果
