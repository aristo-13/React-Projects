import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { useRef } from "react"
import Api_Req from "./ApiReq"

 function Form({items,setItem,API_URL,setErr}) {
const [text,setText] = useState('')
const inputRef = useRef()


    async function handleInput(e){
        let newId = items.length ? items[items.length - 1].id + 1 : 1
     e.preventDefault()
      if(!text){
        alert('Please Add an Item')
      }else{
        const newItem = {item: text, id: newId, checked: false}
        let itemlist = [...items,newItem]
        setItem(itemlist)
        
        const postOpt = {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newItem)

        }
        const result = await Api_Req(API_URL,postOpt)
        if(result) setErr(result)
      }
      setText('')
    }



  return (
    <form onSubmit={handleInput} className="addItem">
        <label htmlFor="addItem">Add Item: </label>
      <input
        id="addItem"
        autoFocus
        ref={inputRef}
        type="text" 
        value={text}
        placeholder="Enter Item"
        onChange={function(e){setText(e.target.value)}}
        required
    />
       <button
        type="submit"
        className="btn add"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default Form
