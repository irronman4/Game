// Creater parth

window.onload=function()
{
    alert("CREATED BY WALKER(PARTH)")
    alert("HOPE YOU ENJOY")
    var canvas = document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    canvas.width=innerWidth-15;
    canvas.height=innerHeight-200;
        var x = 50;
        var y = 50;
        var dx=4;
        var dy=4;
        var r = 20;
        var rx=200;
        var s=0;
        var ry=canvas.height-10;
        var ri=document.getElementById("right");
        var le=document.getElementById("left");

    function animate()
    {
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
        ctx.beginPath();
        ctx.arc(x,y,20,0,2*Math.PI);
        ctx.fillStyle="white";
        ctx.fill();

        ctx.fillRect(rx,ry,110,10);

        ctx.font="20px arial";
        ctx.fillStyle="white"
        ctx.fillText("Score : "+s,canvas.width-150,30);

        if(x+r>innerWidth-50 || x-r<0)
        {
            dx=-dx;
        }
        if(y-r<0)
        {
            dy=-dy;
        }
        x=x+dx;
        y=y+dy;
        ri.onclick=function()
        {
            if (rx>canvas.width)
            {
                rx=-50;
            }
            rx=rx+50;
        }
        le.onclick=function()
        {
            if (rx<0)
            {
                rx=innerWidth;
            }
            rx=rx-50;
        }
        if(y+dy>canvas.height-r)
        {
            if(x>rx && x<rx+110)
            {
                dy=-dy;
                s=s+10;
            }
        }
        if(y+r>canvas.height)
        {
          alert("Game Over!,your score is = "+s);
            x=50;
            y=50;
            s=0;
        }
    }
    animate();
}