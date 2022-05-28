import React, { useState, setState } from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import generatePDF from "./reportGenerator";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import { PdfDocument } from "./Tax";
import { useNavigate } from "react-router-dom";

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

    // setTax([{
    //   name:name,
    //   nic:nic,
    //   source:source,
    //   paysheet:paysheet,
    //   income:income,
    //   year:year,
    //   tin:tin
    // }])


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

    let path = '/incometaxreport';
    navigate(path);
    // <Router>
    //   <Routes>
    //   <Route path='/taxreport' element={< TaxReport data={tax}/>}></Route>
    //   </Routes>
    // </Router>



    // alert(`The name you entered was: ${tax.name}`);
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
        {/* <button
              className="btn btn-primary"
              onClick={() => generatePDF(tax)}
            >
              Generate monthly report
            </button> */}
        {/* {show &&<PDFDownloadLink
        document={<PdfDocument data={tax} />}
        fileName="movielist.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>}   */}

      </div>
    </div>

  )
}
export default TaxAssessmentIncome;