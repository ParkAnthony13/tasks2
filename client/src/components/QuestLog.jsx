import react, { useContext, useState } from 'react';
import '../css/QuestLog.css';
import NavBar from './NavBar';
import GlobalState from '../contexts/GlobalState';
import TaskCard from './TaskCard';


const QuestLog = props => {
    const [state, setState] = useContext(GlobalState);
    const [bg,setBg] = useState("inComp");
    const [date,setDate] = useState(new Date());
    const [calday,setCalday] = useState(`${date.getMonth().toString()}-${date.getDate().toString()}-${date.getFullYear().toString()}`);
    const [today,setToday] = useState(date.getDay().toString());
    const test = [
        {
            title:'This is due laaayyyter today',
            status:false,
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'test test test test test test'
        },
        {
            title:'test2',
            status:true,
            dueDate: calday,
            caldayToday: calday,
            day: today,
            description:'test test test test test test'
        }
    ];

    const checkHandler = () => {
        if (bg == "comp") {
            setBg("inComp");
        } else if (bg == "inComp") {
            setBg("comp");
        }
    }


    return(
        <div>
            <NavBar/>
            <div className='mainContainer'>
                <div className='mainGrid'>
                    <div className='Dailies'>
                        <h3>Dailies</h3>
                        <div className='noSplit'>
                            <div className='lists'>
                                <div className='inputTypeB'>
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                                <div>
                                    <div className={`daily ${bg}`}>
                                        <section className='inProgress'></section>
                                        <article>text</article>
                                        <section className='dailyRight'>
                                            <div>...</div>
                                            <div onClick={checkHandler}>x</div>
                                        </section>
                                    </div>
                                    {test.map((item, idx) => {
                                        return(
                                            <TaskCard key={idx}
                                                title={item.title}
                                                status={item.status}
                                                dueDate={item.dueDate}
                                                day={item.day}
                                                description={item.description}
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
                                    <TaskCard/>
                                    <TaskCard/>
                                </div>
                            </div>
                            <div className='lists'>
                                <div className='inputTypeB'>
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                                <div>
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
                                    <TaskCard/>
                                    <TaskCard/>
                                    <TaskCard/>
                                    <TaskCard/>
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