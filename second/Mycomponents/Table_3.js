import React from 'react'

export const Table_3 = () => {
  return (
    <>
    <h4 class="table1_heading">TASK-3</h4>
     
     <table class="first-table" width="55%" id="table">
         <tr>     
             <th>SR.NO</th>
             <th>DESCRIPTION OF THE PROPERTY</th>
             <th></th>
         </tr>
 
         <tr>
             <td id="sn1">1.</td>
             <td>Postal address of the Property
                 With pin code
             </td>
             <td> 
                <input type="text" class="table3_ip" placeholder="Enter the Complete Postal Address" id="table3_ip"/>
             </td>
         </tr>
 
         <tr>
             <td id="sn1" rowspan="4" >2.</td>
             <td >City / Town </td>
             <td> 
                 <input type="text" class="table3_ip" placeholder="Enter City/Town" id="table3_ip"/>
             </td>
         </tr>
 
         <tr>
             <td>Residential area </td>
             <td> <input type="text" class="table3_ip" placeholder="Type 'Yes'  othewise N.A." id="table3_ip"/>
             </td>
         </tr>
 
         <tr>
             <td>Commercial Area </td>
             <td><input type="text" class="table3_ip" placeholder="Type 'Yes'  othewise N.A." id="table3_ip"/>
             </td>
             
         </tr>
 
         <tr>
             <td>Industrial Area </td>
             <td><input type="text" class="table3_ip" placeholder="Type 'Yes'  othewise N.A." id="table3_ip"/>        
             </td>
         </tr>
 
 
    
         <tr>
             <td id="sn1">3.</td>
             <td>  Classification of the Area 
             </td>
             <td>  
                 <select name="urban" id="" class="table3_ip">
                     <option value="Rural">Rural Area</option>
                     <option value="Urban">Urban Area</option>
                 </select>
                 
             </td>
         </tr> 
 
         <tr>
             <td id="sn1">4.</td>
             <td> Coming under corporation limit / village Panchayat/ municipality</td>
             <td> 
                 <input type="text" class="table3_ip" placeholder="Which limit of juridiction" name="" id=""/>
             </td>
         </tr>
 
         <tr>
             <td id="sn1">5.</td>
             <td> Whether covered under any state/central govt. enactments [E.g. urban land ceiling act or notified under agency area/scheduled area/cantonment area] </td>
             <td> 
                 <select name="" id="" class="table3_ip">
                     <option value="yes">Yes </option>
                     <option value="no">No</option>
                     <option value="na">N.A.</option>
                 </select>  	
             </td>
         </tr>  
 
 
 
         <tr>
             <td id="sn1">6.</td>
             <td>In case it is an agricultural land any conversion to house site plots in contemplated 
             </td>
             <td> 
                 <select name="" id="" class="table3_ip">
                     <option value="yes">Yes </option>
                     <option value="no">No</option>
                     <option value="na">N.A.</option>
                 </select>  	
             </td>
         </tr>
 
         <tr>
             <td id="sn1" rowspan="6">7.</td>
             <td>Location of the property
             </td>
             <td><input type="text" name="" placeholder="Enter the location of property" id="" class="table3_ip"/></td>
         </tr>
 
         <tr>
             <td>Plot No. / Nagar</td>
             <td><input type="text" name="" placeholder="Enter Plot No / Nagar" id="" class="table3_ip"/></td>
 
         </tr>
     
         <tr>
             <td>S. F. No. / T.S. No. / R.S. No.	
             </td>
             <td><input type="text" name="" placeholder="Enter Sector No." id="" class="table3_ip"/></td>
 
         </tr>
     
         <tr>
             <td>Village / Block</td>
             <td><input type="text" name="" placeholder="Enter Village/ Block" id="" class="table3_ip"/></td>
 
         </tr>
     
         <tr>
             <td>Taluka / Ward	</td>
             <td><input type="text" name="" placeholder="Enter the ward name" id="" class="table3_ip"/></td>
 
         </tr>
 
         <tr>
             <td>District / Municipality/Corp</td>
             <td><input type="text" name="" placeholder="Write District/ Municipality Name" id="" class="table3_ip"/></td>
 
         </tr>
 
 
         <tr>
             <td id="sn1" rowspan="5">8.</td>
             <td >  Boundaries of the Property
             </td>
             <td> 
             </td>
         </tr>
 
         <tr>
             
             <td align="right"> North
             </td> 
             <td><input type="text" name="" placeholder="Enter the boundary location " id="" class="table3_ip"/></td>
 
             
         </tr>
 
 
         <tr>
              
             <td align="right"> South 
             </td>
             <td><input type="text" name="" placeholder="Enter the boundary location " id="" class="table3_ip"/></td>
 
         </tr>
     
         <tr>
             
             <td align="right"> East   
             </td>
             <td><input type="text" name="" placeholder="Enter the boundary location " id="" class="table3_ip"/></td>
 
         </tr>
 
         <tr>
             <td align="right">West</td>
             <td><input type="text" name="" placeholder="Enter the boundary location " id="" class="table3_ip"/></td>
 
         </tr>
 
 
         <tr>
             <td id="sn1">9.</td>
             <td>Latitude, longitude and coordinates of the site</td>
             <td><input type="text" class="table3_ip" placeholder="Enter in Coordinated form"/></td>
         </tr>
 
         <tr>
             <td rowspan="4" id="sn1">10.</td>
             <td>Property Tax Receipt Referred	:</td>
             <td>
                 <select name="" id="" class="table3_ip">
                     <option value="yes">Yes </option>
                     <option value="no">No</option>
                     <option value="na">N.A.</option>
                 </select>  	
             </td>
         </tr>
 
         <tr>
             <td>Assessment number	:</td>
             <td> <input type="number" name="" placeholder="---------" class="table3_ip" id=""/></td>
         </tr>
         <tr>
             <td>Tax Amount		:</td>
             <td> <input type="number" name="" placeholder="---------" class="table3_ip" id=""/></td>
 
         </tr>
         <tr>
             <td>Receipt in the name of:</td>
             <td> <input type="number" name="" placeholder="---------" class="table3_ip" id=""/></td>
 
         </tr>
 
         <tr>
             <td rowspan="2" id="sn1">11.</td>
             <td>Electricity Service Connection Consumer number </td>
             <td>Not Produced during Inspection.</td>
         </tr>
 
         <tr>
             <td>In the name of other details if any</td>
             <td> <input type="number" name="" placeholder="---------" class="table3_ip" id=""/></td>
             
         
             
         </tr>
 
     
         <tr>
             <td id="sn1" >12.</td>
             <td> Property Presently Occupied by	:</td>
             <td><input type="text" class="table3_ip" placeholder="Occupied by"/></td>
         </tr>
 
         
         <tr>
             <td id="sn1" >13.</td>
             <td> If tenanted fully,What is the gross monthly rent?</td>
             <td> <input type="number" name="" placeholder="---------" class="table3_ip" id=""/></td>
 
         </tr>
 
         <tr>
             <td rowspan="6" id="sn1">14.</td>
             <td> If Occupied by BothBy assuming the entire building Is let out</td>
             <td>
                 <select name="" id="" class="table3_ip">
                     <option value="yes">Yes </option>
                     <option value="no">No</option>
                     <option value="na">N.A.</option>
                 </select>  	
             </td>
         </tr>
 
         <tr>
             <td>i] What is Probable Monthly rent?	:</td>
             <td> <input type="number" name="" placeholder="---------" class="table3_ip" id=""/></td>
 
         </tr>
 
         <tr>
             <td>ii] What is the advance amount?	:</td>
             <td> <input type="number" name="" placeholder="---------" class="table3_ip" id=""/></td>
 
         </tr>
 
         <tr>
             <td>III. PROCEDURE OF VALUATION	:</td>
             <td>
                 <select name="" id="" class="table3_ip">
                     <option value="yes">Yes </option>
                     <option value="no">No</option>
                     <option value="na">N.A.</option>
                 </select>  	
             </td>
         </tr>
 
         <tr>
             <td align="center">Valuation Details</td>
             <td><input type="text" name="" id="" class="table3_ip" placeholder="If yes enter the valuation details"/></td>
         </tr>
     </table>
     

     <div class="text-center">
      <button type="button" class="btn btn-primary">Submit Form</button>
    </div>

    </>
  )
}
