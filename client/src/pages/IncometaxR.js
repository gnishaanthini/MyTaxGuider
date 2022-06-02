import React, { useState, setState } from 'react';
import Navbar from '../components/Navbar';
import Rincometax from "../components/taxes/Rincometax/Rincometax";

function IncomeR() {
    return(
        <div>
            <Navbar/>
            <Rincometax/>
        </div>
    )
}

export default IncomeR;