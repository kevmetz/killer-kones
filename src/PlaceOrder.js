import React, {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import imgCone from './img/cone.png'
import imgBowl from './img/bowl.png'
import imgSprinkles from './img/sprinkles.png'
import imgSyrup from './img/syrup.png'
import imgCherry from './img/cherry.png'
import checkMark from './img/checkmark.png'
import xMark from './img/xmark2.png'
import PageTitle from './comp/PageTitle'
import ArrowButtons from './comp/ArrowButtons'

const PlaceOrder = () => {

  const navigate = useNavigate()

  const [orderItems, setOrderItems] = useState([])

  const [s51, ss51] = useState(true) //cone
  const [s61, ss61] = useState(true) //sprinkles
  const [s62, ss62] = useState(true) //syrup
  const [s63, ss63] = useState(true) //cherry 

  const _cone = document.getElementById("wantsCone")
  const _bowl = document.getElementById("wantsBowl")
  const _sprinkles = document.getElementById("wantsSprinkles")
  const _syrup = document.getElementById("wantsSyrup")  
  const _cherry = document.getElementById("wantsCherry")  
  
  useEffect(()=>{
    let x = window.localStorage.getItem('myOrder')    
    if(x) setOrderItems(JSON.parse(x))
  }, [])

  return (
    <section className="page-section">

    <PageTitle title="Select your ice cream !"/>    
      
    <article className="parent-article">
      <article className="parent-article-row cntr">

      <div className="child-article crsr" onClick={(e=>handle80(e))}>      
        <div className="child-article-row-grid" style={{gridTemplateColumns: "1fr 2fr 2fr"}}>
          <img id="wantsCone" className="order-checkmark" src={checkMark}/>
          <img className="order-pic-img" src={imgCone} alt="cone"></img>
          <span className="order-pic-desc">CONE</span>
        </div>
      </div>

      <div className="child-article crsr" onClick={(e=>handle81(e))}>      
        <div className="child-article-row-grid" style={{gridTemplateColumns: "1fr 2fr 2fr"}}>
          <img id="wantsBowl" className="order-checkmark" src={xMark}/>
          <img className="order-pic-img" src={imgBowl} alt="bowl"></img>
          <span className="order-pic-desc">BOWL</span>        
        </div>
      </div>

      </article>
    </article>
    
    <article className="parent-article">
      <article className="parent-article-col">

        <div className="child-article crsr view-child-min" onClick={e=>handle56(e)}>      
          <div className="child-article-row-grid">
            <img id="wantsSprinkles" className="order-checkmark" src={checkMark}/>    
            <img className="order-pic-img2" src={imgSprinkles} alt="sprinkles"></img>
            <span className="order-pic-desc">SPRINKLES</span>                
          </div>
        </div>

        <div className="child-article crsr view-child-min" onClick={e=>handle57(e)}>      
          <div className="child-article-row-grid">
            <img id="wantsSyrup" className="order-checkmark" src={checkMark}/>
            <img className="order-pic-img2" src={imgSyrup} alt="syrup"></img>
            <span className="order-pic-desc">SYRUP</span>                
          </div>          
        </div>

        <div className="child-article crsr view-child-min" onClick={e=>handle58(e)}>      
          <div className="child-article-row-grid">          
            <img id="wantsCherry" className="order-checkmark" src={checkMark}/>              
            <img className="order-pic-img2" src={imgCherry} alt="cherry"></img>
            <span className="order-pic-desc">CHERRY</span>                        
          </div>
        </div>

      </article>
    </article>

    <ArrowButtons name1="Back to Start" fn1={()=>navigate('/home')} name2="Add to Order" fn2={(e)=>handleSubmit(e)}/>

    </section>
  )

  //handlers

  function handleSubmit(e){
    
    let newItem = {
      style: s51 ? "cone" : "bowl",
      toppings:{
        sprinkles: s61,
        syrup: s62,
        cherry: s63
      }
    }

    let len
    if(!orderItems) len = 0
    else len = orderItems.length
    if(len > 0){
      let obj = orderItems[len-1]
      newItem.id=String(Number(obj.id)+1)
    }
    else newItem.id=0

    
    let arr
    if(orderItems){
      arr = [...orderItems, newItem]
      setOrderItems(arr)
    } 
    else arr.push(newItem)
    setOrderItems(arr)
    window.localStorage.setItem('myOrder', JSON.stringify(arr)) 
    navigate("/view")    
  }

  function handle56(e){
    if(s61){
      document.getElementById("wantsSprinkles").src = xMark;
      ss61(false)     
    }
    else {
      document.getElementById("wantsSprinkles").src = checkMark;
      ss61(true)
    }
  }

  function handle57(e){
    if(s62){
      document.getElementById("wantsSyrup").src = xMark;
      ss62(false)     
    }
    else {
      document.getElementById("wantsSyrup").src = checkMark;
      ss62(true)
    }
  }

  function handle58(e){
    if(s63){
      document.getElementById("wantsCherry").src = xMark;
      ss63(false)     
    }
    else {
      document.getElementById("wantsCherry").src = checkMark;
      ss63(true)
    }
  }

  function handle80(e){
    document.getElementById("wantsCone").src = checkMark;
    document.getElementById("wantsBowl").src = xMark;
    ss51(true)
  }

  function handle81(e){
    document.getElementById("wantsCone").src = xMark;
    document.getElementById("wantsBowl").src = checkMark;
    ss51(false)
  }

}

export default PlaceOrder