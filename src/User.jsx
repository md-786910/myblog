import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import './css/User.css'
const User = () => {
    const download = e => {
        console.log(e.target.href);
        fetch(e.target.href, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "image.jpg"); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    // end download
    // const { fname, lname } = useParams();

    // const Location = useLocation();
    // const history = useHistory();
    // console.log(history.goBack)

    // here use of useState() for image fetch

    const [num, setnum] = useState("laptop");

    const changetext = (e) => {

        // setimage(imageWal + 1);
        setnum(e.target.value);
        console.log(e.target.value)
    }

    const clickbtn = () => {

        setnum(num);
    }
    // const changename = `https://source.unsplash.com/weekly?${num}`
    const changename = `https://source.unsplash.com/1600x900/?${num},${num}`
    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: "center", marginTop: "1em" }}> Ours Image Collections</h1>

            {/* <h3>my current Location is {Location.pathname}</h3> */}

            {/* {Location.pathname === `/user/md/ashif` ? <button onClick={() => {
                { history.goBack() }
            }}>click me</button> : null
            } */}

            <div id="textField">
                search:<input type="text" id="text" value={num} onChange={changetext} placeholder="enter any ..." />
                <button id="btn" onClick={clickbtn}>click</button>

                <a
                    style={{ color: "black" }}
                    href={changename}
                    download
                    onClick={e => download(e)}
                >
                    <i className="fa fa-download" />
        download
      </a>
            </div>
            <div id="imageContainer">
                <img id="image" src={changename} alt="" />
            </div>
        </>
    )
}
export default User;