import { CartContext } from '@/context'
import React, { useContext } from 'react'
const Shop = () => {
    const obj=useContext(CartContext)
    console.log(obj)
    
let arr= [
    {name: 'top', id:1},
    {name: 'bottom', id:2},
    {name: 'shirt', id:3}
]
 return (
    <div className='ml-5'>
        <h1>Shopping</h1>
       <ol>
        {
            arr.map((val,i)=>{
                return(
                <li key={i}>
                    <span className='mr-5'>{val.id}</span>
                    {val.name}
                    <span className='ml-5' onClick={()=>obj.add({name:val.name, id:val.id})}>Add to cart</span>
                </li>
                )
            })
        }
       </ol>
    </div>
  )
}

export default Shop

