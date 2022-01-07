import react, { useState, useContext } from 'react';
import '../css/NavBar.css';
import MobileNav from './MobileNav';
import GlobalState from '../contexts/GlobalState';

const NavBar = props => {
    const [state, setState] = useContext(GlobalState);

    const clickHandler = () => {
        setState({mobButton:!state.mobButton});
    }

    return(
        <div className='NavBar'>
            <nav>
                <div id='logo'>
                    <a href='#'></a>
                </div>
                <ul>
                    <li><a className='menu' href='/'>home</a></li>
                    <li><a className='menu' href='/questLog'>Quest Log</a></li>
                    <li><a className='menu' href='#'>contact</a></li>
                    <li><a className='menu' href='/signOn'>sign on</a></li>
                    <li className={state.mobButton ? 'mobButtonOff' : 'mobButtonOn'} href='/signOn' onClick={clickHandler}></li>
                </ul>
            </nav>
            <MobileNav/>
        </div>
    )
}


export default NavBar;