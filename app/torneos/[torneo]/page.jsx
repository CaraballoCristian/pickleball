import React from 'react'

//parametros que pasan por la url
const torneo = ({params}) => {
  return (
    <div>torneo {params.torneo}</div>
  )
}

export default torneo