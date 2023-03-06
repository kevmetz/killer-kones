import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import ArrowButtons from './comp/ArrowButtons'
import PageTitle from './comp/PageTitle'
import OrderItemDetail from './comp/OrderItemDetail'

const ViewOrders = () => {

  const [orderItems, setOrderItems] = useState([])
  const navigate = useNavigate()

  //window.localStorage.clear()

  useEffect(()=>{
    let x = window.localStorage.getItem('myOrder')
    if(x) setOrderItems(JSON.parse(x))
  }, [])

  let len = 0
  if(orderItems) len = orderItems.length

  return (
    <section className="page-section">

      { len === 0 ? (
        <PageTitle title="Order is empty. Add another item."/>        
      ) : (
        <PageTitle title="Review your order !"/>
      )}        

      {len > 0 && orderItems.map((i, ndx)=>(
        <OrderItemDetail item={i} ndx={ndx} fn={()=>handleItemDelete(i.id)} />
      ))}
     
      <ArrowButtons name1="Add Item" fn1={()=>navigate('/order')} name2="Finish Order" fn2={()=>navigate('/complete')}/>

    </section>
  ) 

  function handleItemDelete(id){
    let arr = orderItems.filter(x=>x.id !== id)
    setOrderItems(arr)
    window.localStorage.setItem('myOrder', JSON.stringify(arr))    
  }

}

export default ViewOrders