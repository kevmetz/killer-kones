const SvgArrow = ({fn, flip, cname}) => {

  let str = ""
  cname ? str = cname : str = "svg-arrow"
  str += " crsr"   
  if(flip) str += " img-hv-flip"

  return (  
    <svg className={str} onClick={fn} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="47" stroke-width="5" fill="none" />      
      <rect x="15" y="40" width="40" height="20" stroke="none"/>   
      <polygon points="50,25  50,75  85,50" stroke="none"/>
    </svg>
  )
}

export default SvgArrow