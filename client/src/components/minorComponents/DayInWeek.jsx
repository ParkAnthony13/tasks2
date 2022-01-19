import react, { useEffect, useState } from 'react';
import '../../css/minorCss/DayInWeek.css';

/* TODAY marker / DAILIES */
const DayInWeek = props => {
    const [date,setDate] = useState(new Date());
    const day = date.getDay();
    const [week,setWeek] = useState([0,0,0,0,0,0,0]);
    useEffect(()=> {
        if (day==0) {
            setWeek([1,0,0,0,0,0,0]);
        }
        else if (day==1) {
            setWeek([0,1,0,0,0,0,0]);
        }
        else if (day==2) {
            setWeek([0,0,1,0,0,0,0]);
        }
        else if (day==3) {
            setWeek([0,0,0,1,0,0,0]);
        }
        else if (day==4) {
            setWeek([0,0,0,0,1,0,0]);
        }
        else if (day==5) {
            setWeek([0,0,0,0,0,1,0]);
        }
        else if (day==6) {
            setWeek([0,0,0,0,0,0,1]);
        }
    },[])

    return(
        <div>
            <span className={week[0]==1?"today":"notToday"}>Su &#160; </span>
            <span className={week[1]==1?"today":"notToday"}>M &#160; </span>
            <span className={week[2]==1?"today":"notToday"}>T &#160; </span>
            <span className={week[3]==1?"today":"notToday"}>W &#160; </span>
            <span className={week[4]==1?"today":"notToday"}>Th &#160; </span>
            <span className={week[5]==1?"today":"notToday"}>F &#160; </span>
            <span className={week[6]==1?"today":"notToday"}>S &#160;</span>
        </div>
    )
}

export default DayInWeek;