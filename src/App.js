import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Form from './componets/Form';
import FormTable from './componets/FormTable'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Form/>} />        
          <Route path="/FormDetails" element={<FormTable />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App