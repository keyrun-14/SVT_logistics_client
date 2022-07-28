import React, {  useState } from 'react'

const Search = () => {
    const [searchData,setSearchData]=useState({
field:"",search:""

    })
    const [search, setSearch] = useState([]);
    function handling(e){
        const inputData = {...searchData}
         inputData[e.target.name] = e.target.value
         let obj=inputData
         setSearchData(obj)
        //  console.log(inputData,"length",inputData.length)
      }
    function searching(){
        fetch(`http://localhost:5000/search`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"},
            
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(searchData)
          }).then(response => response.json())
          .then(data => setSearch(data));  
        }

  console.log(search);

  return (
    <div>
      {search.map((val, key) => {
            return (
              <tbody>
                <tr key={key}>
                <td>{key+1}</td>
                  <td>{val.DATE}</td>
                  <td>{val.SB_NO}</td>
                  <td>{val.BE_NO}</td>
                  <td>{val.CHA}</td>
                  <td>{val.LINER}</td>
                  <td>{val.CARGO}</td>
                  <td>{val.PACK_WEIGHT}</td>
                  <td>{val.LABOUR}</td>
                  <td>{val.TYPE_OF_OPERATION}</td>
                  <td>{val.Import_export}</td>
                  <td>{val.EXP_IMP_NAME}</td>
                  <td>{val.OPERATION}</td>
                  <td>{val.FROM}</td>
                  <td>{val.TO}</td>
                  <td>{val.FROM_CONTAINER}</td>
                  <td>{val.TO_CONTAINER}</td>
                  <td>{val.PACKS}</td>
                  <td>{val.CONTAINER_SIZE}</td>
                  <td>{val.FILLING_DETAILS}</td>
                </tr>
              </tbody>
            );})}
        <select onChange={(e)=>handling(e)} name="field">
              <option value="DATE">DATE</option>
              <option value="SB_NO"> SB_NO</option>              
              <option value="BE_NO">BE_NO</option>
              <option value="CHA">CHA</option>
              <option value="LINEAR">LINER</option>
              <option value="CARGO">CARGO</option>
              <option value="PACK_WEIGHT">PACK_WEIGHT</option>
              <option value="LABOUR">LABOUR</option>
              <option value="TYPE_OF_OPERATION">TYPE_OF_OPERATION</option>
              <option value="Import_export">Import_export</option>
              <option value="EXP_IMP_NAME">EXP_IMP_NAME</option>
              <option value="OPERATION">OPERATION</option>
              <option value="FROM">FROM</option>
              <option value="TO">TO</option>
              <option value="FROM_CONTAINER">FROM_CONTAINER</option>
              <option value="TO_CONTAINER">TO_CONTAINER</option>
              <option value="PACKS">PACKS</option>
              <option value="CONTAINER_SIZE">CONTAINER_SIZE</option>
              <option value="FILLING_DETAILS">FILLING_DETAILS</option>
        </select>
        <input onChange={(e)=>handling(e)} type="text" name='search' value={searchData.search}></input>
        <button onClick={()=>searching(searchData.field,searchData.search)}>search</button>
    </div>
  )
}

export default Search