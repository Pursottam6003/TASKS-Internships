import React from 'react'

export const Footer = () => {
    let footerStyle = {
        backgroundColor: "rgb(75, 75, 75)",
        color: "white",
        margin: "30px",
        padding: "30px",
       
    }
  return (
    <footer>
    <div className="" style={footerStyle}>
        <p>Copyright Policy valid upto 2070</p>
        <p>Terms and Conditions may apply </p>
    </div>
    </footer>
  )
}
