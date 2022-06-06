import React, { useState, setState } from 'react';
import Navbar from '../components/Navbar';
import Rtvrs from "../components/taxes/Rtvrs/Rtvrs";

function TvrsR() {
    return(
        <div>
            <Navbar/>
            <Rtvrs/>
        </div>
    )
}

export default TvrsR;