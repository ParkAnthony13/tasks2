import react from 'react';
import {navigate} from '@reach/router';
import '../css/FuncButton.css';

const FuncButton = props => {
    const {text, navTo} = props;

    const clickHandler = () => {
        navigate(`${navTo}`);
    }

    return(
        <div className='flexcenter'>
            <button onClick={clickHandler} className='ButtonM dflex aligncenter justcenter'>{text}</button>
        </div>
    )
}

export default FuncButton;