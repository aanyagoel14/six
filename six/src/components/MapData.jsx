import React from 'react'
import Card from './Card'

function MapData(props) {

const showcard = props.data.map((ele,index)=>{
  return <Card key={index} ele={ele} />  //key is always used while using map
})

return (
  <>
  {showcard}
  </>
)

}

export default MapData