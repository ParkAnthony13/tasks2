import react, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import '../css/TaskCard.css';
import CheckBox from './minorComponents/CheckBox';
import DayInWeek from './minorComponents/DayInWeek';
import EditWindow from './EditWindow';


const TaskCardB = props => {
    const {
        id,
        title,
        dueDate, 
        caldayToday, 
        day, 
        description,
        check,
        value,
        checked,
        onChange,
        interval,
    } = props;
    const [toggle, setToggle] = useState(true);
    const [selectId, setSelectedId] = useState(id);
    const switchToggle = () => {
        setToggle(!toggle);
    };
    const [checker, setChecker] = useState(check);
    const [css,setcss] = useState('taskCard');
    const [intervalCss, setIntervalCss] = useState('')
    const [infoCSS,setInfoCSS] = useState('infoBar');

    const cssHandler = () => {
        if (css == 'taskCard') {
            setcss('taskCard opacity');
        } else {
            setcss('taskCard');
        }
    }
    const checkHandler = () => {
        setChecker(!checker);
    }

    useEffect(()=> {
        if (interval === 0) {
            setIntervalCss('noRepeat');
        } 
        else if (interval === 1) {
            setIntervalCss('interDay');
        }
        else if (interval === 7) {
            setIntervalCss('interWeek');
        }  
        else if (interval === 30) {
            setIntervalCss('interMonth');
        }
        else if (interval === 365) {
            setIntervalCss('interYear');
        }
    },[])


    return(
        <div className={`taskContainer ${check ? 'opacity' : ''}`}>
            <div className={css}>
                <section className={`${intervalCss} dailyLeft`}>
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
                            <EditWindow switchToggle={switchToggle} toggle={toggle} selectId={selectId}/>
                            <DayInWeek id={id}/>
                        </div>
                    </div>
                    <div className='description'>
                        <p>{description}</p>
                    </div>
                </article>
                <section className='dailyRight'>
                    <div onClick={()=> switchToggle(id)}>...</div>
                    <div>x</div>
                </section>
            </div>
        </div>
    )
}

export default TaskCardB;