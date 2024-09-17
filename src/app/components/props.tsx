import React from 'react'

const Props = ({name='Alpha',cast}:{name?:string, cast:string}) => {
    
  return (
    <div>
      <h1>{`Hello ${name} ${cast}`}</h1>
    </div>
  )
}

export default Props
