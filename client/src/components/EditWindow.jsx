import react, { useState, useEffect } from 'react';
import '../css/EditWindow.css';


const EditWindow = props => {
    const {
        toggle,
        switchToggle,
        selectId
    } = props;



    const [date,setDate] = useState(new Date());
    const [calday,setCalday] = useState(`${date.getMonth().toString()}-${date.getDate().toString()}-${date.getFullYear().toString()}`);
    const [today,setToday] = useState(date.getDay().toString());




    const mlist = [
        {
            id:1,
            pid:0,
            title:'This is due laaayyyter today',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            interval: 0,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis eos porro unde sint nemo qui repudiandae, eius, commodi amet deserunt placeat delectus. Beatae minima dolore voluptas delectus a numquam.',
            check:false
        },
        {
            id:2,
            pid: 0,
            title:'test2',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            interval: 1,
            description:'test test test test test test',
            check:false
        },
        {
            id:3,
            pid:1,
            title:'Taskbar component',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            interval: 1,
            description:'finish designing component so that it can render based on database',
            check:false
        },
        {
            id:4,
            pid:1,
            title:'Tasks2 MySql',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            interval: 1,
            description:'reflect schema to front end',
            check:false
        },
        {
            id:5,
            pid:2,
            title:'Maps front end',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            interval: 7,
            description:'design front end for drawing two lines on map',
            check:false
        },
        {
            id:6,
            pid:2,
            title:'kml file to json',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            interval: 1,
            description:'Figure out how to export and save kml google maps data for app to utilize',
            check:false
        },
        {
            id:7,
            pid:2,
            title:'json to map',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            interval: 365,
            description:'take json data and map it in app.',
            check:false
        }
    ]




    const cancelOnClick = (e) => {
        e.stopPropagation();
    }
    const [masterList, setMasterList] = useState(mlist);
    const taskList = masterList.filter((item) => item.id===selectId)
    const [selected, setSelected] = useState(taskList[0]);


    const [intervalCss, setIntervalCss] = useState()
    useEffect(()=> {
        if (selected) {
            console.log(selected.interval);
            if (selected.interval === 0) {
                setIntervalCss('noRepeat');
            } 
            else if (selected.interval === 1) {
                setIntervalCss('interDay');
            }
            else if (selected.interval === 7) {
                setIntervalCss('interWeek');
            }  
            else if (selected.interval === 30) {
                setIntervalCss('interMonth');
            }
            else if (selected.interval === 365) {
                setIntervalCss('interYear');
            }
        }
    },[])

    const testfunc = () => {
        console.log(selectId)
        console.log(selected[0].interval);
    }
    return(
        <div className={toggle ? 'editWindow hidden' : 'editWindow'} onClick={switchToggle}>
            <div className='editForm' onClick={cancelOnClick}>
                <div className='editFormTop'>
                    <h2>Edit Task</h2>
                        {selected
                            ? <div>
                                {selected.title}
                            </div> 
                            : <div>Error Loading Task Data</div>}
                    <button onClick={testfunc}>test</button>
                </div>
            </div>
        </div>
    )
}

export default EditWindow;