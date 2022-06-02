import React, { useState, setState } from 'react';
import Navbar from '../components/Navbar';
import Rpaye from "../components/taxes/Rpaye/Rpaye";

function PayeR() {
    return(
        <div>
            <Navbar/>
            <Rpaye/>
        </div>
    )
}

export default PayeR;