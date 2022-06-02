import React from "react";

function Rpaye(){
    return(
        <div>
            <div className="container-fluid p-5 m-4"><h1>Pay As You Earn Tax</h1></div>

            <div className="container m-4 mx-auto">
                <p align="justify">
                    In terms of Sectio​n 114 of the Inland Revenue Act No. 10 of 2006 or Sectio​n 83 of the Inland Revenue Act No.24 of 2017 (from 1st April, 2018) , Employers are required to deduct Income Tax on Employment Income of employees at the time of payment of remuneration.
                </p>
                <p align="justify">For this purpose the Commissioner General of Inland Revenue specifies Tax Tables which are to be used in making such tax deductions. Since the Tax is paid at the time of earning the remuneration, This System is called Pay-As-You-Earn System (PAYE)</p>
            </div>

            <div className="container  m-4 mx-auto rounded-3" style={{backgroundColor:"#DBD6FD"}}>
                <table className="table table-hover ">
                    <thead>
                    <tr class="border-bottom border-dark">
                        <th scope="col">Acts</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="http://www.ird.gov.lk/en/publications/Acts_Income%20Tax_2017/IR_Act_No._24_2017_E.pdf"
                               download>Inland Revenue Act, No.24 of 2017 [Certified on 24th October,2017]</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://www.ird.gov.lk/en/publications/Acts_Income%20Tax_2017/Guide%20to%20Inland%20Revenue%20Act.pdf"
                               download>Guide to Inland Revenue Act (Draft)</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://www.ird.gov.lk/en/publications/Acts_Income%20Tax_2017/IR_Act_No._10_2021_E.pdf" download>Inland Revenue (Amendment) Act, No.10 of 2021 [Certified on 13th May 2021]</a></td>
                    </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Rpaye;