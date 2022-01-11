import react, { useEffect, useState } from 'react';
import '../css/Test.css';



const Test = props => {
    const [x, setX] = useState(400);
    const [y,setY] = useState(110);
    const [startx, setstartx] = useState();
    const [starty, setstarty] = useState();
    const [finalX, setFinalX] = useState('');
    const [finalY, setFinalY] = useState('');

    useEffect(()=>{
        setFinalX(x + 'px');
        setFinalY(y + 'px');
    },[x,y])
    const resizeX = () => {

    }
    const test = (event) => {
        setstartx(event.clientX - event.target.offsetLeft)
        console.log(`Horizontal: ${event.clientX - event.target.offsetLeft}`);
        console.log(`Vertical: ${event.clientY - event.target.offsetTop}`)
    }


    return(
        <div className='testContainer'>
            <div className='taskCard' style={{width:`${finalX}`,height:`${finalY}`}}>
                <div className='resize'>
                    <div className='resizeTab' onMouseDown={test}/>
                </div>
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