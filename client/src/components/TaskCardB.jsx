import react, { useState, useRef, useEffect } from 'react';
import '../css/TaskCard.css';
import CheckBox from './minorComponents/CheckBox';
import DayInWeek from './minorComponents/DayInWeek';



const TaskCardB = props => {
    const {
        title,
        dueDate, 
        caldayToday, 
        day, 
        description,
        check,
        value,
        checked,
        onChange
    } = props;

    const [checker, setChecker] = useState(check);
    const [css,setcss] = useState('taskCard');
    const cssHandler = () => {
        if (css == 'taskCard') {
            setcss('taskCard opacity');
        } else {
            setcss('taskCard');
        }
    }
    const checkHandler = () => {
        setChecker(!checker);
        console.log(checker);
    }


    const [infoCSS,setInfoCSS] = useState('infoBar');




    return(
        <div className='taskContainer'>
            <div className={css}>
                <section className='inProgress dailyLeft'>
                    <form className='checkContainer' action="#">
                        <input type="checkbox" value='completedness' checked={checked} onChange={onChange}id="test1"/>
                        <label></label>
                    </form>
                </section>
                <article className='infoContainer'>
                    <div className={infoCSS}>
                        <div className="infoLeft">
                            <p>{title}</p>
                            <p>{dueDate}</p>
                        </div>
                        <div className='date'>
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

export default TaskCardB;