import React from "react";

function TouristVatRefund(){
    return(

        <div>
            <div class="bg-info container-fluid p-5 "><h1>Tourist VAT Refund Scheme</h1></div>
            <div class="bg-light container  mb-4 ">
            <div class="bg-light container  mb-4 ">
                <h4>Goods eligible to claim under TVRS</h4>
                <p class="my-3 mx-5">All goods on which VAT is charged ("Standard-Rated Goods") are eligible for refund except;
                    <ul>
                        <li>Goods that are prohibited on aircraft for safety reasons.(check with your airlines for prohibited items)</li>
                        <li>Goods that are prohibited and restricted outwards under Sri Lanka Customs Ordinance Act</li>
                        <li>VAT exempted goods(where VAT was not paid)</li>
                        <li>Goods that have been wholly / partly consumed in Sri Lanka.(for example: foods, Beverages)</li>
                        <li>Services consumed.(for example: hotel Charges)</li>
                        <li>Goods purchased online and taking out of Sri Lanka.</li>
                        <li>Goods that are not presented for inspection with the required application form at the TVRS Counter.</li>
                    </ul>
                </p>
            </div>

            <div class="container  mb-4 ">
                <p>The TVRS Counter located at the departure lounge, Bandaranaike International Airport, Katunayake.</p>
            </div>

            <div class="container  mb-4 ">
                <h4>Downloads</h4>
                <p><a href="http://www.ird.gov.lk/en/Downloads/TVRS_Apps_Doc/TVRS_001_E.pdf" download>TVRS Documents for Tourists</a></p>
                <p><a href="http://www.ird.gov.lk/en/Downloads/TVRS_Apps_Doc/TVRS_002_E.pdf" download>TVRS Documents for Venders</a></p>
            </div>
            </div>
            

        </div>
    );
}

export default TouristVatRefund;