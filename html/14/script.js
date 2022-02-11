const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let graph,A,B,C,ab,ac,bc,p_ab,p_ac,p_bc,S;
graph = new GraphBackGround();
A = new Point(200,200,"15","red",true);
B = new Point(500,300,"15","green",true);
C = new Point(100,400,"15","blue",true);
S = new Point(0,0,"10","white",false)
ab = new LinearFunction(0,0);
ac = new LinearFunction(0,0);
bc = new LinearFunction(0,0);
p_ab = new LinearFunction(0,0);
p_ac = new LinearFunction(0,0);
p_bc = new LinearFunction(0,0);



animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();
    ab.lineThroughTwoPoints(A,B);
    ac.lineThroughTwoPoints(A,C);
    bc.lineThroughTwoPoints(B,C);
    ab.draw("black");
    ac.draw("black");
    bc.draw("black");

    drawTriangle();

    p_ab.slope = -1/ab.slope;
    p_ab.intercept = C.y - p_ab.slope * C.x;
    p_ab.draw("green");
    p_ac.slope = -1/ac.slope;
    p_ac.intercept = B.y - p_ac.slope * B.x;
    p_ac.draw("red");
    p_bc.slope = -1/bc.slope;
    p_bc.intercept = A.y - p_bc.slope * A.x;
    p_bc.draw("blue");
    S.x = p_ab.intersection(p_ac).x;
    S.y = p_ab.intersection(p_ac).y;

    A.draw();
    B.draw();
    C.draw();
    S.draw();
}

function drawTriangle(){
    context.beginPath();
    context.fillStyle = "rgba(255,255,0,0.3)";
    context.moveTo(A.x,A.y);
    context.lineTo(B.x,B.y);
    context.lineTo(C.x,C.y);
    context.closePath();
    context.fill();
}