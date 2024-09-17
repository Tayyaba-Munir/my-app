export default async function Home({params}:any){
    const fetchUser= await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    console.log(fetchUser)
    const res= await fetchUser.json()
    //console.log(res)
    return <div>{res.name}</div>
    
}