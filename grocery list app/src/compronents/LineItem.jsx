import { FaTrash } from 'react-icons/fa'

function LineItem( {item,onchange,onDel} ) {
   
  return (
      <li className="item">
            <input
            onChange={() => onchange(item.id)}
             type="checkbox" 
             checked={item.checked}
             name="checkbox"
             />
            <label
            style={{cursor: 'pointer',}}
             htmlFor="checkbox"
             onDoubleClick={() => onchange(item.id)}
             >{item.item}</label>
            <FaTrash 
              onClick={() =>{return onDel(item.id)}}
              role='button' 
              tabIndex='0'
              aria-label= {`Delete ${item.item}`}
            />
        </li>
  )
}

export default LineItem
