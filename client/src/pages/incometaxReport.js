import React, { useState, setState } from 'react';
import { Form, Button, InputGroup, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Wrapper from '../assets/wrappers/Formstyle'
import Navbar from '../components/Navbar';



function IncomeTaxReport(props) {
    const arr = props.data;
    var percentage = 0;


    function calculatePercentage() {
        if (arr.income!=null){
            if (parseInt(arr.income) < 3000000) {
                percentage = 6;
            }
            else if (parseInt(arr.income) < 6000000) {
                percentage = 12;
            }
            else {
                percentage = 18;
            }

        }
        
        return percentage;
    }

    function calculateTax() {
        var income = 0;

        if (percentage!=0){
            income = (parseInt(arr.income) * percentage) / 100;
        }

        
        return income;

    }

    return (
        <div>
            <Navbar />
            <h1 style={{
                position: 'absolute',
                left: '35%'
            }}>Income Tax Report</h1>
            <br></br>
            <br></br>
            <Wrapper className='form'><Form>
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
                    <InputGroup.Text id="inputGroup-sizing-default">Source of Income</InputGroup.Text><span></span>
                    <FormControl type="text" id="source" value={arr.source}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Serial No. of Paysheet</InputGroup.Text><span></span>
                    <FormControl type="text" id="paysheet" value={arr.paysheet}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Total Income</InputGroup.Text><span></span>
                    <FormControl type="text" id="income" value={arr.income}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Calculated Tax Percentage</InputGroup.Text><span></span>
                    <FormControl type="text" id="percentage" value={calculatePercentage()}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Assessed Income Tax Value</InputGroup.Text><span></span>
                    <FormControl type="text" id="taxvalue" value={calculateTax()}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>

            </Form></Wrapper>






        </div>

    )
}

export default IncomeTaxReport;