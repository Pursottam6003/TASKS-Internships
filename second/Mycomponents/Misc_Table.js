import React from 'react'

export const Misc_Table = () => {
  return (
     <>
           <table class="abstract-value">

<tr>
    <th rowspan="2">Part </th>
    <th rowspan="2">Description </th>
    <th colspan="2">Value of Adopting</th>
</tr>
<tr>
    <td>GLVRs.</td>
    <td>PMR Rs.</td>
</tr>

<tr>
    <td>B</td>
    <td>Land</td>
    <td><input type="number"  min="300000" placeholder="Enter the Realizable sale value" name="" id=""/></td>
    <td>`.77,47,000/-   </td>
</tr>

<tr>
    <td>C</td>
    <td>Building </td>
    <td>`.29,07,000/-</td>
    <td>`.29,07,000/-  </td>
</tr>
<tr>
    <td>D</td>
    <td>Amenities </td>
    <td>N.A. </td>
    <td>`.1,50,000/-  </td>
</tr>
<tr>
    <td>E</td>
    <td>Services</td>
    <td>N.A.</td>
    <td>`.2,50,000/- </td>
</tr>

<tr>
    <td colspan="2">Total</td>
    <td>`.53,57,000/-   </td>
    <td>`.1,10,54,000/-</td>
</tr>

<tr>
    <td colspan="4"></td>
</tr>

<tr>
    <td colspan="4" align="center"> <h3>Factors favouring for an additional Value</h3></td>
     
</tr>
<tr>
    <td colspan="2">1. Near to Main Road</td>
    <td colspan="2"></td>
</tr>

<tr>
    <td colspan="2">2. All Amenities are readily available in the nearby Area </td>
    <td colspan="2"></td>
</tr>
<tr>
    <td colspan="2">Add                 [+]</td>
    <td colspan="2"></td>
</tr>
<tr>
    <td colspan="2">Factors Favoring for less Value</td>
    <td colspan="2"></td>
</tr>

<tr>
    <td colspan="2">Factors Favoring for less Value</td>
    <td colspan="2"></td>
</tr>

<tr>
    <td colspan="2">1.</td>
    <td  colspan="2">NIL</td>
</tr>
<tr>
    <td colspan="2">2.</td>
    <td  colspan="2"></td>
</tr>

<tr>
    <td colspan="2">Less. [-]</td>
    <td  colspan="2">NIL</td>
</tr>


<tr>
    <td colspan="2">Present Market Value</td>
    <td colspan="2"><input type="number"  placeholder="Write the Present market value" min="300000" name="" id=""/></td>
</tr>

<tr>
    <td colspan="2">Realizable Sale Value</td>
    <td colspan="2"><input type="number"  min="300000" placeholder="Enter the Realizable sale value" name="" id=""/></td>

</tr>

<tr>
    <td colspan="2">Distressed Sale Value </td>
    <td colspan="2"><input type="number" placeholder="write the distressed sale value" min="300000" name="" id=""/></td>
</tr>

<tr>
    <td colspan="2">Insurable Value</td>
    <td colspan="2"><input type="number" placeholder="Enter the Insurable Value" min="300000" name="" id=""/></td>

</tr>


<tr>
    <td colspan="2">Govt Value  </td>
    <td colspan="2"><input type="number" placeholder="Enter Govt Value" min="300000" name="" id=""/></td>

</tr>

<tr>
    <td colspan="2">Value As Per MIDC Rates</td>
    <td colspan="2"><input type="number"  min="300000" placeholder="Value as per MIDC" name="" id=""/></td>
</tr>


</table>   

<div class="text-center">
      <button type="button" class="btn btn-primary">Submit Form</button>
    </div>

     </>
  )
}
