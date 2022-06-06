import React from "react";
import Navbar from "../../../components/Navbar"; 

function SimpleValueAddedTax(){
    return(
        <div>
             <Navbar/>
            <div class="container-fluid p-5" style={{backgroundColor:"#9691B6"}}><h1>Simple Value Added Tax</h1></div>
            <div class="bg-light container  mb-4 ">
            <div class=" container  mb-4 ">
                
                <p>
                For SVAT Registration, an application is to be submitted to Primary Registration Unit along with the following documents.
                </p>
                <ul class="mx-5">
                    <li class="mb-3">
                    In case of a Proprietorship / Partnership Business 
                        <ul>
                            <li>Certificate of Registration of the Business,</li>
                            <li>Photo Copy of the National Identity Card of the applicant (in the case of a proprietorship, applicant should be the proprietor and in the case of partnership , applicant should be the precedent partner), and</li>
                            <li>Documents mentioned under item 3, if applicable.</li>
                        </ul>
                    </li>

                    <li class="mb-3">
                    In case of a Company
                    <ul>
                            <li>Certificate of Incorporation,</li>
                            <li>Photocopy of the National Identity Card of the applicant . The applicant should be an authorized representative who has been approved by the Board of Directors of the company. A copy of such approval should be submitted.</li>
                            <li>Documents mentioned under item 3, if applicable</li>
                        </ul> 
                    </li>

                    <li class="mb-3">
                    General 
                    <ul>
                            <li>TIN Certificate</li>
                            <li>VAT Registration Certificate</li>
                            <li>BOI Registration Certificate, ​if applicable​</li>
                            <li>Photo Copies of National Identity Cards of two persons who are authorized to obtain Credit Vouchers from the Department, If the status to be accorded is RIP</li>
                            <li>A copy of the approval granted by the Ministry of Finance, in case of a registered person engaged in any Specific Project referred to in sub paragraph (ii) of paragraph (f) of PART (II) of First Schedule to the VAT Act.</li>
                            <li>A copy of the gazette notification issued under Strategic Development Project Act No. 14 of 2008 and a copy of the BOI Agreement, in case of a registered person engaged in any Strategic Development Project referred to in sub paragraph (i) of paragraph (f) of PART (II) of First Schedule to the VAT Act.</li>
                            <li>A copy of the approval granted by the Senior Commissioner for VAT, in case of a person registered under Section 22(7) of the VAT Act.</li>
                            <li>Relevant documentary proof, in case of a service exporter under section 7(b) (iv) of the VAT Act. ​​​​​</li>
                        </ul>
                    </li>

                    <li class="mb-3">
                    e-Registration is not applicable for the registration under the Simplified VAT Scheme. 
                    </li>
                    <li class="mb-3">
                    Applicant himself is required to be present for obtaining the registration. However, in the case of a company, the applicant or an authorized representative of the company is required to be present for the purpose of SVAT registration. In the case of foreign companies, applicant could be an audit firm or lawyers’ firm.
                    </li>

                    <li class="mb-3">
                    Please note that the Registered Identified Purchaser (RIP) status is accorded only after visiting the business place. If the status is to be accorded as Registered Identified Supplier (RIS), copies of audited statements of accounts, copies of bank accounts or a letter from the Gramaseva Niladari certified by the Divisional Secretariat may be requested to be submitted.
                    </li>

                    <li class="mb-3">
                    A letter of authority giving permission to collect the certificate (If the certificate to be handed over to a person other than the applicant )  
                    </li>

                </ul>
                
                
            </div>
            <div class="container  mb-4">
                <h4>Downloads</h4>
                <p>
                    <a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/SVAT_Downloads/Instructions.pdf" download>Instructions on Simplified VAT (SVAT) Scheme</a></p>
                <p><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/SVAT_Downloads/SVAT_Guidelines-31.7.2012.pdf" download>Guidelines of the Simplified Value Added Tax (SVAT) Scheme</a></p>
                <p><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/SVAT_Downloads/TPR_SVAT_RIS_List_at_01-09-2021.pdf" download>List of Registered Identified Suppliers (RISs) [01-09-2021]</a></p>
                <p><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/SVAT_Downloads/TPR_SVAT_RIP_List_at_01-09-2021.pdf" download>List of Registered Identified Purchasers (RIPs) [01-09-2021]</a></p>
                <p><a href="http://www.ird.gov.lk/en/Type%20of%20Taxes/SVAT_Downloads/Cancel_Inactive_30_04_2015.pdf" download>List of Cancel & Inactive SVAT [30-04-2015]</a>  
                </p>
            </div>
            </div>
            
        </div>
    );
}

export default SimpleValueAddedTax;