
import ItemList from './ItemList'

function Content({items, onchange,onDel}) {

  return (
    <> 
    {!items.length? (<p>NO ITEMS TO SHOW</p>):(  
    <ItemList 
     items={items} 
     onchange={onchange} 
     onDel={onDel}
    />
      )}
    </>
  )
}

export default Content
