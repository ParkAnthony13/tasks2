import react, { useContext, useEffect, useState } from 'react';
import '../css/QuestLog.css';
import NavBar from './NavBar';
import GlobalState from '../contexts/GlobalState';
import TaskCard from './TaskCard';
import TaskCardB from './TaskCardB';
import ProjectCard from './ProjectCard';
import EditWindow from './EditWindow';

const QuestLog = props => {
    const [state, setState] = useContext(GlobalState);
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
    
    const listProjects = [
        {
            id:1,
            title:'Project 1',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'Task manager',
            check:true
        },
        {
            id:2,
            title:'Project 2',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'Map markers',
            check:true
        }
    ]
    
    const [masterList, setMasterList] = useState(mlist)
    const [projectState, setProjectState] = useState(listProjects);
    const [currentProject, setCurrentProject] = useState(0);


    const changeProject = (id) => {
        setCurrentProject(id);
    }
    
    const checkList = (pos) => {
        const temp = masterList.map((item, idx) => {
            if (idx === pos) {
                item.check = !item.check
                return(item);
            } else {
                return(item);
            }
        })
        setMasterList(temp);
    }
    const projectChecks = (pos) => {
        const temp2 = projectState.map((item, idx) => {
            if (idx === pos) {
                item.check = !item.check
                return(item);
            } else {
                return(item);
            }
        })
        setProjectState(temp2);
    }




    useEffect(()=> {

    },[])

    return(
        <div>
            <NavBar/>
            <div className='mainContainer'>
                <div className='legend'>
                    <div className='legendItem'>
                        <span className='noRepeat'></span>
                        <p>No Repeat Quests</p>
                    </div>
                    <div className='legendItem'>
                        <span className='interDay'></span>
                        <p>Daily Quests</p>
                    </div>
                    <div className='legendItem'>
                        <span className='interWeek'></span>
                        <p>Monthly Quests</p>
                    </div>
                    <div className='legendItem'>
                        <span className='interYear'></span>
                        <p>Annual Quests</p>
                    </div>
                </div>
                
                <div className='mainGrid'>
                    <div className='Dailies'>
                        <h3>Dailies and Due Today</h3>
                        <div className='noSplit'>
                            <div className='lists'>
                                <div className='inputTypeB'>
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                                <div>
                                    {masterList.filter((proj) => proj.dueDate === calday).map((item,idx) => {
                                        return(
                                            <TaskCardB
                                                key={idx}
                                                value={item.pid}
                                                checked={masterList[idx].check}
                                                onChange={() => checkList(idx)}

                                                title={item.title}
                                                id={item.id}
                                                dueDate={item.dueDate}
                                                day={item.day}
                                                interval={item.interval}
                                                description={item.description}
                                                check={item.check}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Proj'>
                        <h3>Projects</h3>
                        <div className='split'>
                            <div className='lists'>
                                <div className='inputTypeB'>
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                                <div>
                                    {projectState.map((item,idx) => {
                                        return(
                                            <ProjectCard
                                                key={idx}
                                                value={item.check}
                                                checked={projectState[idx].check}
                                                onChange={() => projectChecks(idx)}

                                                title={item.title}
                                                dueDate={item.dueDate}
                                                day={item.day}
                                                description={item.description}
                                                check={item.check}
                                                changeProject={() => changeProject(item.id)}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='lists'>
                                <div className='inputTypeB'>
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                                <div>
                                    {currentProject === 0 
                                    ? <div>
                                        Please select a project.
                                    </div>
                                    : <div>
                                        {masterList.filter((proj) => proj.pid == currentProject).map((item,idx) => {
                                            return(
                                                <TaskCardB
                                                    key={idx}
                                                    value={item.pid}
                                                    checked={masterList[idx].check}
                                                    onChange={() => checkList(idx)}

                                                    id={item.id}
                                                    title={item.title}
                                                    dueDate={item.dueDate}
                                                    day={item.day}
                                                    interval={item.interval}
                                                    description={item.description}
                                                    check={item.check}
                                                />
                                            )
                                        })}
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Today'>
                        <h3>All Quests</h3>
                        <div className='noSplit'>
                            <div className='lists'>
                                <div className='inputTypeB'>
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                                <div>
                                    {masterList.filter((proj) => proj.pid === 0).map((item,idx) => {
                                        return(
                                            <TaskCardB
                                                key={idx}
                                                value={item.pid}
                                                checked={masterList[idx].check}
                                                onChange={() => checkList(idx)}

                                                title={item.title}
                                                dueDate={item.dueDate}
                                                day={item.day}
                                                interval={item.interval}
                                                description={item.description}
                                                check={item.check}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default QuestLog;