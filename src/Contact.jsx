import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import './css/contact.css'
const Contact = () => {
    return (
        <>
            <Navbar />
            <h2 style={{ textAlign: "center", marginTop: "1em" }}>Contact US</h2>

            <div id="container">
                <div id="form">

                    <form id="formControl">
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-4 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="staticEmail" placeholder="name"></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="staticEmail" placeholder="email"></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-5 col-form-label">con Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" placeholder="con Password"></input>
                            </div>
                        </div>
                        <div className=" row" id="submitbtn">
                            <button type="button" class="btn  col-sm-5 text-center">submit</button>
                        </div>
                    </form>

                </div>

            </div>

            <Footer />
        </>
    )
}
export default Contact;