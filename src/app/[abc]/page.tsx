import React from 'react'

const Page = async({params}:any) => {
    const fetchUser= await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const res= await fetchUser.json()
  return  <div>{res.name}</div>
}

export default Page
