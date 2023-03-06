import { useNavigate } from "react-router-dom"
import ArrowButtons from "./comp/ArrowButtons"
import PageTitle from "./comp/PageTitle"
import InfoCone from "./comp/InfoCone"

const CompleteOrder = () => {

  const navigate = useNavigate()
  let str1 = "Congratulations your order is complete ! Unfortunately you don't actually get any ice cream. 😕"
  let str2 = "Well that's the end of the demo, but if you're interested I have some borders and stuff I didn't end up using if you wanted to see more."

  return (
    <section className="page-parent-section">
      <PageTitle title="Order Complete !"/>
      <InfoCone cone1="white" c1fh="false" c1fv="false" cone2="choc" c2fh="true" c2fv="true" msg={str1} />
      <ArrowButtons name1="Start Over" fn1={()=>navigate('/home')} name2="See More" fn2={()=>navigate('/complete')}/>
      <InfoCone cone1="pink" c1fh="false" c1fv="false" msg={str2} />
    </section>
  )
}

export default CompleteOrder