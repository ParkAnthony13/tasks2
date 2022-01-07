import react, { useContext } from 'react';
import '../css/Test.css';
import NavBar from '../components/NavBar';
import GlobalState from '../contexts/GlobalState';



const Test = props => {
    const [state, setState] = useContext(GlobalState);


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
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laboriosam nemo necessitatibus laborum architecto sapiente, cum laudantium accusantium est iure. Expedita sequi esse, impedit voluptas reprehenderit amet fugiat numquam perspiciatis.</div>
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
                                    <div className='daily'>
                                        <section className='complete'></section>
                                        <article>text</article>
                                        <section className='dailyRight'>
                                            <div>...</div>
                                            <div>x</div>
                                        </section>
                                    </div>
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Test;