import {useEffect, useState} from 'react'

const CanvPage5 = () => {

  const [mainWidth, setMainWidth] = useState(0);  
  const [mainHeight, setMainHeight] = useState(0);    

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  useEffect(() => {
    updateWidthAndHeight();
  }, [])

  useEffect(()=>{drawCanvas()})

  const updateWidthAndHeight = () => {
    const a = document.getElementById("app-header").getBoundingClientRect()
    const b = document.getElementById("app-footer").getBoundingClientRect()      
    const d = document.getElementById("app-main").getBoundingClientRect()                  
    /*resize to 50%, but slightly less for the height - this helps with flexbox*/
    const mw = d.width
    const mh = (window.innerHeight - a.height - b.height -32)
    setMainWidth(mw);
    setMainHeight(mh);
  };

  function d2r(d){
    return d/360.0*Math.PI*2.0
  }

  function drawCanvas(){

    let cvs = document.getElementById("canv-border")
    let ctx = cvs.getContext('2d')
    ctx.clearRect(0, 0, cvs.width, cvs.height);
       
    //932d2d
    //93602d
    //932d60


    //ctx.lineWidth = 3;
    //ctx.strokeStyle = "yellow"

    let thick = 30;
    let radius = 70;
    let ratio = (radius - thick) / radius


    var grd1 = ctx.createLinearGradient(0, 0, thick, 0);
    grd1.addColorStop(0, "#952E2E");
    grd1.addColorStop(0.2, "#932D2D");
    grd1.addColorStop(.6, "#bc946b");    
    grd1.addColorStop(0.9, "#932D2D");    
    grd1.addColorStop(.1, "#952E2E");    
 

    var grd2 = ctx.createRadialGradient(radius, radius, 0, radius, radius, radius);
    /*
    grd2.addColorStop(1, "#952E2E");
    grd2.addColorStop(0.8, "#932D2D");
    grd2.addColorStop(.4, "#bc946b");    
    grd2.addColorStop(0.1, "#932D2D");    
    grd2.addColorStop(0, "#952E2E");    
*/

/*
    grd2.addColorStop(1, "#952E2E");
    grd2.addColorStop(0.9, "#932D2D");
    grd2.addColorStop(.7, "#bc946b");    
    grd2.addColorStop(0.55, "#932D2D");    
    grd2.addColorStop(0.5, "#952E2E");    
    grd2.addColorStop(0, "#952E2E");    
*/


    grd2.addColorStop(ratio+((1-ratio)*1), "#952E2E");
    grd2.addColorStop(ratio+((1-ratio)*0.8), "#932D2D");
    grd2.addColorStop(ratio+((1-ratio)*0.4), "#bc946b");    
    grd2.addColorStop(ratio+((1-ratio)*0.1), "#932D2D");    
    grd2.addColorStop(ratio, "#952E2E");    

    canvasDrawBorderSquareSide2(ctx, grd1, thick, radius, cvs.height)
    canvasDrawBorderRoundCorner2(ctx, grd2, thick, radius)    

    ctx.save();
      ctx.translate(cvs.width, 0); 
      ctx.rotate(d2r(90)); 				
   
      canvasDrawBorderSquareSide2(ctx, grd1, thick, radius, cvs.width)      
      canvasDrawBorderRoundCorner2(ctx, grd2, thick, radius)          

      ctx.save();
        ctx.translate(cvs.height, 0); 
        ctx.rotate(d2r(90)); 				
        
        canvasDrawBorderSquareSide2(ctx, grd1, thick, radius, cvs.height)        
        canvasDrawBorderRoundCorner2(ctx, grd2, thick, radius)    

        ctx.save();
          ctx.translate(cvs.width, 0); 
          ctx.rotate(d2r(90)); 				

          canvasDrawBorderSquareSide2(ctx, grd1, thick, radius, cvs.width)          
          canvasDrawBorderRoundCorner2(ctx, grd2, thick, radius)    

        ctx.restore();
      ctx.restore();
    ctx.restore();  
  }  
  
  function canvasDrawBorderSquareSide2(ctx, gr, th, rad, le){ //right now rounded corners use same radius as wall thickness but will need update
    ctx.fillStyle = gr;    
    ctx.beginPath();
    ctx.moveTo(0,rad)
    ctx.lineTo(th,rad)
    ctx.lineTo(th,le-rad)    
    ctx.lineTo(0,le-rad)
    ctx.lineTo(0,0)
    ctx.fill();      
  }

  function canvasDrawBorderRoundCorner2(ctx, gr, th, rad){ //right now rounded corners use same radius as wall thickness but will need update
    ctx.fillStyle = gr;    
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(th, rad);
    ctx.arc(rad, rad, rad, d2r(180), d2r(270), false);
    ctx.lineTo(rad, th);    
    ctx.arc(rad, rad, rad-th, d2r(270), d2r(180), true);    
    //ctx.moveTo(th, rad);
    ctx.closePath(); 
    ctx.fill();    

  }

  return (

    <div className="canv-border">
      <canvas id="canv-border" className="canv-item" width={mainWidth} height={mainHeight} />
      <div id="empty-div"></div>    
    </div>
  )
}

export default CanvPage5