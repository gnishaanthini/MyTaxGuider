import React, { useState, setState } from 'react';
import Navbar from '../components/Navbar';
import Rsvat from "../components/taxes/Rsvat/Rsvat";

function SvatR() {
    return(
        <div>
            <Navbar/>
            <Rsvat/>
        </div>
    )
}

export default SvatR;