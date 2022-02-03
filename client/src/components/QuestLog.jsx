import react, { useContext, useEffect, useState } from 'react';
import '../css/QuestLog.css';
import NavBar from './NavBar';
import GlobalState from '../contexts/GlobalState';
import TaskCard from './TaskCard';
import TaskCardB from './TaskCardB';
import ProjectCard from './ProjectCard';


const QuestLog = props => {
    const [state, setState] = useContext(GlobalState);
    const [date,setDate] = useState(new Date());
    const [calday,setCalday] = useState(`${date.getMonth().toString()}-${date.getDate().toString()}-${date.getFullYear().toString()}`);
    const [today,setToday] = useState(date.getDay().toString());



    const listDailies = [
        {
            id:1,
            title:'This is due laaayyyter today',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis eos porro unde sint nemo qui repudiandae, eius, commodi amet deserunt placeat delectus. Beatae minima dolore voluptas delectus a numquam.',
            check:true
        },
        {
            id:2,
            title:'test2',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'test test test test test test',
            check:false
        }
    ];
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
    const taskList = [
        {
            id:1,
            pid:1,
            title:'Taskbar component',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'finish designing component so that it can render based on database',
            check:true
        },
        {
            id:2,
            pid:1,
            title:'Tasks2 MySql',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'reflect schema to front end',
            check:true
        },
        {
            id:3,
            pid:2,
            title:'Maps front end',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'design front end for drawing two lines on map',
            check:true
        },
        {
            id:4,
            pid:2,
            title:'kml file to json',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'Figure out how to export and save kml google maps data for app to utilize',
            check:true
        },
        {
            id:5,
            pid:2,
            title:'json to map',
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'take json data and map it in app.',
            check:true
        }
    ]
    const [dailyState, setDailyState] = useState(listDailies);
    const [projectState, setProjectState] = useState(listProjects);
    const [projectTasks, setProjectTasks] = useState(taskList);
    const [currentProject, setCurrentProject] = useState(0);
    const [filteredTasks, setFilteredTasks] = useState([
        ...dailyState, ...projectTasks
    ]);


    const changeProject = (id) => {
        console.log(id);
        setCurrentProject(id);
    }
    
    const dailyChecks = (pos) => {
        const temp = dailyState.map((item, idx) => {
            if (idx === pos) {
                item.check = !item.check
                return(item);
            } else {
                return(item);
            }
        })
        setDailyState(temp);
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
    const taskListChecks = (pos) => {
        const temp3 = taskList.map((item, idx) => {
            if (idx === pos) {
                item.check = !item.check
                return(item);
            } else {
                return(item);
            }
        })
    }

    const [tasksToday, setTasksToday] = useState([
        ...taskList.filter(item => item.dueDate === today)
    ])

    // const [projects,setProjects] = useState([]);
    
    
    
    
    
    
    
    
    // const [dailies,setDailies] = useState([]);
    const saveTaskBar1 = () => {
        // <div>
        //     {dailies.map((item, idx) => {
        //         return(
        //             <TaskCard 
        //                 className={item.check?'':'opacity'}
        //                 key={idx}
        //                 title={item.title}
        //                 dueDate={item.dueDate}
        //                 day={item.day}
        //                 description={item.description}
        //                 check={item.check}
        //             />
        //         )
        //     })}
        // </div>
    }
    const saveTaskBar2 = () => {
        <div>
            
        </div>
    }


    useEffect(()=> {

    },[])

    return(
        <div>
            <NavBar/>
            <div className='mainContainer'>
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
                                    {filteredTasks.filter((proj) => proj.dueDate === calday).map((item,idx) => {
                                        return(
                                            <TaskCardB
                                                key={idx}
                                                // value={item.pid}
                                                // checked={projectTasks[idx].check}
                                                // onChange={() => taskListChecks(idx)}

                                                title={item.title}
                                                dueDate={item.dueDate}
                                                day={item.day}
                                                description={item.description}
                                                check={item.check}
                                            />
                                        )
                                    })}
                                    {dailyState.map((item,idx) => {
                                        return(
                                            <TaskCardB
                                                key={idx}
                                                value={item.check}
                                                checked={dailyState[idx].check}
                                                onChange={() => dailyChecks(idx)}

                                                title={item.title}
                                                dueDate={item.dueDate}
                                                day={item.day}
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
                                    {projectTasks.filter((proj) => proj.pid == currentProject).map((item,idx) => {
                                        return(
                                            <TaskCardB
                                                key={idx}
                                                value={item.pid}
                                                checked={projectTasks[idx].check}
                                                onChange={() => taskListChecks(idx)}

                                                title={item.title}
                                                dueDate={item.dueDate}
                                                day={item.day}
                                                description={item.description}
                                                check={item.check}
                                            />
                                        )
                                    })}
                                    <div className='daily'>
                                        <section className='complete'></section>
                                        <article>text</article>
                                        <section className='dailyRight'>
                                            <div>...</div>
                                            <div>x</div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Today'>
                        <h3>Today's</h3>
                        <div className='noSplit'>
                            <div className='lists'>
                                <div className='inputTypeB'>
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                                <div>
                                    {filteredTasks.filter((proj) => proj.dueDate === calday).map((item,idx) => {
                                        return(
                                            <TaskCardB
                                                key={idx}
                                                // value={item.pid}
                                                // checked={projectTasks[idx].check}
                                                // onChange={() => taskListChecks(idx)}

                                                title={item.title}
                                                dueDate={item.dueDate}
                                                day={item.day}
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