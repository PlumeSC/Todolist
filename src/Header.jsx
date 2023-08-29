import {FaHome,FaSearch} from 'react-icons/fa'
import './Header.scss'
import './index.scss'
import { Search } from './Search'


export function Header(){
    return (
    <header className='header'>
        <div className='header_logo'><FaHome/></div>
        <div className='header_text'>Todolist</div>
        <div className='header_search'><Search/></div>
    </header>)
}