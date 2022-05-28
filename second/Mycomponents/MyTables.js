import React from 'react'

export default function MyTables() {

  let myHeaderStyle = {
    textAlign:"center",
    padding:"10px"
   
}

  let myimage ={
    marginLeft:"25%",
    width:"50%"

  }
  return (
    <>
      <h4 style={myHeaderStyle}>Below are the list of tables given below : </h4>
      <img src={require('./image.jpg')} style={myimage} />
    </>
  )
}
