import React, { useState } from "react";
import {  Link } from "react-router-dom";
import "./Form.css";

function Form() {

   const [productDetails,setProductDetails]=useState ({
    DATE:"",SB_NO:"",BE_NO:"",CHA:"",LINER:"",CARGO:"",PACK_WEIGHT:"",LABOUR:"",TYPE_OF_OPERATION:"",
    Import_export:"",EXP_IMP_NAME:"",OPERATION:"",FROM:"",TO:"",FROM_CONTAINER:"",TO_CONTAINER:"",
    PACKS:"",CONTAINER_SIZE:"",FILLING_DETAILS:""
   });

function handlingInput(e){
    const inputData = {...productDetails}
     inputData[e.target.name] = e.target.value
     let obj=inputData
     setProductDetails(obj)
     console.log(inputData,"length",inputData.length)
  }
  function registration_submission(e){
    e.preventDefault();
     alert('A form was submitted: ' + JSON.stringify(productDetails));

    fetch('https://svt-logistics-server.herokuapp.com/FormDetails', 
    {
      // mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"},
        
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(productDetails)
      }).then(response => response.json())
      .then(data => console.log(data));  
  }
 

  return (
    <div className="Form">
      <div className="heading">
        <h1>SVT CFS POINT BOOK</h1>
      </div>
      <form onSubmit={(e)=>registration_submission(e)}>
      <div className="upper-part">
        <div>
          <div className="input-text-fields">
            <div className="input-text-fields-each">
              <div>
                <label><b>DATE : </b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="date" placeholder={productDetails.DATE} name="DATE" value={productDetails.DATE} required/>
              </div>
            </div>
           
{productDetails.Import_export===""?"select export or import"
           :productDetails.Import_export==="Import"?
                      <div className="input-text-fields-each">
                      <div>
                        <label><b>SB_NO</b></label>
                      </div>
                      <div>
                        <input onChange={(e)=>handlingInput(e)} type="number" placeholder={productDetails.SB_NO} name="SB_NO" value={productDetails.SB_NO } required/>
                      </div>
                  
                    </div>
                    
             :<div className="input-text-fields-each">
              <div>
                <label><b>BE_NO</b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="number" placeholder={productDetails.BE_NO} name="BE_NO" value={productDetails.BE_NO} required />
              </div>
              
            </div>}

            
            <div className="input-text-fields-each">
              <div>
                <label><b>CHA</b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="text"  name="CHA" value={productDetails.CHA} required/>
              </div>
            </div>
            <div className="input-text-fields-each">
              <div>
                <label><b>LINER</b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="text" name="LINER" value={productDetails.LINER} required/>
              </div>
            </div>
            <div className="input-text-fields-each">
              <div>
                <label><b>CARGO</b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="text" placeholder={productDetails.CARGO} name="CARGO" value={productDetails.CARGO}required />
              </div>
            </div>
            <div className="input-text-fields-each">
              <div>
                <label><b>PACK WEIGHT(KG)</b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="number" name= "PACK_WEIGHT" value={productDetails.PACK_WEIGHT} required/>
              </div>
            </div>
            <div className="input-text-fields-each">
              <div>
                <label><b>LABOUR</b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="text" name="LABOUR" value={productDetails.LABOUR} required/>
              </div>
            </div>
            <div className="input-text-fields-each">
              <div>
                <label><b>TYPE OF OPERATION</b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="text" name= "TYPE_OF_OPERATION" value={productDetails.TYPE_OF_OPERATION} required/>
              </div>
            </div>
          </div>
        </div>

        <div className="upper-right-part">
          <div className="export-import">
            <p>
              <b>Import/Export</b>
            </p>
            <input onChange={(e)=>handlingInput(e)} type="radio" name="Import_export" value="Import" required/>
            Import
            <input onChange={(e)=>handlingInput(e)} type="radio" name="Import_export" value="Export" />
            Export
          </div>
            <div className="input-text-fields-each">
              <div>
                <label><b>EXP/IMP NAME</b></label>
              </div>
              <div>
                <input onChange={(e)=>handlingInput(e)} type="text" name="EXP_IMP_NAME"  value={productDetails.EXP_IMP} required/>
              </div>
            </div>
          
          <div className="manual-mechanical">
            <p>
              <b>OPERATION</b>
            </p>
            {/* <label>IMP/EXP NAME</label> */}
            <input onChange={(e)=>handlingInput(e)} type="radio" name="OPERATION" value="Manual" required />
            Manual
            <input onChange={(e)=>handlingInput(e)} type="radio" name="OPERATION" value="Mechanical" />
            Mechanical
          </div>
        </div>
      </div>

      <div className="from-to">
        <div className="from">
          <p>
            <b>FROM</b>
          </p>
          <div>
          <div><input onChange={(e)=>handlingInput(e)} type="radio" name="FROM" value="Truck" required />Truck</div>
            <div><input onChange={(e)=>handlingInput(e)} type="radio" name="FROM" value="W/House" />W/House</div>
           <div> <input onChange={(e)=>handlingInput(e)} type="radio" name="FROM" value="Open yard"/>Open yard</div>
          </div>
          <div>
          <div><input onChange={(e)=>handlingInput(e)} type="radio" name="FROM" value="Line container" />Line container</div>
            <div><input onChange={(e)=>handlingInput(e)} type="radio" name="FROM" value="Storage Container"/>Storage Container</div>
          </div>
        </div>
        <div className="to">
          <p>
            <b> TO</b>
          </p>
          <div>
            <div><input onChange={(e)=>handlingInput(e)} type="radio" name="TO" value="Truck" required/>Truck</div>
            <div><input onChange={(e)=>handlingInput(e)} type="radio" name="TO" value="W/House" />W/House</div>
           <div> <input onChange={(e)=>handlingInput(e)} type="radio" name="TO"value="Open yard"/>Open yard</div>
          </div>
          <div>
            <div><input onChange={(e)=>handlingInput(e)} type="radio" name="TO" value="Line container" />Line container</div>
            <div><input onChange={(e)=>handlingInput(e)} type="radio" name="TO" value="Storage Container"/>Storage Container</div>
          </div>
        </div>
      </div>
      <div className="container-details">
        <div className="container-details-row-1">
          <div className="input-text-fields-each">
            <div>
              <label><b>From container</b></label>
            </div>
            <div>
              <input onChange={(e)=>handlingInput(e)} type="text" name="FROM_CONTAINER" value={productDetails.FROM_CONTAINER} required/>
            </div>
          </div>
          <div className="input-text-fields-each">
            <div>
              <label><b>To container</b></label>
            </div>
            <div>
              <input onChange={(e)=>handlingInput(e)} type="text" name="TO_CONTAINER" value={productDetails.TO_CONTAINER} required/>
            </div>
          </div>
        </div>
        <div className="container-details-row-1">
          <div className="input-text-fields-each">
            <div>
              <label><b>Packs</b></label>
            </div>
            <div>
              <input onChange={(e)=>handlingInput(e)} type="number" name="PACKS" value={productDetails.PACKS } required/>
            </div>
          </div>
          <div className="input-text-fields-each">
            <div>
              <label><b>CONTAINER SIZE</b></label>
            </div>
            <div>
              <select onChange={(e)=>handlingInput(e)}name="CONTAINER_SIZE">
                <option name="CONTAINER_SIZE" value="0">0</option>
                <option name="CONTAINER_SIZE" value="20">20</option>
                <option name="CONTAINER_SIZE" value="40">40</option>
              </select>
              {/* <input onChange={(e)=>handlingInput(e)} type="NUMBER" name="CONTAINER_SIZE" value={productDetails.CONTAINER_SIZE} required /> */}
            </div>
          </div>
        </div>
        <div className="filling-details">
          <input onChange={(e)=>handlingInput(e)} type="radio" name="FILLING_DETAILS" value="Part" required />
          Part
          <input onChange={(e)=>handlingInput(e)} type="radio" name="FILLING_DETAILS" value="Full"  />
          Full
          <input onChange={(e)=>handlingInput(e)} type="radio" name="FILLING_DETAILS" value="Part Complete"  />
          Part complete
        </div>
      </div>
      <div className="buttons">
      <button type="submit" className="ok">Ok</button>
        <button onClick={() => setProductDetails(() => "")} type="reset" className="clear">CLEAR</button>
       <Link to="/FormDetails"><button className="exit">EXIT</button></Link> 
      </div>

      </form>
     
    </div>
  );
}

export default Form;
