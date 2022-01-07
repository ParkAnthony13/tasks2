import react, { useState, useContext } from 'react';
import '../css/NavBar.css';
import GlobalState from '../contexts/GlobalState';
const MobileNav = props => {
    const [state, setState] = useContext(GlobalState);

    const clickHandler = () => {
        setState({mobButton:true});
    }
    return(
        <div className={state.mobButton ? "dNone" : "NavMenuOn"}>
            <ul className='mobList'>
                <li><a className='NavMenu' href="/">home</a></li>
                <li><a className='NavMenu' href="questLog">Quest Log</a></li>
                <li><a className='NavMenu' href="">contact</a></li>
                <li><a className='NavMenu' href="">sign on</a></li>
            </ul>
            <div className='topExit' onClick={clickHandler}/>
            <div className='leftExit' onClick={clickHandler}/>
        </div>
    )
}

export default MobileNav;