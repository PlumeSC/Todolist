import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';


export function Generic(){
    return (<div>
        <a href='#' className='x'><FaInbox/><span>Inbox</span></a>
        <a href='#' className='x'><FaCalendar/><span>Today</span></a>
        <a href='#' className='x'><FaCalendarAlt/><span>Next 7 days</span></a>
    </div>)
}