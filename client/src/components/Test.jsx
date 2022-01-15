import react, { useEffect, useState } from 'react';
import '../css/Test.css';
import CheckBox from './minorComponents/CheckBox';



const Test = props => {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const checkHandler = () => {
        setChecked(!checked);
        console.log(checked);
    }
    const checkHandler2 = () => {
        setChecked(!checked2);
        console.log(checked2);
    }


    return(
        <div className='testContainer'>
            <div className='taskCard' style={{width:'205px'}}>
                <section className='inProgress dailyLeft'>
                    <CheckBox value={checked} changeValue={setChecked} onChange={checkHandler}/>
                </section>
                <article>text</article>
                <section className='dailyRight'>
                    <div>...</div>
                    <div>x</div>
                </section>
            </div>
            <div className='taskCard' style={{width:'500px'}}>
                <section className='inProgress dailyLeft'>
                    <CheckBox value={checked2} changeValue={setChecked2} onChange={checkHandler2}/>
                </section>
                <article>text</article>
                <section className='dailyRight'>
                    <div>...</div>
                    <div>x</div>
                </section>
            </div>
        </div>
    )
}

export default Test;