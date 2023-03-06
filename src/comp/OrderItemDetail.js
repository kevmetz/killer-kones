import imgCone from '../img/cone.png'
import imgBowl from '../img/bowl.png'
import imgSprinkles from '../img/sprinkles.png'
import imgSyrup from '../img/syrup.png'
import imgCherry from '../img/cherry.png'
import xMark from '../img/xmark2.png'

const OrderItemDetail = ({item, ndx, fn}) => {
  return (
    <article className="parent-article">
    <article className="parent-article-col start">

      <div className="parent-article-row wide">
        <span className="number-circle">&nbsp;&nbsp;Item # {ndx+1}&nbsp;&nbsp;</span>          
        <img className="order-checkmark" onClick={fn} src={xMark}/>          
      </div>

      <div className="child-col">
        <div className="child-row">&nbsp;</div>
        <div className="child-row">
          {item.style ==="cone" ? 
            (
              <>
              <span>Style : </span>
              <img className="order-pic-img2" src={imgCone} />
              <span> cone</span>
              </>
            ) : (
              <>
              <span>Style : </span>
              <img className="order-pic-img2" src={imgBowl} />
              <span> bowl</span>
              </>
            )
          }
        </div>
        <div className="child-row">&nbsp;</div>
        <div className="child-row">
          <span>Toppings :</span>
          {
          item.toppings.sprinkles ?
              (
              <>
              <img className="order-pic-img2" src={imgSprinkles} />
              <span>sprinkles &nbsp;</span>                    
              </>
              ) : ("")
          }
          {  
          item.toppings.syrup ?
              (
              <>
              <img className="order-pic-img2" src={imgSyrup} />
              <span>syrup &nbsp;</span>                    
              </>
              ) : ("")
          }
          {  
          item.toppings.cherry ?
              (
              <>
              <img className="order-pic-img2" src={imgCherry} />
              <span>cherry &nbsp;</span>                    
              </>
              ) : ("") 
          }
        </div>
      </div>

    </article>          
    </article> 
  )
}

export default OrderItemDetail