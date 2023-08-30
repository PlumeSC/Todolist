import './Listitem.scss'


export function Listitem(x){
    const listClassName = `list_item ${x.active ?`active`:``}`
    return(
    <li className={listClassName}>
        <span>{x.fa}</span>
        <p className='list_item_text'>{x.text}</p>
    </li>
    )
}