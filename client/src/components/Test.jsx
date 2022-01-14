import react, { useEffect, useState } from 'react';
import '../css/Test.css';



const Test = props => {



    return(
        <div className='testContainer'>
            <div className='taskCard' style={{width:'205px'}}>
                <section className='inProgress dailyLeft'>
                    <div className='checkContainer'>
                        <input type="checkbox"  className='checkbox'/>
                        <span className='checkTypeA'></span>
                    </div>
                </section>
                <article>text</article>
                <section className='dailyRight'>
                    <div>...</div>
                    <div>x</div>
                </section>
            </div>
            <div className='taskCard' style={{width:'500px'}}>
                <section className='inProgress dailyLeft'></section>
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