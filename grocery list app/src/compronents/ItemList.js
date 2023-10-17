
import LineItem from './LineItem'
function ItemList({items, onchange,onDel}) {
    
  return (
    <>
       <ul>   
      {items.map((item) => (
            <LineItem 
             key={item.id}
             item={item}
             onDel={onDel}
             onchange={onchange}
             />
        ))}
     </ul>
    </>
  )
}

export default ItemList
