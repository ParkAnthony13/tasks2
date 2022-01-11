import react, { useState, useContext } from 'react';
import '../css/QuestLog.css';
import GlobalState from '../contexts/GlobalState';
import NavBar from '../components/NavBar';

const QuestLogV1 = props => {
    const [state, setState] = useContext(GlobalState);

    return(
        <div className='questLog'>
            <NavBar/>
            <div className='questLogContainer'>
                <div className='dailyList'>
                    <h3>Dailies</h3>
                    <div className='dailyLog'>
                        <div className='inputTypeA'>
                            <input type="text" />
                            <button>ADD</button>
                        </div>
                        <div className='log'>
                            <div className='daily'>
                                <section className='complete'></section>
                                <article>text</article>
                                <section className='dailyRight'>
                                    <div>...</div>
                                    <div>x</div>
                                </section>
                            </div>

                            <div className='daily'>
                                <section className='late'></section>
                                <article>text</article>
                                <section className='dailyRight'>
                                    <div>...</div>
                                    <div>x</div>
                                </section>
                            </div>
                            <div className='daily'>
                                <section className='inProgress'></section>
                                <article>text</article>
                                <section className='dailyRight'>
                                    <div>...</div>
                                    <div>x</div>
                                </section>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='missionList'>
                    <h3>Missions</h3>
                    <div className='missionLog'>
                        <div className='phase'>
                            <h3>Phase 1</h3>
                            <div className='inputTypeA'>
                                <input type="text"/>
                                <button>ADD</button>
                            </div>
                            <div className='log'>
                                <div className='missionPhase'>
                                    <section className='complete'></section>
                                    <article>text</article>
                                    <section className='dailyRight'>
                                        <div>...</div>
                                        <div>x</div>
                                    </section>
                                </div>

                                <div className='missionPhase'>
                                    <section className='late'></section>
                                    <article>text</article>
                                    <section className='dailyRight'>
                                        <div>...</div>
                                        <div>x</div>
                                    </section>
                                </div>
                                <div className='missionPhase'>
                                    <section className='inProgress'></section>
                                    <article>text</article>
                                    <section className='dailyRight'>
                                        <div>...</div>
                                        <div>x</div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className='phase'>
                            <h3>Phase 2</h3>
                            <div className='inputTypeA'>
                                <input type="text"/>
                                <button>ADD</button>
                            </div>
                            <div className='log'>
                                <div className='missionPhase'>
                                    <section className='complete'></section>
                                    <article>text</article>
                                    <section className='dailyRight'>
                                        <div>...</div>
                                        <div>x</div>
                                    </section>
                                </div>

                                <div className='missionPhase'>
                                    <section className='late'></section>
                                    <article>text</article>
                                    <section className='dailyRight'>
                                        <div>...</div>
                                        <div>x</div>
                                    </section>
                                </div>
                                <div className='missionPhase'>
                                    <section className='inProgress'></section>
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
            </div>
        </div>
    )
}


export default QuestLogV1;