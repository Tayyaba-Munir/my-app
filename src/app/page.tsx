
import {useContext} from 'react'
import { useState, useEffect } from "react"
import Props from "./components/props"
import Test from "./components/test";
import Test2 from "./components/test2";
import Link from "next/link";
import Shop from './components/shop';
import Cart from './components/cart';
import CartProvider from '@/cartProvider';



// import Image from "next/image";
// import Pie from '../../image/Pie.jpg'
// import Pancakes from '../../image/Pancakes.jpg'
// export default function Home() {
//   return (
//     <div>
      
//     <p className="text-center pt-5 text-[24px]">Image in NextJS</p>
//     <Image src={Pie} alt="Pie" width={150} height={150} loading="lazy" className="w-[400px] h-[400px] ml-5 rounded-full"/>
//     <Image src={require('../../image/Pancakes.jpg')} alt="Pancakes" width={150} height={150} loading="lazy" className="w-[400px] h-[400px] ml-5 rounded-full"/>
    
//     </div>
//   );
//}
 export default async function Home(){
  
//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(0)
//   useEffect(() => {
//     console.log('use effect function fired')
//   },[]);
//   // useEffect(() => {
//   //   console.log('2nd use effect count1')
//   // },[count]);
//   useEffect(() => {
//     console.log('3rd use effect count2')
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//   },[count,count2]);
//   return(
//   <div>
//   <button onClick={()=>setCount(count+1)}>counter increament1={count}</button>
//   <br/>
//   <button onClick={()=>setCount2(count2+1)}>counter increament2={count2}</button>
//   </div>
//   )
//ON CHANGE HANDLE
  // const [inputVal, setInputVal]= useState('')
  // const [radioVal, setRadioVal]= useState('')
  // return(
  //   <div>
  //   <input type="text" value={inputVal} placeholder="Write smth" className="border text-[20px]" onChange={(e)=>setInputVal(e.target.value)}/>
  //   <br/>
  //   <label>
  //     <input type="radio" value='haan' name="abc" onChange={(e)=>setRadioVal(e.target.value)}/> YES
  //   </label>
  //   <label>
  //     <input type="radio" value='nahin' name="abc" onChange={(e)=>setRadioVal(e.target.value)}/> NO
  //   </label>
  //   <br/>
  //   <p className="text-20px text-blue-600">{inputVal} {radioVal}</p>
  //   </div>
  // )

  //CONDITIONAL RENDERING
  // const[show,Setshow]=useState(false);
  // return(
  //   <div>
  //   {
  //     show? <Test2/>:<Test/>
  //   }
  //   <br/>
  //   <button onClick={()=>Setshow(!show)}>Toggle</button>
  //   </div>
  // )

//CONTEXT API

const fetchData= await fetch('https://jsonplaceholder.typicode.com/users')
const res= await fetchData.json()

  return(
    // <div>
    //   <CartProvider>
    // <Shop/>
    // <hr/>
    // <div  className='mb-5'></div>
    // <Cart/>
    // </CartProvider>
    // </div>

    //Generate static params

    <main className='flex min-h-screen flex-col items-center p-10'>
      <h1 className='text-2xl mb-5'>Generate static params</h1>
      <div className='flex flex-col gap-2'>
        {res.map((user:any,i:number)=>{
          return(
            <Link href={`/${user.id}`} key={i}>{user.name}</Link>
          )
        })}
      </div>
    </main>
  )
 }
  