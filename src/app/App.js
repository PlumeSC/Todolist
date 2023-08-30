import './App.scss';
import { Header } from '../component/Header'
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import { Listitem } from '../component/Listitem';


function App() {
    return (
        <div className="todo">
            <div className="todo__header"><Header/></div>
            <div className="todo__sidebar">
                <aside className='sidebar'>
                    <section className='sidebar_category'>
                        <ul className='list'>
                            <Listitem fa={<FaInbox/>} text='Inbox'/>
                            <Listitem fa={<FaCalendar/>} text='Today'/>
                            <Listitem fa={<FaCalendarAlt/>} text='Next 7 days'/>
                        </ul>
                    </section>
                    <section className='sidebar_category'>
                        <div className='accordion'>
                            <div className='accordion_toggle'>
                                <li className='accordion_item'>
                                    <FaChevronDown className='accordion_icon accordion_icon_active'/>
                                    <p className='accordion_text'>Project</p>
                                </li>
                                <ul className='list'>
                                    <div></div>
                                    <Listitem fa={<FaInbox/>} text='ProjectA'/>
                                    <Listitem fa={<FaInbox/>} text='ProjectB'/>
                                    <Listitem fa={<FaInbox/>} text='ProjectC'/>
                                </ul>
                            </div>
                        </div>
                        
                    </section>
                </aside>
            </div>
            <div className="todo_content">TodoContent</div>
        </div>
    );
}

export default App;
