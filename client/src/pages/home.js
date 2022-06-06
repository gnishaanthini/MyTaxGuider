import React, { useState, setState } from 'react';
import Navbar from '../components/Navbar';
import { useAppContext } from '../context/appContext';
import image from "../assets/images/home.png";


function Home() {

    const {
        user,
        isLoading,
        showAlert,
        displayAlert,
        registerUser,
        loginUser
    } = useAppContext();



    return (
        <div>
            <Navbar />

            <div style={{
                backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize:'contain',
                height: 600,width:'100%', objectFit:'cover'
            }}>

                <h1 style={{
                    position: 'absolute',
                    left: '35%',
                    top: '30%',
                    color: 'white',
                    fontSize: '80px'
                }}>Welcome {user.username}</h1>

                <h2 style={{
                    position: 'absolute',
                    left: '25%',
                    top: '50%',
                    color: 'white',
                    fontSize: '50px'
                }}>-We are here to help you with your tax-</h2>




            </div>

            <h2 style={{ position: 'absolute', left: '45%' }}>Our Services</h2>
            <br></br>
            <br></br>

            <section class="ftco-section bg-light ftco-no-pt">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate">
                            <div class="d-block">
                                <div class="icon d-flex mr-2">
                                    <span ></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Self Assessment of Tax</h3>
                                    <p>Computes the accurate amount to be paid to tax which helps in minimizing the errors in tax payments.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate">
                            <div class="d-block">
                                <div class="icon d-flex mr-2">
                                    <span ></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Information on Rules and Regulations</h3>
                                    <p>View information related to relevant acts and regulations related to taxadministration and according to the tax type</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate">
                            <div class="d-block">
                                <div class="icon d-flex mr-2">
                                    <span ></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Guidelines on performing tax related services</h3>
                                    <p>View the guidelines on filing returns, tax payments, and refunds, applying appeals and objections, and performing other tax-related services</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate">
                            <div class="d-block">
                                <div class="icon d-flex mr-2">
                                    <span ></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Ask for help</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            


        </div >
    )
}

export default Home;