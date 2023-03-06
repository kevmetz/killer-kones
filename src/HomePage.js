import { useNavigate } from "react-router-dom"
import pinkCone from './img/pink-cone.png'      
import whiteCone from './img/white-cone.png'      
import chocCone from './img/choc-cone.png'      
import PageTitle from "./comp/PageTitle"
import ArrowButtons from "./comp/ArrowButtons"

const HomePage = () => {

  const navigate = useNavigate()

  return (
  <section className="page-parent-section">

    <PageTitle title="Welcome !"/>    

      <article className="parent-article">
      <div className="parent-article-row">
          <img className="home-img1 img-hv-flip" src={pinkCone} alt="pink cone"/>            
          <span>Welcome to the krazy Killer Kones ! This sweet tiny demo mimicks a simple ice
            cream ordering process where you choose a cone or a bowl for your ice cream,
            and then select your toppings.</span>
            </div>
      </article>

      <ArrowButtons name2="Start Demo" fn2={()=>navigate('/order')}/>

      <article className='parent-article'>
      <p>This micro app was built in React with browser routing, state, effect, context, ref, 
        and dry reusable components. The database is mimicked using local browser storage 
        for crud operations.</p>
      <img className="home-img1 img-h-flip" src={whiteCone} alt="vanilla cone"/>    
      </article>

      <article className="parent-article">
        <img className="home-img1 img-h-flip" src={chocCone} alt="choc cone"/>                
        <p>The .PNG images are done with paint.net and are consistently scaled.
          The arrow links are customizable SVG components.
          The CSS is all custom, responsive layout and content that uses
          mostly flex-box and a bit of grid.</p>
      </article>  

    </section>
  )
}

export default HomePage