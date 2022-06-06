import React, { useState, setState } from 'react';
import Wrapper from '../assets/wrappers/Formstyle'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

function TaxAssessmentVat(props) {
  const [name, setName] = useState(null);
  const [nic, setNic] = useState(null);
  const [registration, setRegistration] = useState(null);
  const [price, setPrice] = useState(null);
  const [year, setYear] = useState(null);
  const [tin, setTin] = useState(null);
  const [type, setType] = useState(null);

  const navigate = useNavigate();


  const handleInputChange = (e) => {

    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "nic") {
      setNic(value);
    }
    if (id === "registration") {
      setRegistration(value);
    }
    if (id === "price") {
      setPrice(value);
    }
    if (id === "year") {
      setYear(value);
    }
    if (id === "tin") {
      setTin(value);
    }
    if (id === "type") {
      setType(value);
    }
  }

  function handleSubmit(event) {

    //console.log(name, nic, registration, price, year, tin, type);

    let path = '/vattaxreport';
    navigate(path);
    // alert(`The name you entered was: ${name}`);
    props.handleSubmit(name, nic, registration, price, year, tin, type);
    event.preventDefault();
  }


  return (
    <div>
      <Navbar />
      <h1 style={{
        position: 'absolute',
        left: '35%'
      }}>Tax Assessment for VAT</h1>
      <br></br>
      <br></br>

      <Wrapper className="form">
        <Form>
          {/* <h4 style={{
            textAlign: "center",
            marginLeft: "200px",
            color: "green"
          }}>Tax Assessment for Income Tax</h4> */}


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

            <Form.Control  type="text" id="year" value={year} onChange={(e) => handleInputChange(e)} placeholder="Year of Assessment" />

          </Form.Group>

          <br></br>
          <Form.Group>
            <Form.Label>Business Registration Number</Form.Label>

            <Form.Control type="text" id="registration" value={registration} onChange={(e) => handleInputChange(e)} placeholder="Business Registration No." />

          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Type of goods/service</Form.Label>

            <Form.Select aria-label="Default select example" id="type" value={type} onChange={(e) => handleInputChange(e)} placeholder="Type of goods/service">
              <option value={"default"} >Choose an Option</option>

              <option value="Manufacture">Manufacting of goods</option>
              <option value="Import">Import of goods</option>
              <option value="Supply">Supply of goods</option>
              <option value="Financial service">Financial Services</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Value of the good/service (per annum)</Form.Label>

            <Form.Control type="text" id="price" value={price} onChange={(e) => handleInputChange(e)} placeholder="Value of the good/service" />

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

export default TaxAssessmentVat;