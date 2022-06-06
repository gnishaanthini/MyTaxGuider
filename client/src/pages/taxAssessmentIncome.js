import React, { useState, setState } from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';


import { useNavigate } from "react-router-dom";
import Wrapper from '../assets/wrappers/Formstyle'

function TaxAssessmentIncome(props) {

  const [name, setName] = useState(null);
  const [nic, setNic] = useState(null);
  const [source, setSource] = useState(null);
  const [paysheet, setPaysheet] = useState(null);
  const [income, setIncome] = useState(null);
  const [year, setYear] = useState(null);
  const [tin, setTin] = useState(null);
  const navigate = useNavigate();


  const [tax, setTax] = useState({
    name: null,
    nic: null,
    source: null,
    paysheet: null,
    income: null,
    year: null,
    tin: null
  });


  const handleInputChange = (e) => {

    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "nic") {
      setNic(value);
    }
    if (id === "source") {
      setSource(value);

    }
    if (id === "paysheet") {
      setPaysheet(value);

    }
    if (id === "income") {
      setIncome(value);

    }
    if (id === "year") {
      setYear(value);

    }
    if (id === "tin") {
      setTin(value);

    }



  }

  function handleSubmit(event) {

    console.log(name, nic, source, paysheet, income, year, tin);

    setTax({
      name: name,
      nic: nic,
      source: source,
      paysheet: paysheet,
      income: income,
      year: year,
      tin: tin
    })

    let path = '/SelfTaxAssessment/incometaxreport';
    navigate(path);

    props.handleSubmit(name, nic, source, paysheet, income, year, tin);
    event.preventDefault();
  }


  return (
    <div>
      <Navbar />
      <h1 style={{
        position: 'absolute',
        left: '30%'
      }}>Tax Assessment for Income Tax</h1>
      <br></br>
      <br></br>
      <Wrapper className="form">
        <Form>
         

          <br></br>
          <Form.Group>
            <Form.Label>Name</Form.Label>

            <Form.Control type="text" id="name" value={name} onChange={(e) => handleInputChange(e)} placeholder="Name" />

          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>NIC</Form.Label>

            <Form.Control type="text" id="nic" value={nic} onChange={(e) => handleInputChange(e)} placeholder="NIC" />

          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Tax Identification Number</Form.Label>

            <Form.Control type="text" id="tin" value={tin} onChange={(e) => handleInputChange(e)} placeholder="TIN" />

          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Year of Assessment</Form.Label>

            <Form.Control type="text" id="year" value={year} onChange={(e) => handleInputChange(e)} placeholder="Year of Assessment" />

          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Source of Income</Form.Label>

            <Form.Select aria-label="Default select example" id="source" value={source} onChange={(e) => handleInputChange(e)} placeholder="Source of Income">
              <option value={"default"} >Choose an Option</option>

              <option value="Employment">Employment</option>
              <option value="Business">Business</option>
              <option value="Investment">Investment</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Serial No. of Paysheet</Form.Label>

            <Form.Control type="text" id="paysheet" value={paysheet} onChange={(e) => handleInputChange(e)} placeholder="Serial No." />

          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Total Income</Form.Label>

            <Form.Control type="text" id="income" value={income} onChange={(e) => handleInputChange(e)} placeholder="Total Annual Income Value" />

          </Form.Group>
          <br></br>


          <Button onClick={handleSubmit} variant="primary" type="submit">
            Click here to submit form
          </Button>

        </Form>
        

      </Wrapper>
    </div>

  )
}
export default TaxAssessmentIncome;