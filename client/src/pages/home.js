import React, { useState, setState } from 'react';
import Navbar from '../components/Navbar';
import Rvat from "../components/taxes/Rvat/Rvat";

function Home() {
    return(
        <div>
            <Navbar/>
            <Rvat/>
        </div>
    )
}

export default Home;