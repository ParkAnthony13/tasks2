import react, { useState } from 'react';
import axios from 'axios';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Landing = props => {

    return (
        <div>
            <div className='landing'>
                
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

                <div className='container'>
                    <div>
                        <h1>Quest Log Task Manager</h1>
                        <p>Work solo or with a team, assigning tasks and setting due dates for your projects</p>
                    </div>
                    <div className='action'>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default Landing;