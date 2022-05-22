import React, { useState, setState } from 'react';
import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';
import { Form, Button, InputGroup, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './style.css';

function VatTaxReport(props) {
    const arr = props.data;
    return (
        <div>
            <h1>VAT Tax Report</h1>
            <div className='form'><Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                    <FormControl  type="text" id="name" value={arr.name}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">NIC</InputGroup.Text>
                    <FormControl  type="text" id="nic" value={arr.nic}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">TIN</InputGroup.Text>
                    <FormControl  type="text" id="tin" value={arr.tin}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Year of Assessment</InputGroup.Text>
                    <FormControl  type="text" id="year" value={arr.year}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Business Registration Number</InputGroup.Text>
                    <FormControl  type="text" id="registration" value={arr.registration}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Value of the good/service</InputGroup.Text>
                    <FormControl  type="text" id="price" value={arr.price}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Calculated Tax Percentage</InputGroup.Text>
                    <FormControl  type="text" id="percentage" 
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Assessed VAT Tax Value</InputGroup.Text>
                    <FormControl  type="text" id="taxvalue" 
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>

            </Form></div>




        </div>

    )
}

export default VatTaxReport;