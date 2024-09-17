export default async function Product({params}:{params:{product:string}}){
  const fetchData= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)
    const res= await fetchData.json()
    return(
      <div>
        <p>Product Detail</p>
        <h1>{res.id}</h1>
        <h1>{res.title}</h1>
        <p>{res.body}</p>
      </div>
    )
}


