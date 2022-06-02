import React from "react";

function IncomeTax(){
    return(
        <>
            <div class="bg-info container-fluid p-5   border" ><h1>Income tax</h1></div>
            <div class="bg-light container ">
            <div class="container-fluid p-5   border">
                <h4>Sources of Income</h4> 
                <ul>
                    <li>
                        <div>Employment Income</div>
                        <div>Calculation of an individual's gains and profits from employment for a year of assessment</div>
                    </li>
                    <li>
                        <div>Business Income</div>
                        <div>A person's income from a business for a year of assessment is the person's gains and profits from conducting the business for the year.</div>
                        </li>
                    <li>
                        <div>Investment Income</div>
                        <div>A person's income from an investment for a year of assessment is the person's gains and profits from conducting the investment for the year.</div>
                        </li>
                    <li>
                        <div>Other Income</div>
                        <div>A person’s income from other sources for a year of assessment is the person’s gains and profits from any source of any kind, however does not include profits of a casual and non-recurring nature.</div>
                        </li>
                </ul>

                <p>An individual, who is a resident in Sri Lanka for a year of assessment or who is a non- resident in Sri Lanka for a year of assessment, but is a citizen of Sri Lanka, will receive an aggregate relief of;
        <ol>
            <li>Rs. 500,000, for each year of assessment prior to January 1, 2020;</li>
            <li>Rs. 3,000,000, for each year of assessment commencing on or after January 1, 2020</li>
        </ol>


except that an individual who is a trustee, receiver, executor or liquidator shall not be entitled to deduct this personal relief as such trustee, receiver, executor or liquidator, and the relief shall not be deducted against gains from the realisation of investment assets.​​</p>
            </div>

            <div class="container-fluid p-5   border" >
                <h4>Payment of Tax</h4>
                <table class="bg-secondary text-white  table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Installment</th>
                        <th>Payment Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1st Installment</td>
                        <td>On or before the 15th day of the month of August, of that year of assessment</td>
                    </tr>
                    <tr>
                        <td>2nd Installment</td>
                        <td>On or before the 15th day of the month of November, of that year of assessment</td>
                    </tr>
                    <tr>
                        <td>3rd Installment</td>
                        <td>On or before the 15th day of the month of February, of that year of assessment</td>
                    </tr>
                    <tr>
                        <td>4th Installment</td>
                        <td>On or before the 15th day of the month of May, of the next succeeding year of assessment</td>
                    </tr>
                    <tr>
                        <td>Final Installment</td>
                        <td>On or before the date that is after six months end, of that year of assessment</td>
                    </tr>
                    </tbody>
                    
                </table>
            </div>
           <div class="container-fluid p-5   border">
               <h4>Furnishing Income Tax (IT) Return/ Statement of Estimated Tax payable (SET)</h4>
               <ul>
                   <li>
                        <div>Due Date for Furnishing SET</div>
                        <div>On or before 15th day of the month of August of the current year of assessment</div>
                   </li>
                   <li>
                        <div>Due Date for Furnish Returns :</div>
                        <div>On or before 30th day of the month of November, of the next succeeding year of assessment.</div>
                   </li>
                   <li>
                        <div>Submit to </div>
                        <div>
                            <ul>
                                <li>Online through e-Services</li>
                                <li>The relevant Inland Revenue Metropolitan/Regional Office in the Area nearby.</li>
                                <li>Central Document Management Unit (CDMU), 1st Floor of Inland Revenue Head Office Building</li>
                            </ul>
                        </div>
                   </li>
               </ul>
            </div>    
        </div>
        </>
        
    );
}

export default IncomeTax;