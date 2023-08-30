import {Generic} from './Generic'
import {Project} from './Project'
import './Sidebar.scss'


export function Sidebar(){
    return(<div className="sidebar">
        <div className="generic"><Generic/></div>
        <div className="project"><Project/></div>
    </div>)
}