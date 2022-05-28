import React from 'react'
import "./style.css" 
export const Table_1 = () => {

    let table_2heading ={
        textDecoration:"underline",
        textAlign:"center"
    }
    let FirstTable ={
        border:"1px solid black" ,
        margin:"auto",
        width:"70%",
        padding:"5px"
         
    }
  return (
    <> 
    <h4 style={table_2heading} className="table1_heading">SUMMARY   OF  VALUATIONS </h4>
    <table  className="first-table" style={FirstTable} width="50%" id="first">
        <tr className='trow' >     
            <th>SR.NO</th>
            <th>PARTICULARS</th>
            <th>DETAILS</th>
        </tr>

        <tr>
            <td id="sn1">1.</td>
            <td>Name  & Address of  Client</td>

            <td>
                <input  className="table1_ip" type="text" placeholder="Enter Your name and address" required/>
            </td>


        </tr>

        <tr>
            <td id="sn1" >2.</td>
            <td>Plot Area  </td>
            <td> 
                <input  className="table1_ip" type="text" placeholder="Enter Your Plotarea " name="name"required />
            </td>
        </tr>

        <tr>
            <td id="sn1">3.</td>
            <td>Total B/ Up Area </td>
            <td> <input  className="table1_ip" type="text" placeholder="Total Area" required/></td>
        </tr>


        <tr>
            <td id="sn1">4.</td>
            <td>Year of Construction   </td>
            <td> <input  className="table1_ip" type="number" min="1980" max="2022" stap="1" placeholder="Year of Construction" required/></td>
        </tr>
        <tr>
            <td id="sn1">5.</td>
            <td>Fair Market Value</td>
            <td><input type="number"  className="table1_ip" min="10,0000" max="" step="10000" placeholder="Fair Market Value"    /></td>
        </tr>

        <tr>
            <td id="sn1">6.</td>
            <td>Conservative Value  </td>
            <td><input type="number"  className="table1_ip" min="10,0000" max="" step="10000" placeholder="Enter Your Conservative Value"   /></td> 
        </tr>

        <tr>
            <td id="sn1">7.</td>
            <td>Distress Sale Value </td>
            <td><input type="number"  className="table1_ip" min="10,0000" max="" step="10000" placeholder="Your Distress Sale Value "   /></td>

        </tr>

        <tr>
            <td id="sn1">8.</td>
            <td>Insurable Value </td>
            <td><input type="number"  className="table1_ip" min="10,0000" max="" step="10000" placeholder="Enter Insurable Value"   /></td>

        </tr>
        <tr>
            <td id="sn1">9.</td>
            <td>Govt. Value</td>
            <td><input type="number"  className="table1_ip" min="10,0000" max="" step="10000" placeholder="Enter Your Govt. Value"   /></td>

        </tr>
        
        <tr>
            <td id="sn1">10.</td>
            <td>MIDC Value </td>
            <td><input type="number"  className="table1_ip" min="10,0000" max="" step="10000" placeholder="Enter the MIDC Value"   /></td>

        </tr>
    </table>

    <div class="text-center">
      <button type="button" class="btn btn-primary">Submit Form</button>
    </div>


    </>

  )
}
