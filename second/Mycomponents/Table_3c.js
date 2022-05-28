import React from 'react'

export const Table_3c = () => {
  return (
    <>

    <br></br>
    <table class="first-table">
    
    <tr>
        <td colspan="3"><strong>PART – C  BUILDING</strong> </td>
    </tr>

    <tr>
        <th>SNO</th>
        <th>Type of building</th>
        <th>Industrial</th>
    </tr>

    <tr>
        <td id="sn1">1.</td>
        <td>Type of Construction </td>
        <td>
            <select name="" id="" class="table4_ip">
                <option value="">RCC Type</option>
                <option value="">Muddy shad</option>
                <option value="">Assam type</option>
            </select>
        </td>
    </tr>

    <tr>
        <td id="sn1">2.</td>
        <td>Quality of Construction </td>
        <td>
            <select name="" id="" class="table4_ip">
                <option value="">First class</option>
                <option value="">Second Class</option>
                <option value="">Third Class</option>
            </select>
        </td>
    </tr>
    <tr>
        <td id="sn1">3.</td>
        <td>Appearance of Building </td>
        <td>
            <select name="" id="" class="table4_ip">
                <option value="">Common Type</option>
                <option value="">Innovative Design</option>
                <option value="">Different</option>
            </select>
        </td>
    </tr>
    <tr>
        <td id="sn1">4.</td>
        <td>Maintenance / Condition of Building </td>
        <td>
            <select name="" id="" class="table4_ip">
                <option value="">Good</option>
                <option value="">Newly Constructed</option>
                <option value="">Poor</option>
            </select>
        </td>
    </tr>
    <tr>
        <td id="sn1">5.</td>
        <td>B/up Area  </td>
         <td><input type="number" class="table4_ip" placeholder="Area in Sq.Mt"name="" id=""/></td>
    </tr>
    <tr>
        <td id="sn1">6..</td>
        <td>Number of floors and height of each floor including basement, if any </td>
        <td>
            <select name="" id="" class="table4_ip">
                <option value="">Single Storied</option>
                <option value="">Multi Storied</option>
                
            </select>
        </td>
    </tr>
</table>

<br></br>
    <table class="floor_area">
        <tr>
            <th rowspan="2">Floor</th>
            <th rowspan="2">Year of Const.</th>
            <th rowspan="2">Roof</th>
            <th colspan="3">Plinth Area</th>
        </tr>

        <tr>
            <td>Main Portion
                - A
            </td>

            <td>Cantilevered Portion – B</td>
            
        </tr>


        <tr>
            <td><input type="number" class="table4i_ip" placeholder="Area in Sq.Mt"name="" id=""/></td>

            <td><input type="number" placeholder="Year"/></td>
            <td><input type="number" placeholder="Roof Number"/></td>

            <td>----</td>
            <td>---</td>
            <td>416.62 Sq. Mt</td>
        </tr>
        <tr>
            <td colspan="4"></td>
            <td>B/up Area </td>
            <td><input type="text" placeholder="Total B/up Area"/></td>

        </tr>

    </table>


    <br></br>

    <div class="text-center">
      <button type="button" class="btn btn-primary">Submit Form</button>
    </div>

    </> 
     
  )
}
