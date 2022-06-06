import React from "react";
import { useState, setState } from 'react';
import Navbar from "../../../components/Navbar"; 


function EconomicServiceCharge(){
    return(
        
        <div>
            <Navbar />
            <div class="container-fluid p-5 " style={{backgroundColor:"#9691B6"}}><h1>Economic Service Charge</h1></div>
            <div class="bg-light container  mb-4"><div class=" container  mb-4">
                <h4>Tax Liability</h4>
                <p>Every person or partnership who/which is carrying on or carrying out a trade, business, profession or vocation, whether such person or partnership is liable to pay income tax or not, is required to pay ESC.

However, Cooperative Societies, aviation and shipping companies, local Government bodies, Government Departments, any distributor, any dealer in lottery, any Unit Trust or Mutual fund and Lak Sathosa is not liable for ESC.</p>
            </div>

            <div class="container mb-4">
                <h4>Tax Base & Threshold</h4>
                <p>Every person or partnership should register for ESC if the liable turnover of a quarter is Rs. 50 million or more during the period from 01.04.2011 to 31.03.2017 and Rs. 12.5 million for any quarter commencing on or after 01.04.2017.</p>
            </div>

            <div class="container mb-4">
                <h4>ESC Rate</h4>
                <p>The rate applicable with effect from 01.01.2016 is 0.5% on relevant turnover.</p>
            </div>

            <div class="container mb-4">
                <h4>Liable Turnover</h4>
                <p>The amount due from every transaction whether actually received or not. But following are not included to the liable turnover.
                    <ul>
                        <li>VAT​(if registered for VAT)</li>
                        <li>Proceeds from sale of capital assets.</li>
                        <li>Bad debts</li>
                    </ul>
                    However, turnover for certain categories of businesses, the law provides special definition for liable turnover as published by the Extraordinary Gazette No. 1502/10 dated 20.06.2007, 1506/06 dated 18.07.2007 and 1546/9 dated 22.04.2008 (consolidating all these Gazette notifications, a new Gazette will be published in near future). Such businesses are appended:
                    <ul>
                        <li>Freight Forwarders</li>
                        <li>Gem & Diamond Exporters</li>
                        <li>Exports of Garments or any other manufacturer out of the raw materials imported on NFE basis</li>
                        <li>Sale of Securities held by primary dealers</li>
                    </ul>
                </p>
            </div>

            <div class="container mb-4">
                <h4>Payment of Tax</h4>
                <p>ESC is payable on self-assessment basis in four quarters. Payments should be made using the specific paying-in-slip and the period of tax should be correctly indicated. </p>
                <p>
                    <table class="bg-secondary text-white table table-bordered table-hover">
                        <thead><tr><th>Quarter</th><th>Payment Date</th></tr></thead>
                        <tbody>
                        <tr><td>1st Quarter</td><td>on or before the 20th July</td></tr>
                        <tr><td>2nd Quarter</td><td>on or before the 20th October</td></tr>
                        <tr><td>3rd Quarter</td><td>on or before the 20th January</td></tr>
                        <tr><td>4th Quarter</td><td>on or before the 20th April</td></tr>
                        </tbody>
                        
                    </table>
                </p>
            </div>
            <div class="container mb-5">
                <h4>Advance ESC & Set off of Tax</h4>
                <p>ESC is will be charged in advance at the importation of certain articles by the Customs on the CIF value certified by the Director General of Customs (irrespective of the threshold limit) as follows;
                    <ul>
                        <li>with effect from 01.04.2016, on any article subject to Special Commodity Levy,</li>
                        <li>with effect from 24.11.2016, on gold, precious metals,</li>
                        <li>with effect from 01.04.2017, on motor vehicle</li>
                    </ul>
                    ESC paid in advance to the Customs can be credited against the ESC liability of the same quarter where the date of clearance of the particular consignment falls. However, the balance liability of ESC, if any, should be paid on or before the 20th day of the subsequent month of the quarter ends.

ESC paid in advance and self payment for the period commencing on or after 01.04.2016 can be set off against the Income Tax payable for the relevant year of assessment and excess, if any, can be carried forward to set off against the liability of two subsequent years of assessment.

However, the excess, if any, of the ESC paid until for the period ended with 31.03.2016 can be carried forward to set off against the liability of four subsequent years of assessment.
                </p>
            </div>

            </div>
            
        </div>
    );
}

export default EconomicServiceCharge;