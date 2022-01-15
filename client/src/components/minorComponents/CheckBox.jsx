import react, { useState } from 'react';
import '../../css/minorCss/checkBox.css';

const CheckBox = props => {

    const { value, onChange, changeValue } = props
    const checkHandler= () => {
        changeValue(!value);
        // onChange();
    }
    return(
            <form className='checkContainer' action="#">
                <input type="checkbox" value={value} id="test1" onChange={checkHandler}/>
                <label for="test1"></label>
            </form>
    )
}


export default CheckBox;