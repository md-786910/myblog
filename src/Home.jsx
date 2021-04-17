import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import html from './image/html.png';
import css from './image/css.png';
import dev from './image/dev.png';
import backend from './image/backend.jpg';
import first from './image/1.png';
import hosting from './image/image-hosting.jpg';
import second from './image/2.jpg';
import third from './image/2.png';
import fourth from './image/4.jpg';
// import javascript from './image/javascript3.jfif';
import javascript from './image/javascript2.png';


import './css/Home.css'
const Home = () => {
    const htmlCode = "https://www.google.com"
    return (
        <>
            <Navbar />
            {/* <h2 style={{ textAlign: "center", marginTop: "1em" }}>Home page</h2> */}
            <div id="courese">
                <h2>Our Course</h2>
            </div>
            <div id="courseALL">
                <div id="container">
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={html} alt="Card image html"></img>
                        <div class="card-body">
                            <h5 class="card-title">HTML</h5>
                            <p class="card-text"><b>HTML</b> (Hypertext Markup Language) is the code that is used to structure a web page and its content..</p>
                            <a href="https://www.w3schools.com/html/" target="_blank" class="btn btn-primary">Learn</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={css} alt="Card image css"></img>
                        <div class="card-body">
                            <h5 class="card-title">CSS</h5>
                            <p class="card-text"><b>CSS</b> is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).</p>
                            <a href="https://www.w3schools.com/css/default.asp" target="_" class="btn btn-primary">Learn</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={javascript} alt="Card image javascript"></img>
                        <div class="card-body">
                            <h5 class="card-title">JAVASCRIPT</h5>
                            <p class="card-text"><b>JavaScript</b> is a client scripting language which is used for creating web pages. It is a standalone language developed in Netscape.</p>
                            <a href="https://www.w3schools.com/js/default.asp" target="_" class="btn btn-primary">Learn</a>
                        </div>
                    </div>

                </div>
            </div>
            <div id="ourCourse">
                <h2>  Our Webdevlopment Course With Project</h2>
                <div id="coursefull">
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={dev} alt="Card image javascript"></img>
                        <div class="card-body">
                            <h5 class="card-title">Web Devlopment</h5>
                            <p class="card-text"><b>Web development</b> is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or 'devs', do this by using a variety of coding languages..</p>
                            <a href="https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" class="btn btn-primary" target="_">DEVLPMENT FREE</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={hosting} alt="Card image javascript"></img>
                        <div class="card-body">
                            <h5 class="card-title">Free Hosting</h5>
                            <p class="card-text"><b>Hosting</b> (also known as Web site hosting, Web hosting, and Webhosting) is the business of housing, serving, and maintaining files for one or more Web sites.</p>
                            <a href="https://www.biz.nf/" target="_" class="btn btn-primary">FREE HOSTING</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={backend} alt="Card image javascript"></img>
                        <div class="card-body">
                            <h5 class="card-title">REACT JS</h5>
                            <p class="card-text"><b>React. js</b> is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps.</p>
                            <a href="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" class="btn btn-primary" target="_">FREE REACT</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={javascript} alt="Card image javascript"></img>
                        <div class="card-body">
                            <h5 class="card-title">All ON YOUTUBE</h5>
                            <p class="card-text"><b> learn <b>backend free with django and flask</b> by harry easy way simply ever</b>.</p>
                            <a href="https://www.youtube.com/watch?v=5BDgKJFZMl8&list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9" class="btn btn-primary" target="_">FREE BACKEND LANGUAGE</a>
                        </div>
                    </div>
                </div>

            </div>

            <div id="main">
                <h2>our sponsers</h2>
                <div id="content">
                    <img id="imageSponser" src={first} alt="" />
                    <img id="imageSponser" src={second} alt="" />
                    <img id="imageSponser" src={third} alt="" />
                    <img id="imageSponser" src={fourth} alt="" />
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Home;