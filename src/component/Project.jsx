import { useState } from 'react';
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown, FaChevronRight } from 'react-icons/fa';


export function Project(){
    const [role,setRole]=useState(<FaChevronDown/>)
    const [check,setCheck]=useState(true)
    const [x,setX]=useState(<><a href='#' className='x'><FaInbox/><span>Work</span></a>
    <a href='#' className='x'><FaInbox/><span>Home</span></a></>)
    function p(){
        if(!check){
            setX(<><a href='#' className='x'><FaInbox/><span>Work</span></a>
            <a href='#' className='x'><FaInbox/><span>Home</span></a></>)
        }else setX(<></>)
        if(check) setRole(<FaChevronRight/>)
        else setRole(<FaChevronDown/>)
        setCheck(!check)
        return 
    }
    return (<div>
        <div onClick={p}><span>{role}</span><span >Project</span></div>
        {x}
    </div>)
}