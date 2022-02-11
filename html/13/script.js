const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let graph,A,B,C,mAB,mAC,mBC,ab,ac,bc,aMbc,bMac,cMab,S;
graph = new GraphBackGround();
A = new Point(200,200,"15","red",true);
B = new Point(400,300,"15","green",true);
C = new Point(300,500,"15","blue",true);
mAB = new Point(0,0,"5","white",false);
mAC = new Point(0,0,"5","white",false);
mBC = new Point(0,0,"5","white",false);
S = new Point(0,0,"10","black",false);
ab = new LinearFunction(0,0);
ac = new LinearFunction(0,0);
bc = new LinearFunction(0,0);
aMbc = new LinearFunction(0,0);
bMac = new LinearFunction(0,0);
cMab = new LinearFunction(0,0);

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();
    context.beginPath();
    context.fillStyle = "rgba(255,255,0,0.3)";
    context.moveTo(A.x,A.y);
    context.lineTo(B.x,B.y);
    context.lineTo(C.x,C.y);
    context.closePath();
    context.fill();

    ab.lineThroughTwoPoints(A,B);
    ab.draw("black");
    ac.lineThroughTwoPoints(A,C);
    ac.draw("black");
    bc.lineThroughTwoPoints(B,C);
    bc.draw("black");

    mAB.x = (A.x + B.x)/2;
    mAB.y = (A.y + B.y)/2;
    mAC.x = (A.x + C.x)/2;
    mAC.y = (A.y + C.y)/2;
    mBC.x = (B.x + C.x)/2;
    mBC.y = (B.y + C.y)/2;
    aMbc.lineThroughTwoPoints(A,mBC);
    bMac.lineThroughTwoPoints(B,mAC);
    cMab.lineThroughTwoPoints(C,mAB);

    aMbc.draw("gray");
    bMac.draw("gray");
    cMab.draw("gray");
    mAB.draw();
    mAC.draw();
    mBC.draw();
    A.draw();
    B.draw();
    C.draw();
    S.x = aMbc.intersection(bMac).x;
    S.y = aMbc.intersection(bMac).y;
    S.draw();
}
