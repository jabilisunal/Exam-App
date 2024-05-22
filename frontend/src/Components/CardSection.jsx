import React, { useContext } from 'react'
import "./CardSection.css"
import MainContext from '../Context/Context'
const CardSection = () => {
    const {data,addToBasket}=useContext(MainContext)
  return (
    <div className='cardsection'>
<div className="container">
    <h2>Shopping</h2>
    <div className="cards">
      {data
      .slice(0,3)
      .map((item,index)=>(
        <div key={item.id} className="card">
            <img src={item.image}alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="btns">
            <p>{item.price}AZN</p>
            <button onClick={()=>{
              addToBasket(item._id)
            }} className='basket'> Add to basket</button>
            <button className='detail'>Detail</button>
            </div>
         </div>
       
))}
       
        
      
    </div>
</div>
    </div>
  )
}

export default CardSection