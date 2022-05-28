import React from 'react'

export const Table_2 = () => {
  return (
    <>
      <h4 class="table1_heading">VALUATION  REPORT  OF  INDUSTRIAL  UNIT </h4>
      <p class="table1_heading">[  LAND  &  BUILDING ]</p>
      <table class="first-table" width="55%" id="first">
        <tr>     
            <th>SR.NO</th>
            <th> GENERAL</th>
            <th></th>
        </tr>

        <tr>
            <td id="sn1">1.</td>
            <td>Purpose of Valuation </td>
            <td>  <input type="text" name="" id="" class ="table2_ip" placeholder="Your Purpose of Land"/>
            </td>
        </tr>

        <tr>
            <td id="sn1" rowspan="2" >2.</td>
            <td >a. Date of Inspection</td>
            <td> <input type="datetime" class ="table2_ip" placeholder="27/05/2021"/>
            </td>
        </tr>

        <tr>
            <td>b. Date on which the valuation is Made </td>
            <td><input type="datetime" placeholder="12/03/2021"/></td>
        </tr>
 
        <tr>
            <td id="sn1">3.</td>
            <td> Name [As reported] and Address
                His /their Address[es] with phone No.
                [Details of Share of each owner in case of 
                joint ownership ] and address with
                phone number Contact No.  
            </td>
            <td>  
                <textarea name="" id="" cols="20" rows="5" class ="table2_ip" placeholder="Address and details of owner"></textarea>

            </td>
        </tr>
        <tr>
            <td id="sn1">4.</td>
            <td>Documents Produced for Perusal	:</td>
            <td> 
                 <textarea name="" id="" cols="20" class ="table2_ip" placeholder="Enter the name and date of issue of document" rows="4"></textarea>
            </td>
        </tr>

        <tr>
            <td id="sn1">5.</td>
            <td>Brief description of the property taken for valuation [including Leasehold/freehold etc.]</td>
            <td> 
                    <input type="text" class ="table2_ip" placeholder="Industrial/ Leasehold/freehold "/>	
            </td>
        </tr>

        <tr>
            <td id="sn1">6.</td>
            <td>Scope of Valuation </td>
            <td>  <input type="text"  class ="table2_ip" name="" placeholder="Which Unit" id=""/>
            </td>
        </tr>

        <tr>
            <td id="sn1">7.</td>
            <td>If this report, is to be used for any
                Bank purpose, state the name of the
                Bank & Branch, if Known.
            </td>
            <td><input type="text"  class ="table2_ip" name="" placeholder="Bank Details" id=""/></td>
        </tr>
    </table>
    
    <div class="text-center">
      <button type="button" class="btn btn-primary">Submit Form</button>
    </div>

    </>
  )
}
