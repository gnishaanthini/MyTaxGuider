import React, { useState, setState } from 'react';
import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';
// import * as ReactDOMServer from 'react-dom/server';
import { Form, Button, InputGroup, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './style.css';
// import ReactToPrint from 'react-to-print';


function IncomeTaxReport(props) {
    const arr = props.data;

    return (
        <div>
            <h1>Income Tax Report</h1>
            <div className='form'><Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                    <FormControl type="text" id="name" value={arr.name}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">NIC</InputGroup.Text>
                    <FormControl type="text" id="nic" value={arr.nic}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">TIN</InputGroup.Text>
                    <FormControl type="text" id="tin" value={arr.tin}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Year of Assessment</InputGroup.Text>
                    <FormControl type="text" id="year" value={arr.year}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Source of Income</InputGroup.Text>
                    <FormControl type="text" id="source" value={arr.source}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Serial No. of Paysheet</InputGroup.Text>
                    <FormControl type="text" id="paysheet" value={arr.paysheet}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Total Income</InputGroup.Text>
                    <FormControl type="text" id="income" value={arr.income}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Calculated Tax Percentage</InputGroup.Text>
                    <FormControl type="text" id="percentage"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Assessed Income Tax Value</InputGroup.Text>
                    <FormControl type="text" id="taxvalue"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br></br>

            </Form></div>

            




        </div>

    )
}

export default IncomeTaxReport;