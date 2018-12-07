import React from 'react';
import ReactDOM from 'react-dom';
import styles from './sideBarMenu.css';
import navbarstyles from './index.css'

import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Glyphicon
} from 'react-bootstrap';
class Navigationbar extends React.Component{
    render() {
        return (
            <div id="topbar-menu">
                <Navbar inverse collapseOnSelect style={{"marginBottom": "0px", "borderRadius": "0px", "border": "0px" }}>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Link Right
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link Right
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

class SideBar extends React.Component {
    render() {
        return (
            <div id="sidebar-menu" className={styles.sideBarMenuContainer}>
                <Navbar fluid className={styles.sidebar} inverse style={{"marginBottom": "0px", "borderRadius": "0px", "border": "0px" }} >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">User Name</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Navbar.Text className={styles.userMenu}>
                        <Navbar.Link href="#"><Glyphicon glyph="home"/></Navbar.Link>
                        <Navbar.Link href="#"><Glyphicon glyph="log-out"/></Navbar.Link>
                    </Navbar.Text>
                    <Nav>
                        <NavDropdown eventKey={1} title="Item 1" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2}>Item 2</NavItem>
                        <NavItem eventKey={3}>Item 3</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
class App extends React.Component {
  render () {
    return (
        < div id="wrapper" >
            < Navigationbar />
            < SideBar />
        </div>
    )
  }
}

ReactDOM.render(
    <App />, document.getElementById('app')
);