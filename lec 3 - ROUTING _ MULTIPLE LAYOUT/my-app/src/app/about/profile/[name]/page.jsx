import React from 'react'

const page = ({params}) => {

    const {name} = params;

  return (
    <h1>

        About profile - {name}
      
    </h1>
  )
}

export default page
