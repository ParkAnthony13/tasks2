
import react, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'
import '../css/LogReg.css';
import axios from 'axios';
import NavBar from './NavBar';

const LogReg = props => {
    const [logName, setLogName] = useState('');
    const [logPass, setLogPass] = useState('');
    const [logError, setLogError] = useState({})

    const [newName, setNewName] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newConfPass, setNewConfPass] = useState('');

    const [loginStatus, setLoginStatus] = useState("");

    const logInHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/login", {
            logName: logName,
            logPass: logPass
        }).then((response) => {
            if (!response.data.message) {
                setLoginStatus(response.data[0].username);
                console.log(response.data[0].username) // success?
                console.log("success")
            } else {
                console.log(response.data);
                setLoginStatus(response.data.message) // incorrect message?
                console.log("incorrect")
            }
        })
    }

    const regHandler = e => {
        axios.post("http://localhost:3001/api/accounts", {
            username: newName,
            password: newPass,
        }).then(() => {
            console.log("registered!")
            navigate('/')
        }).catch((error) => {
            console.log("failed Reg")
            console.log(error)
        })
    }

    useEffect(() => {
        axios.get("http://localhost:3001/api/login").then((response) => {
            console.log(response);
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username)
            }
        })
    }, [])
    return (
        <div className="logRegContainer">
            <NavBar/>
            <div className='logRegContent'>
                <div id='signLogo'></div>
                <div className='dgrid gridCol2'>
                    <div className="logRegSign pad2">
                        <h1>Login</h1>
                        <form className="logForm">
                            <div className='clearForm'>
                                <label>User Name</label>
                                <input type="text" onChange={(e) => {setLogName(e.target.value)}} />
                            </div>
                            <div className='clearForm'>
                                <label>Password</label>
                                <input type="text" onChange={(e) => {setLogPass(e.target.value)}} />
                            </div>
                            
                            <button id="logInButtonM" onClick={logInHandler}>Log In</button>
                        </form>
                        <div>{loginStatus}</div>
                    </div>
                    <div className="logRegSign pad2">
                        <h1>Register</h1>
                        <form className="logForm">
                            <div className='clearForm'>
                                <label>Set User Name</label>
                                <input type="text" onChange={(e) => { setNewName(e.target.value) }} />
                            </div>
                            <div className='clearForm'>
                                <label>Set Password</label>
                                <input type="text" onChange={(e) => { setNewPass(e.target.value) }} />
                            </div>
                            <div className='clearForm'>
                                <label>Confirm Password</label>
                                <input type="text" onChange={(e) => { setNewConfPass(e.target.value) }} />
                            </div>

                            <button id="signUpButtonM" onClick={regHandler}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogReg;