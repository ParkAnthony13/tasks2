import react, { useState, useContext } from 'react';
import axios from 'axios';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import GlobalState from '../contexts/GlobalState';
import MobileNav from './MobileNav';

const Landing = props => {
    const [state, setState] = useContext(GlobalState);

    const clickHandler = () => {
        setState({mobButton:!state.mobButton});
    }

    return (
        <div>
            <div className='landing'>
                
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

                <div className='container'>
                    <div>
                        <h1>Quest Log Task Manager</h1>
                    </div>
                    <div className='action'>
                        <button>Start Questing</button>
                    </div>
                </div>
            </div>
            <MobileNav/>
            <MainContent className="test"/>
            <Footer/>
        </div>
    )
}

export default Landing;