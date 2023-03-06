import {useEffect, useState} from 'react'

const CanvPage3 = () => {

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
    //ctx.moveTo(0,0)
    //ctx.lineTo(200, 100)

/*
    ctx.fillStyle = "#FFFF00";
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    
    ctx.fill();    
    ctx.stroke();    
*/
    //932d2d
    //93602d
    //932d60

    var grd = ctx.createLinearGradient(0, 0, 50, 0);
    grd.addColorStop(0, "#952E2E");
    grd.addColorStop(0.2, "#932D2D");
    //grd.addColorStop(.55, "#93602D");
    //bc946b
    grd.addColorStop(.6, "#bc946b");    
    grd.addColorStop(0.9, "#932D2D");    
    grd.addColorStop(.1, "#952E2E");    
    ctx.fillStyle = grd;    
 
    ctx.lineWidth = 3;
    ctx.strokeStyle = "yellow"
    


    ctx.beginPath();
    ctx.moveTo(0,0)
    ctx.lineTo(50,50)
    ctx.lineTo(50,cvs.height-50)    
    ctx.lineTo(0,cvs.height)
    ctx.lineTo(0,0)
    ctx.fill();    
    //ctx.stroke();    

    //ctx.arc(95, 50, 40, 0, 2 * Math.PI);

  //ctx.strokeRect(0, 0, 50, cvs.height);        
  //ctx.fillRect(0, 0, 50, mainHeight);    

    ctx.save();
      ctx.translate(cvs.width, 0); 
      ctx.rotate(d2r(90)); 				

      //ctx.strokeRect(0, 0, 50, cvs.width);        
      //ctx.fillRect(0, 0, 50, mainWidth);    
    
      ctx.beginPath();
      ctx.moveTo(0,0)
      ctx.lineTo(50,50)
      ctx.lineTo(50,cvs.width-50)    
      ctx.lineTo(0,cvs.width)
      ctx.lineTo(0,0)
      ctx.fill();    

      ctx.save();
        ctx.translate(cvs.height, 0); 
        ctx.rotate(d2r(90)); 				
        
        //ctx.strokeRect(0, 0, 50, cvs.height);
        //ctx.fillRect(0, 0, 50, mainHeight);    
        ctx.beginPath();
        ctx.moveTo(0,0)
        ctx.lineTo(50,50)
        ctx.lineTo(50,cvs.height-50)    
        ctx.lineTo(0,cvs.height)
        ctx.lineTo(0,0)
        ctx.fill();      

        ctx.save();
          ctx.translate(cvs.width, 0); 
          ctx.rotate(d2r(90)); 				

          //ctx.strokeRect(0, 0, 50, cvs.width);        
          //ctx.fillRect(0, 0, 50, mainWidth);    

          ctx.beginPath();
          ctx.moveTo(0,0)
          ctx.lineTo(50,50)
          ctx.lineTo(50,cvs.width-50)    
          ctx.lineTo(0,cvs.width)
          ctx.lineTo(0,0)
          ctx.fill();    
    

        ctx.restore();
      ctx.restore();
    ctx.restore();  
  }  
  

  return (

    <div className="canv-border">
      <canvas id="canv-border" className="canv-item" width={mainWidth} height={mainHeight} />
      <div id="empty-div"></div>    
    </div>
  )
}

export default CanvPage3