import React from 'react'

export const Table_5 = () => {
  return (

    <>
        
    <h4 class="info"> VALUATION  OF  BUILDING</h4>
    <table class="valuation_building">

        <tr>
            <th>Description</th>
            <th>Shed</th>
            <th>Other</th>
        </tr>

        <tr class="no_border">
            <td >Specifications</td>
            <td ><input type="text" placeholder="Enter Building Type" name="" id=""/></td>
            <td ><input type="text" placeholder="Enter Building Type" name="" id=""/></td> 
        </tr>

        <tr class="no_border">
            <td   >Floor Finish</td>
            <td><input type="text" placeholder="Which BBM Walls" name="" id=""/></td>
            <td><input type="text" placeholder="Which  BBM Walls" name="" id=""/></td>
        </tr>
         

        <tr class="no_border">
            <td  >Superstructure</td>
            <td><input type="text" placeholder="Write RCC. Frame structure" name="" id=""/></td>
            <td><input type="text" placeholder="Write RCC. Frame structure" name="" id=""/></td>           
        </tr>

        <tr class="no_border">
            <td >Roof</td>
            <td><input type="text" placeholder="Write RCC Roof type" name="" id=""/></td>
            <td><input type="text" placeholder="Write RCC Roof type" name="" id=""/></td>
        </tr>

        <tr class="no_border">
        <td >Doors</td>
        <td><input type="text" placeholder="Write the type of doors" name="" id=""/></td>
        <td><input type="text" placeholder="Write the type of doors" name="" id=""/></td>
        </tr>


        <tr class="no_border">
        <td >Windows</td>
        <td><input type="text" placeholder="Write the type of window" name="" id=""/></td>
        <td><input type="text" placeholder="Write the type of window" name="" id=""/></td>
        </tr>

        <tr class="no_border">
        <td  >Weathering Course</td>
        <td><input type="text" placeholder="Enter  the type of weathering" name="" id=""/></td>
        <td><input type="text" placeholder="Enter  the type of weathering" name="" id=""/></td>
        </tr>

        <tr>
            <td>Plinth Area</td>
            <td colspan="2"><input type="text" placeholder="Enter the plinth area" name="" id=""/></td>
            
        </tr>

        <tr>
            <td>Year of Construction</td>
            <td colspan="2"><input type="number" placeholder="Year" name="" id=""/> </td>
            
        </tr>
        <tr>
            <td>Age of the Building</td>
            <td colspan="2"><input type="text" placeholder="Age of building" name="" id=""/></td>
           
        </tr>

        <tr>
            <td>If the age is not exactly known, further life expected</td>
            <td colspan="2"><input type="number" name="" placeholder="Your Age" id=""/> </td>
   
        </tr>

        <tr>
            <td>Total life of the Building estimated 
            </td>
            <td colspan="2"><input type="number" name="" placeholder="Life Span of building" id=""/></td>
        
        </tr>

        <tr>
            <td>Depreciation Percentage [Assuming salvage value = 20%]</td>
            <td colspan="2"><select name="" id="">
                <option value="">Detailed Sheet Attached</option>
                <option value="">Not Attached</option>
            </select></td>
           
        </tr>

        <tr>
            <td>Replacement rate of Construction with the existing condition and specifications</td>
            <td colspan="2"><select name="" id="">
                <option value="">Detailed Sheet Attached</option>
                <option value="">Not Attached</option>
            </select></td>
        </tr>

        <tr>
            <td>Replacement Value</td>
            <td colspan="2"><select name="" id="">
                <option value="">Detailed Sheet Attached</option>
                <option value="">Not Attached</option>
            </select></td>
        </tr>

        <tr>
            <td>Depreciation Value at the rate of %</td>
            <td colspan="2"><select name="" id="">
                <option value="">Detailed Sheet Attached</option>
                <option value="">Not Attached</option>
            </select></td>
        </tr>

        <tr>
            <td>Present Value of the Building</td>
            <td colspan="2"><input type="number" name="" placeholder="Enter the present value of building" id=""/></td>
           
        </tr>  
    </table>


    <br></br>

    <h4 class="info">C. DETAILS OF VALUATION:- </h4>

<table class="valuation">
    <tr>
        <td>Particular 
            of Items
        </td>
        <td>Plinth 
            Area in 
            Sq. Mt
            </td>
        <td>Estimated Replacement Rate Per Sq. Mt</td>
        <td>Replacement Cost [Rs.]</td>
        <td>Dep.
            [%.]</td>
        <td>Net Value</td>
    </tr>


    <tr>
        <td>Raw Material Shed</td>
        <td><input type="number" name="" placeholder="Enter Plith area" id=""/></td>
        <td><input type="number" name="" placeholder="Write Estimated rate" id=""/> </td>
        <td><input type="number" name="" placeholder="Enter replacement cost" id=""/></td>
        <td><input type="number" name="" min="0.1" max="1" id="" placeholder="write the dep %"/></td>
        <td><input type="number" name="" placeholder="Write the net value" id=""/></td>
    </tr>
    <tr>
        <td>Godown & Packing RCC Roof</td>
        <td><input type="number" name="" placeholder="Enter Plith area" id=""/></td>
        <td><input type="number" name="" placeholder="Write Estimated rate" id=""/> </td>
        <td><input type="number" name="" placeholder="Enter replacement cost" id=""/></td>
        <td><input type="number" name="" min="0.1" max="1" id="" placeholder="write the dep %"/></td>
        <td><input type="number" name="" placeholder="Write the net value" id=""/></td>
    </tr>
    <tr>
        <td>Internal office</td>
        <td><input type="number" name="" placeholder="Enter Plith area" id=""/></td>
        <td><input type="number" name="" placeholder="Write Estimated rate" id=""/> </td>
        <td><input type="number" name="" placeholder="Enter replacement cost" id=""/></td>
        <td><input type="number" name="" min="0.1" max="1" id="" placeholder="write the dep %"/></td>
        <td><input type="number" name="" placeholder="Write the net value" id=""/></td>
    </tr>

    <tr>
        <td>Internal Stair case & Toilet Block</td>
        <td><input type="number" name="" placeholder="Enter Plith area" id=""/></td>
        <td><input type="number" name="" placeholder="Write Estimated rate" id=""/> </td>
        <td><input type="number" name="" placeholder="Enter replacement cost" id=""/></td>
        <td><input type="number" name="" min="0.1" max="1" id="" placeholder="write the dep %"/></td>
        <td><input type="number" name="" placeholder="Write the net value" id=""/></td>
    </tr>

    <tr>
        <td></td>
        <td><input type="text" placeholder="total area" name="" id=""/></td>
        <td colspan="3">Total</td>
      
        <td><input type="text" placeholder="Final Result" name="" id=""/></td>
    </tr>
</table>
     <div class="text-center">
      <button type="button" class="btn btn-primary">Submit Form</button>
    </div>

    </>
  
  )
}
