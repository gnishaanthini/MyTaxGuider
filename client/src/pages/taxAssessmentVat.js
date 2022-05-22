import React, { useState, setState } from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function TaxAssessmentVat(props) {
    const [name, setName] = useState(null);
    const [nic, setNic] = useState(null);
    const [registration, setRegistration] = useState(null);
    const [price, setPrice] = useState(null);
    const [year, setYear] = useState(null);
    const [tin, setTin] = useState(null);

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
    }

    function handleSubmit(event) {

        console.log(name, nic, registration,price,year,tin);

        let path = '/vattaxreport'; 
        navigate(path);
        // alert(`The name you entered was: ${name}`);
        props.handleSubmit(name, nic, registration,price,year,tin);
        event.preventDefault();
    }


    return (
        <div>
            <h1>Tax Assessment for VAT</h1>

            <div className="form">
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
            <Form.Label>TIN</Form.Label>

            <Form.Control type="text" id="tin" value={tin} onChange={(e) => handleInputChange(e)} placeholder="TIN" />

          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Year of Assessment</Form.Label>

            <Form.Control type="text" id="year" value={year} onChange={(e) => handleInputChange(e)} placeholder="Year of Assessment" />

          </Form.Group>
       
          <br></br>
          <Form.Group>
            <Form.Label>Business Registration Number</Form.Label>

            <Form.Control type="text" id="registration" value={registration} onChange={(e) => handleInputChange(e)} placeholder="Business Registration No."/>

          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Value of the good/service</Form.Label>

            <Form.Control type="text" id="price" value={price} onChange={(e) => handleInputChange(e)} placeholder="Value of the good/service"  />

          </Form.Group>
          <br></br>


          <Button onClick={handleSubmit} variant="primary" type="submit">
            Click here to submit form
          </Button>
                
        </Form>    
           
            </div>
        </div>

    )
}

export default TaxAssessmentVat;