import react, { useState, useRef, useEffect } from 'react';
import '../css/TaskCard.css';
import CheckBox from './minorComponents/CheckBox';
import DayInWeek from './minorComponents/DayInWeek';



const TaskCard = props => {
    const {
        title, 
        status, 
        dueDate, 
        caldayToday, 
        day, 
        description,
        check,
        key,
    } = props;

    const [checker, setChecker] = useState(check);
    
    const checkHandler = () => {
        setChecker(!checker);
    }


    const [infoCSS,setInfoCSS] = useState('infoBar');
    // const ref = useRef(null);
    // window.addEventListener('resize',function() {
    //     if (("width", ref.current.offsetWidth) < 333) {
    //         setInfoCSS('infoBarSmall');
    //     }
    //     // else {
    //     //     setInfoCSS('infoBar');
    //     // }
    // })

    // <CheckBox value={check} changeValue={setChecker} onChange={checkHandler}/>

    // useEffect(() => {
    //     console.log("width", ref.current.offsetWidth);
    // },[]);




    return(
        <div className='taskContainer'>
            <div className='taskCard'>
                <section className='inProgress dailyLeft'>
                    <form className='checkContainer' action="#">
                        <input type="checkbox" value='completedness' checked={checker} onChange={checkHandler}id="test1"/>
                        <label for="test1"></label>
                    </form>
                </section>
                <article className='infoContainer'>
                    <div className={infoCSS}>
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