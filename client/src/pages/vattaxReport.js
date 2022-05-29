import React, { useState, setState } from 'react';
import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';
import { Form, Button, InputGroup, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Wrapper from '../assets/wrappers/Formstyle'
import Navbar from '../components/Navbar';

function VatTaxReport(props) {
    const arr = props.data;
    var percentage = 0;

    function calculateVATPercentage() {
        if (arr.type!=null){
            if (arr.type === "Financial service") {
                percentage = 15;
            }
            else {
                percentage = 8;
            }

        }

        return percentage;
    }

    function calculateVATtax() {
        var income = 0;

        if(percentage!=0){
            income = (parseInt(arr.price) * percentage) / 100

        }
        
        return income;

    }

    return (
        <div>
            <Navbar />
            <h1 style={{
                position: 'absolute',
                left: '35%'
            }}>VAT Tax Report</h1>
            <br></br>
            <br></br>
            <Wrapper className='form'><Form style={{width:'250%'}}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text><span></span>
                    <FormControl type="text" id="name" value={arr.name}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">NIC</InputGroup.Text><span></span>
                    <FormControl type="text" id="nic" value={arr.nic}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Tax Identification Number</InputGroup.Text><span></span>
                    <FormControl type="text" id="tin" value={arr.tin}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Year of Assessment</InputGroup.Text><span></span>
                    <FormControl type="text" id="year" value={arr.year}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Business Registration Number</InputGroup.Text><span></span>
                    <FormControl type="text" id="registration" value={arr.registration}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Type of the good/service</InputGroup.Text><span></span>
                    <FormControl type="text" id="type" value={arr.type}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Value of the good/service (per annum)</InputGroup.Text><span></span>
                    <FormControl type="text" id="price" value={arr.price}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Calculated Tax Percentage</InputGroup.Text><span></span>
                    <FormControl type="text" id="percentage" value={calculateVATPercentage()}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Assessed VAT Tax Value</InputGroup.Text><span></span>
                    <FormControl type="text" id="taxvalue" value={calculateVATtax()}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>

            </Form></Wrapper>




        </div>

    )
}

export default VatTaxReport;