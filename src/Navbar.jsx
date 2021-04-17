import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import fourth from './image/icon.png';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import './css/App.css';
const Navbar = () => {

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
    });

    const [nav, setNav] = useState("none");
    const handleChange = (event) => {
        if (nav == "none") {
            setNav('block')
        }
        else {
            setNav("none");
        }
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [text, settext] = useState();
    const textChange = () => {

    }
    const btnForSearch = () => {

    }
    return (
        <>
            <nav>


                <Tooltip title="show">
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </Tooltip>

                <div id="inputField" style={{ display: nav }}>
                    <input type="text" placeholder="search any .." onChange={textChange} name="" id="searchText" />
                    <button id="searchbtn" onClick={{ btnForSearch }}>search</button>

                    <img src={fourth} alt="" />
                    <h1 id="webtitle">Codee</h1>
                </div>
                <ul>
                    <NavLink activeClassName="active_item" exact to="/"><li>Home</li></NavLink>

                    <NavLink activeClassName="active_item" exact to="/blog"><li>Blog</li></NavLink>
                    <NavLink activeClassName="active_item" exact to="/about"><li>About</li></NavLink>
                    <NavLink activeClassName="active_item" exact to="/contact"><li>Contact</li></NavLink>
                    <NavLink activeClassName="active_item" exact to="/user/md/ashif"><li>user</li></NavLink>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;