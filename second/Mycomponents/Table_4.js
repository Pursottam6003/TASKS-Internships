import React from 'react'

export const Table_4 = () => {
  return (
    <>
    

    <h4 class="info">Driving appproval</h4>

<table class="driving_approval">
    <tr>
        <td>A</td>
        <td>Date of issue and validity of layout of approved Map/Plan</td>
        <td><input type="text" name="" placeholder="Enter date of issue and approved by" class="table5_ip" id=""/></td>
    </tr>

    <tr>
        <td>B.</td>
        <td>Approved Map/Plan issuing authority -</td>
        <td><input type="text" name="" placeholder="Enter approved map and issuing authority" class="table5_ip" id=""/></td>

    </tr>

    <tr>
        <td>C</td>
        <td>whether Genuineness or authentic of approved Map/Plan is verified</td>
        <td><input type="text" name="" placeholder="Enter Yes/No if yes please mention" class="table5_ip" id=""/></td>
    </tr>
    <tr>
        <td>D</td>
        <td>Any other comments by our empanelled Valuers or authentic Valuers on authentic of approved Plan</td>
        <td><input type="text" name="" placeholder="Any other information then please mention" class="table5_ip" id=""/></td>

    </tr>

    <tr>
        <td>E</td>
        <td>discuss on the building approval, reference, consequences of violation etc.-</td>
        <td><input type="text" name=""  class="table5_ip" placeholder="Discuss the building approval reference on violation" className="table5_ip" id=""/></td>

    </tr>
    <tr>
        <td colspan="3">Value of Building is estimated by adopting suitable unit plinth area rate depending 
            Upon the specifications. Depreciation is calculated by straight-line method assuming a 
            Salvage Value of 30%  
        </td>
         
    </tr>
</table>
    <div class="text-center">
      <button type="button" class="btn btn-primary">Submit Form</button>
    </div>

</>
  
  )
}
