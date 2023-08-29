import './Header.scss'
import {FaHome,FaSearch} from 'react-icons/fa'
import './index.scss'

export function Search(){
    return <div className='search'>
    <span className='search_icon'><FaSearch/></span>
    <input className='search_input' placeholder='Search' type='text'/>
</div>
}