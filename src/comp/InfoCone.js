import pinkCone from '../img/pink-cone.png'      
import whiteCone from '../img/white-cone.png'      
import chocCone from '../img/choc-cone.png'      

const InfoCone = ({cone1, c1fh, c1fv, cone2, c2fh, c2fv, msg}) => {

  let cn1 = "home-img1 "
  if(c1fh === "true" && c1fv === "false") cn1 += " img-h-flip"
  if(c1fh === "false" && c1fv === "true") cn1 += " img-v-flip"
  if(c1fh === "true" && c1fv === "true") cn1 += " img-hv-flip"    

  let cn2 = "home-img1 "
  if(c2fh === "true" && c2fv === "false") cn2 += " img-h-flip"
  if(c2fh === "false" && c2fv === "true") cn2 += " img-v-flip"
  if(c2fh === "true" && c2fv === "true") cn2 += " img-hv-flip"    

  return (
    <article className='parent-article'>
    {cone1 === "pink" ? (<img className={cn1} src={pinkCone} alt="pink cone"/>) : null }
    {cone1 === "white" ? (<img className={cn1} src={whiteCone} alt="white cone"/>) : null }
    {cone1 === "choc" ? (<img className={cn1} src={chocCone} alt="choc cone"/>) : null }        
    <p>{msg}</p>
    {cone2 === "pink" ? (<img className={cn2} src={pinkCone} alt="pink cone"/>) : null }
    {cone2 === "white" ? (<img className={cn2} src={whiteCone} alt="white cone"/>) : null }
    {cone2 === "choc" ? (<img className={cn2} src={chocCone} alt="choc cone"/>) : null }        
    </article>
  )
}

export default InfoCone