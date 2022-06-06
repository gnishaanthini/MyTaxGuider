import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing, Register, ProtectedRoute,EconomicServiceCharge,IncomeTax,Paye,SimpleValueAddedTax,TouristVatRefund,ValueAddedTax, VatR, TvrsR, SvatR, PayeR, IncomeR, EscR } from './pages/'
import { AdminLogin, CreateEmployee, IsAdmin } from './pages/admin/'
import React, { useState, setState } from 'react';

import TaxAssessmentIncome from './pages/taxAssessmentIncome.js';
import TaxAssessmentVat from './pages/taxAssessmentVat.js';

import IncomeTaxReport from './pages/incometaxReport';
import VatTaxReport from './pages/vattaxReport';

import FAQ from './pages/faq';
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
          <Route path='/SelfTaxAssessment/taxAssessmentIncome' element={<ProtectedRoute><TaxAssessmentIncome handleSubmit={addIncomeTax}/></ProtectedRoute>}></Route>
          <Route path='/SelfTaxAssessment/taxAssessmentVat' element={<ProtectedRoute>< TaxAssessmentVat handleSubmit={addVatTax}/></ProtectedRoute>}></Route>
          <Route path='/SelfTaxAssessment/incometaxreport' element={<ProtectedRoute>< IncomeTaxReport data={incometax}/></ProtectedRoute>}></Route>
          <Route path='/SelfTaxAssessment/vattaxreport' element={<ProtectedRoute>< VatTaxReport data={vattax}/></ProtectedRoute>}></Route>
          <Route path='/taxAssessmentIncome' element={<ProtectedRoute><TaxAssessmentIncome handleSubmit={addIncomeTax}/></ProtectedRoute>}></Route>
          <Route path='/taxAssessmentVat' element={<ProtectedRoute>< TaxAssessmentVat handleSubmit={addVatTax}/></ProtectedRoute>}></Route>
          <Route path='/incometaxreport' element={<ProtectedRoute>< IncomeTaxReport data={incometax}/></ProtectedRoute>}></Route>
          <Route path='/vattaxreport' element={<ProtectedRoute>< VatTaxReport data={vattax}/></ProtectedRoute>}></Route>

          <Route path='/faq' element={<ProtectedRoute><FAQ/></ProtectedRoute>}/>
          <Route path='/admin/login' element={<AdminLogin />}></Route>
          <Route path='/admin/create' element={<IsAdmin><CreateEmployee /></IsAdmin>}></Route>

          <Route path ="/Guidlines/EconomicServiceCharge" element={<ProtectedRoute><EconomicServiceCharge/></ProtectedRoute>}></Route>
          <Route path ="/Guidlines/IncomeTax" element={<ProtectedRoute><IncomeTax/></ProtectedRoute>}></Route>
          <Route path ="/Guidlines/ValueAddedTax" element={<ProtectedRoute><ValueAddedTax/></ProtectedRoute>}></Route>
          <Route path ="/Guidlines/TouristVatRefund" element={<ProtectedRoute><TouristVatRefund/></ProtectedRoute>}></Route>
          <Route path ="/Guidlines/Paye" element={<ProtectedRoute><Paye/></ProtectedRoute>}></Route>
          <Route path ="/Guidlines/SimpleValueAddedTax" element={<ProtectedRoute><SimpleValueAddedTax/></ProtectedRoute>}></Route>

          <Route path='/rnr/VatR' element={<ProtectedRoute><VatR/></ProtectedRoute>}></Route>
          <Route path='/rnr/TvrsR' element={<ProtectedRoute><TvrsR/></ProtectedRoute>}></Route>
          <Route path='/rnr/SvatR' element={<ProtectedRoute><SvatR/></ProtectedRoute>}></Route>
          <Route path='/rnr/PayeR' element={<ProtectedRoute><PayeR/></ProtectedRoute>}></Route>
          <Route path='/rnr/IncomeR' element={<ProtectedRoute><IncomeR/></ProtectedRoute>}></Route>
          <Route path='/rnr/EscR' element={<ProtectedRoute><EscR/></ProtectedRoute>}></Route>
          <Route path="*" element={<Error />} />
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
