import React from "react";

function Rincometax(){
    return(
        <div>
            <div className="container-fluid p-5 m-4"><h1>Income Tax</h1></div>

            <div className="container m-4 mx-auto">
                <p align="justify">
                    Income tax is charged on the basis of the provisions under the Inland Revenue Act, No. 24 of 2017 as
                    amended by the Inland Revenue (Amendment) Act, No. 10 of 2021. The Inland Revenue Act provides the
                    legal authority to charge, levy and collect income tax on the gains and profits of every person,
                    which arose or is arising to such person for every year of assessment commencing after 1st of April,
                    2018.
                </p>
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

export default Rincometax;