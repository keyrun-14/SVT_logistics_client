import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FormData.css";
import Search from "./Search";
const FormTable = () => {
  const [data, setData] = useState([]);
 const [search, setSearch] = useState([]);

  useEffect(() => {
    const url = "https://svt-logistics-server.herokuapp.com/";

    const fetchData = async () => {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((datas) => setData(datas));
        // console.log(data)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="FormTable">
        <div className="add-data">
        <Link to="/" className="add-data">Add Data</Link>
        </div>
        <div>
          <Search />
        </div>
       
        <table className="content-table">
          <thead>
            <tr>
            <th>S.No:</th>
              <th>DATE</th>
              <th>SB_NO</th>              
              <th>BE_NO</th>
              <th>CHA</th>
              <th>LINER</th>
              <th>CARGO</th>
              <th>PACK_WEIGHT</th>
              <th>LABOUR</th>
              <th>TYPE_OF_OPERATION</th>
              <th>Import_export</th>
              <th>EXP_IMP_NAME</th>
              <th>OPERATION</th>
              <th>FROM</th>
              <th>TO</th>
              <th>FROM_CONTAINER</th>
              <th>TO_CONTAINER</th>
              <th>PACKS</th>
              <th>CONTAINER_SIZE</th>
              <th>FILLING_DETAILS</th>
            </tr>
          </thead>

          {data.map((val, key) => {
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
            );
          })}
        </table>
      </div>
    </>
  );
};

export default FormTable;
