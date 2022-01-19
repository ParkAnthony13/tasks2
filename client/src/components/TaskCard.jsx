import react, { useState, useRef, useEffect } from 'react';
import '../css/TaskCard.css';
import CheckBox from './minorComponents/CheckBox';
import DayInWeek from './minorComponents/DayInWeek';



const TaskCard = props => {
    const {title, status, dueDate, caldayToday, day, description} = props;



    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [infoCSS,setInfoCSS] = useState('infoBar');
    const checkHandler = () => {
        setChecked(!checked);
        console.log(checked);
    }


    const checkHandler2 = () => {
        setChecked(!checked2);
        console.log(checked2);
    }

    const ref = useRef(null);
    window.addEventListener('resize',function() {
        if (("width", ref.current.offsetWidth) < 333) {
            setInfoCSS('infoBarSmall');
        }
        else {
            setInfoCSS('infoBar');
        }
    })



    useEffect(() => {
        console.log("width", ref.current.offsetWidth);
    },[]);




    return(
        <div className='taskContainer'>
            <div className='taskCard'>
                <section className='inProgress dailyLeft'>
                    <CheckBox value={checked} changeValue={setChecked} onChange={checkHandler}/>
                </section>
                <article className='infoContainer'>
                    <div className={infoCSS} ref={ref}>
                        <div className="infoLeft">
                            <p>{title}</p>
                        </div>
                        <div className='date'>
                            <p>{dueDate}</p>
                        </div>
                        <div className="infoRight">
                            <DayInWeek/>
                        </div>
                    </div>
                    <div className='description'>
                        <p>{description}</p>
                    </div>
                </article>
                <section className='dailyRight'>
                    <div>...</div>
                    <div>x</div>
                </section>
            </div>
        </div>
    )
}

export default TaskCard;