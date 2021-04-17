// import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import './css/about.css'
// const About = () => {
//     return (
//         <>
//             <Navbar />

//             <Footer />
//         </>
//     )
// }
// export default About;

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function About() {
    const classes = useStyles();
    const [state, setState] = React.useState({

        bottom: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div

            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Navbar />
            {['more'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}

            <h3 id="tagabout">About</h3>

            <div id="container">
                <div id="ourdemo">
                    <img src="https://source.unsplash.com/weekly?genius" alt="" />
                    <div id="content">
                        <p><b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae in cum culpa quas eveniet fugiat, nam praesentium consequuntur? Eaque nam, ea sapiente deserunt voluptatibus fugiat sed earum suscipit itaque dignissimos eveniet ab, esse at praesentium ut magni. In atque praesentium, beatae incidunt cumque perferendis, enim autem facilis nesciunt ratione consequuntur similique accusamus quidem nostrum architecto illo! Sint perspiciatis, minus non asperiores iste optio deleniti aspernatur! Totam cumque suscipit omnis aperiam iure cupiditate ea vel non pariatur. Voluptas nobis corrupti voluptatum officiis sequi incidunt at aperiam. Eveniet neque veniam, reprehenderit modi illum perferendis ipsum facere animi consequuntur, labore totam iusto.</p>
                    </div>
                    <div id="btn">
                        <button id="btnmore">know more</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default About;
