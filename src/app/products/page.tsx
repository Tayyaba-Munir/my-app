import next from "next"
import Link from "next/link"
export default async function Products(){
    const fetchData= await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:2000}})
    const res= await fetchData.json()
    return(
    <div>Product List
        {res.map((item:any,i:number)=>{
            return(
                <li><Link href={`/products/${item.id}`}>{item.title}</Link></li>
            )
        })}
    </div>
    
)
}