import SvgArrow from './SvgArrow'

const ArrowButtons = ({name1, fn1, name2, fn2}) => {
  return (
    <article className="parent-article">
        { name1 ? (
        <div className="hover-wrapper">
          <SvgArrow fn={fn1} flip="true"/>
          <button className="parent-button" type="button" onClick={fn1}>{name1}</button>
        </div> ) : null }
        { name2 ? (
        <div className="hover-wrapper">
          <button className="parent-button" type="button" onClick={fn2}>{name2}</button>                
          <SvgArrow fn={fn2}/>
        </div> ) : null }
    </article>      
  )
}

export default ArrowButtons