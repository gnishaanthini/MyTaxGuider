import React from "react";
import Navbar from "../../../components/Navbar"; 

function ValueAddedTax(){
    return(
        <div>
             <Navbar/>
            <div class="container-fluid p-5 " style={{backgroundColor:"#9691B6"}}>
                <h1>Value Added Tax</h1>
            </div>
            <div class="bg-light container  mb-4">
            <div class=" container  mb-4">
            <h4>​Chargeability for Value Added Tax excluding chargeability on Financial Services</h4>
                <p><ul>
                    <li>Manufactures</li>
                    <li>Importers</li>
                    <li>Services providers​</li>
                    <li>Suppliers who supply goods under tender agreement </li>
                    <li>Wholesale and Retail Trade</li>
                    </ul>
                </p>
            </div>

            <div class="container  mb-4">
                <h4>Who are liable for Registration?</h4>
                <p>Every person who carries on a taxable activity, if his taxable supply of goods or services or supply of goods and services,
                    <ul>
                    <li>has exceeded Rs 75,​000,000 per quarter, or</li>
                    <li>has exceeded Rs.300,000,000 per annum, or</li>
                    <li>likely to exceed Rs.75,000,000 in the succeeding quarter or Rs 300 Million in the succeeding twelve months period</li>
                    </ul>
                </p>
            </div>
            <div class="container  mb-4">
                <h4></h4>
                <p></p>
            </div>
            <div class="container  mb-4">
                <h4>VAT Rates</h4>
                <p>
                <ul>
                    <li>Standard Rate 8%</li>
                    <li>Zero Rate</li>
                </ul>
                </p>
            </div>

            <div class="container  mb-4">
                <h4>Registration for VAT</h4>
                <p>The TIN Certificate should be obtained from Primary Registration Unit and VAT registration could be obtained from the Tax Registration Unit at 2nd Floor of the Inland Revenue Headquarters or from any nearest Regional Office of the Department .

Application should be made through Tax Type Registration Form (TPR_005_E), not later than fifteen days from the date on which became liable for registration.</p>
            </div>
            <div class="container  mb-5">
                <h4>Documents required for Registration</h4>
                <p>
                <ul>
                    <li>TIN Certificate​</li>
                    <li>Certificate of Business Registration</li>
                    <li>Certificate of Business Registration
                        <ul>
                            <li>Memorandum & Articles of association</li>
                            <li>List of Directors</li>
                            <li>Certificate of incorporation</li>
                        </ul>
                    ​</li>
                    <li>Copies of NIC of the proprietors/Directors of the business​ </li>
                    <li>Particulars of sales to prove the turnover & monthly Bank statements to prove cash receipts.</li>
                    <li>Documents to prove that exports were made continuously by such exporters</li>
                    <li>For 22(7) registration - Project Plan
                        <ul>
                            <li>a copy of agreement with Board of Investment(if any)</li>
                            <li>deed or rent/lease agreement of property</li>
                            <li>sources of funds to the project to be proved for non BOI projects</li>
                            <li>a list of intended purchases – local & imports</li>
                        </ul>
                    </li>
                    </ul>
                </p>
            </div>
            </div>
            
        </div>
    );
}

export default ValueAddedTax;