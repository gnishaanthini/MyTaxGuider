import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing, Register } from './pages/'
import React, { useState, setState } from 'react';

import TaxAssessmentIncome from './pages/taxAssessmentIncome.js';
import TaxAssessmentVat from './pages/taxAssessmentVat.js';

import IncomeTaxReport from './pages/incometaxReport';
import VatTaxReport from './pages/vattaxReport';
import Home from './pages/home';

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
    <div className="App">
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
          <Route path="/home" element={<Home />} />
          <Route path='/taxAssessmentIncome' element={<TaxAssessmentIncome handleSubmit={addIncomeTax}/>}></Route>
          <Route path='/taxAssessmentVat' element={< TaxAssessmentVat handleSubmit={addVatTax}/>}></Route>
          <Route path='/incometaxreport' element={< IncomeTaxReport data={incometax}/>}></Route>
          <Route path='/vattaxreport' element={< VatTaxReport data={vattax}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
