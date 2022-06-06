import React from "react";
import Navbar from "../../../components/Navbar"; 

function Paye(){
    return(
        <>
         <Navbar/>
        <div class=" container-fluid p-5   border" style={{backgroundColor:"#9691B6"}}>
            <h1>Pay As You Earn</h1>
        </div>
        <div class="bg-light container ">
            <div class="container-fluid p-5">
            <h4>
                Payment of Tax
            </h4>
            <p>Every employer has obligation to deduct PAYE Tax from the Employee as per PAYE tax tables and the total deducted amount should remit to the department on or before 15th of the following month.</p>
            </div>

            <div class="container-fluid p-5">
                <h4>Furnishing PAYE Returns </h4>
                <p>Due date :<br/>
Return of PAYE Tax (PAYE) for a relevant Assessment Year, should be furnished on or before 30th day of the month of April, of the following Assessment Year.<br/>

Submit to :<br/>
Central Document Management Unit (CDMU), 1st Floor of Inland Revenue building</p>
            </div>

            <div class="container-fluid p-5">
                <h4>PAYE Tax Table (Year of Assessment 2019-2020-from 01/01/2020 to 31/03/2020)</h4>
                <div class="container-fluid p-3">
                    <ul>
                        <li><a href="http://www.ird.gov.lk/en/publications/PAYE%20Tax%20Tables/2019-2020/Guideline/PAYE%20Table%20_E.pdf"
                    download
                    >  Guideline on Deduction of Tax on Cumulative Income from Employment</a></li>
                        <li><a href="http://www.ird.gov.lk/en/publications/PAYE%20Tax%20Tables/2019-2020/Benefits/PAYE-Values_Non_Cash_Benefits_E.pdf" download>
                        Values for Non Cash Benefits
                    </a></li>
                    </ul>
                </div>

            </div>

            <div class="container-fluid p-5">
                <table  class="bg-secondary text-white table table-bordered table-hover">
                    <thead>
                    <tr><th><h4>Annual Declaration of Employer - PAYE/APIT</h4></th></tr>
                    </thead>
                    <tbody >
                    <tr><tb class=" row mt-3"><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/Pay%20as%20Your%20Earn_Annual%20Declaration%20of%20Employer/Asmt_APIT_001_2020_2021_E.pdf" class=" link-light"  download>Annual Statement of Employer – APIT (2020/2021) (Asmt_APIT_001_E)</a></tb></tr>
                    <tr><tb class="row mt-3"><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/Pay%20as%20Your%20Earn_Annual%20Declaration%20of%20Employer/APIT_Employer_Schedule_1.pdf" class="link-light"  download>Schedule 01 - For Remuneration Other than and Once and for all payments</a></tb></tr>
                    <tr><tb class="row mt-3"><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/Pay%20as%20Your%20Earn_Annual%20Declaration%20of%20Employer/APIT_Employer_Schedule_2.pdf"  class="link-light" download>Schedule 02 - Once and for all Payments (Terminal Benefits)</a></tb></tr>
                    <tr><tb class="row mt-3"><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/Pay%20as%20Your%20Earn_Annual%20Declaration%20of%20Employer/APIT_Employer_Schedule_3.pdf" class="link-light"  download>Schedule 3 - List of Employees on Non Submission of Consent (with Monthly Gross Remuneration more than Rs. 250,000)</a></tb></tr>
                    <tr><tb class="row mt-3"><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/Pay%20as%20Your%20Earn_Annual%20Declaration%20of%20Employer/APIT_T10_NEW_2021.pdf" class="link-light"  download>Certificate of Income Tax Deductions ‍</a></tb></tr>
                    </tbody>
                    
                </table>
            </div>

        </div></>
        
    );
}

export default Paye;