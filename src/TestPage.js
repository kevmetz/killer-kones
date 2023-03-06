import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import logo from './logo.svg';
import PageTitle from "./comp/PageTitle"
import SvgBorder from "./comp/SvgBorder";
import ArrowButtons from './comp/ArrowButtons'

const TestPage = () => {

  const navigate = useNavigate()
  const [showAnim, setShowAnim] = useState(false)
  const [showAllAnim, setShowAllAnim] = useState(false)  
  const [showAnimText, setShowAnimText] = useState("Start the fun ! 😄")    
  const [showAllAnimText, setShowAllAnimText] = useState("Start all the fun ! 😁")      

  let msg1 = "This SVG border is interesting because while its easy to draw a rounded rectangle, the SVG viewbox gets stretched at different dimensions."
      msg1 += " This causes the border radius and thickness to get warped. To fix this, the viewbox is resized each time the window resizes instead of "
      msg1 += " being stretched, and so the round corners and the border width keep their proper shape."

  
  let msg2 = "In a sense is like taking the scaling out of SVG, so I guess you could say this is 'VG' graphics - hah. And of course since the border is drawn "
      msg2 += " using SVG, then the entire background can have any valid svg you want to put back there. Click the fun button and I'll show you what I mean..."
  
  let msg3 = "The HTML sits on top of the SVG element (not inside it... that doesn't work) and so we can place any valid HTML we want inside the SVG border."  
      msg3 += " So images, links, buttons, an entire nav bar, and most importantly, components!"
      
  let msg4 = "Of course the border is customizable, and even has its own spacing independent of padding so you can tweak ultra wide or super fine borders without or alongside CSS."
      msg4 += " You can be creative with offset layouts and still get pixel perfect results. Very cool ! ✨"

  return (
    <section className="page-section" >
      <PageTitle title="More Stuff - SVG Borders"/>                  
      
      <article id="svg-border-container1" className="parent-article svg-border-container" style={{border:"none"}}>      
        <div className="svg-border-content">
          <p>{msg1}</p>
        </div>    
        <SvgBorder key="1" container="svg-border-container1" style="svg-border-styles1"
          spacing="4" showAnim={showAllAnim}/>            
      </article>      

      <article id="svg-border-container2" className="parent-article svg-border-container"
          style={{borderWidth:"5px", borderRadius:"12px", borderColor:"rgb(185, 193, 232)"}}>      
        <div className="svg-border-content" style={{padding:"2rem"}}>
          <p>{msg2}</p>
          <button type="button" style={{padding:"0.5rem"}} onClick={()=>handleAnim()}>{showAnimText}</button>          
        </div>
        <SvgBorder key="2" container="svg-border-container2" style="svg-border-styles2"
          spacing="16" hoffset="-10" woffset="-10" showAnim={showAnim || showAllAnim}/>            
      </article>      

      <article id="svg-border-container3" className="parent-article svg-border-container" style={{borderWidth:"1px"}}>      
        <div className="svg-border-content" style={{padding:"1.5rem"}}>
          <p>{msg3}</p>
          <br/>
          <ArrowButtons name1="&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;" fn1={()=>navigate('/complete')} name2="Continue" fn2={()=>navigate('/svg')}/>
        </div>    
        <SvgBorder key="3" container="svg-border-container3" style="svg-border-styles3" 
          spacing="15" woffset="-2" hoffset="-2" showAnim={showAllAnim}/>            
      </article>      

      <article id="svg-border-container4" className="parent-article svg-border-container"
          style={{borderWidth:"0px", borderRadius:"30px", backgroundColor:"rgb(0, 0, 0)", boxShadow:"0 0 48px rgb(14, 233, 65)"}}>      
        <div className="svg-border-content" style={{padding:"2rem"}}>
          <p className="svg-border-text-styles4">{msg4}</p>
          <button type="button" style={{padding:"0.5rem"}} //4, 233, 65
            onClick={()=>handleAllAnim()}>{showAllAnimText}</button>                    
        </div>    
        <SvgBorder key="4" container="svg-border-container4" style="svg-border-styles4"
          spacing="12" hoffset="0" woffset="-100" rx="30px" ry="30px" showAnim={showAllAnim} showGrad={true}/>            
      </article>      

    </section>
  )

  //handlers

  function handleAnim(){

    if(showAnim) {
      setShowAnim(false)
      setShowAllAnim(false)
      setShowAnimText("Start the fun !😄")
      setShowAllAnimText("Start all the fun !😁")      
    }else{
      setShowAnim(true)
      setShowAnimText("Stop the fun...😕")
    }
  }

  function handleAllAnim(){
    if(showAllAnim) {
      setShowAnim(false)
      setShowAllAnim(false)
      setShowAnimText("Start the fun !😄")
      setShowAllAnimText("Start all the fun !😁")      
    }else{
      setShowAnim(true)
      setShowAllAnim(true)
      setShowAnimText("Stop the fun...😕")
      setShowAllAnimText("Stop the fun...😕")      
    }
  }

}

export default TestPage