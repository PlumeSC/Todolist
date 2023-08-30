import './Listitem.scss'


export function Listitem(x){
    return(
    <li className='list_item'>
        <span >{x.fa}</span>
        <p className='list_list_text'>{x.text}</p>
    </li>
    )
}