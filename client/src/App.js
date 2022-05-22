import './App.css'
import Header from './components/header';
import React, { useState, setState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import TaxAssessmentIncome from './pages/taxAssessmentIncome.js';
import TaxAssessmentVat from './pages/taxAssessmentVat.js';
import Navbar from './components/Navbar';
import IncomeTaxReport from './pages/incometaxReport';
import VatTaxReport from './pages/vattaxReport';
import ExportPdfComponent from './pages/reportGenerator';


function App() {
  const [incometax, setIncomeTax] = useState({});

  const addIncomeTax = (name, nic, source, paysheet, income, year, tin) => {
    setIncomeTax({
      name: name,
      nic: nic,
      source: source,
      paysheet: paysheet,
      income: income,
      year: year,
      tin: tin
    })
  }

  const [vattax, setVatTax] = useState({});

  const addVatTax = (name, nic, registration,price,year,tin) => {
    setVatTax({
      name: name,
      nic: nic,
      registration:registration,
      price:price,
      year: year,
      tin: tin
    })
  }



  return (
    <Router>
    
      <div className="App">
   
      <Navbar/>
      <Routes>
          <Route path='/taxAssessmentIncome' element={<TaxAssessmentIncome handleSubmit={addIncomeTax}/>}></Route>
          <Route path='/taxAssessmentVat' element={< TaxAssessmentVat handleSubmit={addVatTax}/>}></Route>
          <Route path='/incometaxreport' element={< IncomeTaxReport data={incometax}/>}></Route>
          <Route path='/vattaxreport' element={< VatTaxReport data={vattax}/>}></Route>
   </Routes>
      
      </div>
      </Router>

  




  );
}

export default App;
