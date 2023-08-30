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
                            <Listitem fa={<FaInbox className='list_item_icon'/>} text='Inbox'/>
                            <Listitem fa={<FaCalendar className='list_item_icon'/>} text='Today'/>
                            <Listitem fa={<FaCalendarAlt className='list_item_icon'/>} text='Next 7 days'/>
                        </ul>
                    </section>
                    <section className='sidebar_category'>

                    </section>
                </aside>
            </div>
            <div className="todo_content">TodoContent</div>
        </div>
    );
}

export default App;
