import React, {useState, useEffect, useRef} from "react";
import PageTitle from "./comp/PageTitle"
import ArrowButtons from './comp/ArrowButtons'

const SvgPage = () => {

  const [viewStr, setViewStr] = useState("0 0 200 200")
  const [mainWidth, setMainWidth] = useState(0);  
  const [mainHeight, setMainHeight] = useState(0);    

  const borderContainer = useRef();

  const updateWidthAndHeight = () => {
    const r = borderContainer.current.getBoundingClientRect()
    const vs = "0 0 "+ String(r.width) + " " + String(r.height)    
    setMainWidth(r.width);
    setMainHeight(r.height);
    setViewStr(vs)    
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  useEffect(() => {
     updateWidthAndHeight();
  }, [])
  

  return (
    <section className="page-section" >
      <PageTitle title="More Stuff - SVG Borders"/>                  
      
      <article ref={borderContainer} className="parent-article svg-border-container">
      
      <div className="svg-border-content">
        This SVG border is interesting because while its easy to draw a rounded rectangle,
        the SVG viewbox gets stretched at different dimensions.
        This causes the border radius and thickness to get warped.
        To fix this, the viewbox is resized each time the window resizes instead of being stretched,
        and so the round corners and the border width keep their proper shape.
      </div>    
      
      <div className="svg-border-item">
        <svg className="svg-border-styles" viewBox={viewStr} width={mainWidth} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4px" y="4px" rx="20px" ry="20px" width={mainWidth-8} height={mainHeight-8}/>
        </svg>
        <div id="empty-div-to-make-sticky-footer-work"></div>
      </div>
      
      </article>      

    </section>
  )
}

export default SvgPage