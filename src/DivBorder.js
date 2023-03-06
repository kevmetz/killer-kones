import { useNavigate} from 'react-router-dom'
import PageTitle from "./comp/PageTitle"
import ArrowButtons from './comp/ArrowButtons'


const DivBorder = () => {

  const navigate = useNavigate()

  return (
    <section className="page-section">
      <PageTitle title="More Stuff - CSS Borders"/>    
      
      <div className="div-border">
        <div className="div-border2">
          A fun neopolitan border that was done with divs and borders. Fairly simple and you can see why I didn't use it, lol.
        </div>      
      </div>

      <div className="div-border3">
        <div className="div-border4">
          Same idea but slightly thinner borders and the colors are more like a ridge. Much more tasteful but I still did't use it.
        </div>      
      </div>

      <ArrowButtons name1="&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;" fn1={()=>navigate('/complete')} name2="Continue" fn2={()=>navigate('/svg')}/>
    </section>
  )
}

export default DivBorder