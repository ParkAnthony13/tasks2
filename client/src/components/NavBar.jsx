import react from 'react';
import '../css/NavBar.css';


const NavBar = props => {
    return(
        <div className='NavBar'>
            <nav>
                <div id='logo'>
                    <a href='#'></a>
                </div>
                <ul>
                    <li><a href='/'>home</a></li>
                    <li><a href='/projects'>projects</a></li>
                    <li><a href='#'>contact</a></li>
                    <li><a href='/signOn'>sign on</a></li>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;