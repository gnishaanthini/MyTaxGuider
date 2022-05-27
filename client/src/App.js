import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing, Register, ProtectedRoute } from './pages/'
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

  const addVatTax = (name, nic, registration,price,year,tin,type) => {
    setVatTax({
      name: name,
      nic: nic,
      registration:registration,
      price:price,
      year: year,
      tin: tin,
      type:type
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/taxAssessmentIncome' element={<ProtectedRoute><TaxAssessmentIncome handleSubmit={addIncomeTax}/></ProtectedRoute>}></Route>
          <Route path='/taxAssessmentVat' element={<ProtectedRoute>< TaxAssessmentVat handleSubmit={addVatTax}/></ProtectedRoute>}></Route>
          <Route path='/incometaxreport' element={<ProtectedRoute>< IncomeTaxReport data={incometax}/></ProtectedRoute>}></Route>
          <Route path='/vattaxreport' element={<ProtectedRoute>< VatTaxReport data={vattax}/></ProtectedRoute>}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
