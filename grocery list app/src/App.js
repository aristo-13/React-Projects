import Header from "./compronents/Header";
import Form from "./compronents/Form";
import SearchItem from "./compronents/SearchItem";
import Content from "./compronents/Content";
import Footer from "./compronents/Footer";
import { useState,useEffect } from "react";
import Api_Req from "./compronents/ApiReq";

function App() {
  const API_URL = 'http://localhost:3400/items'
  const [item,setItem] = useState([])
  const [Search,setSearch] = useState('')
  const [Err,setErr] = useState(null)
  const [isLoading,setIsloading] = useState(true)

  useEffect(() =>{
   async function fetchData(){
    
    try{
      const response = await fetch(API_URL)
      if(!response.ok) throw Error('Failed To fetch expected data')
      const items = await response.json()
      setItem(items)
      setErr(null)
    }catch(err){
      setErr(err.message)
    } finally{
      setIsloading(false)
    }
    
   }
   setTimeout(() => {
    (async () => await fetchData())()
  },2000 )

   
  },[])
  
  async function handleCheck(id){
    const listItems = item.map((item) => {
      return item.id === id? {...item, checked: !item.checked} : item
    })
    setItem(listItems)
    
   const CheckedItem = item.map((item) => item.id === id)

    const patchurl = `${API_URL}/${id}`
    const checkMethods = {
      method: 'PATCH',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({checked: CheckedItem[0].id})
    }
    const result = await Api_Req(patchurl,checkMethods)
    if(result) setErr(result)
  }

 async function handleDelete(id){
    const listItems = item.filter((item) => item.id !== id)
    setItem(listItems)
    let delurl = `${API_URL}/${id}`
    const delOpt = {method: 'DELETE'}
    const result = await Api_Req(delurl,delOpt)
    if(result) setErr(result)
   }
 
   return (
   <div className="app">
    <Header tile='Grocery List'/>
    <div className="cont">
      <Form items={item} setItem={setItem} API_URL={API_URL} setErr={setErr}/>
      <SearchItem  Search={Search} setSearch={setSearch}/>
    </div>
    
    <main>
      {isLoading && <p>Loading...</p>}
     {Err && <p
        style={{
          color: 'red',
          fontSize: '22px'
        }}
       >{Err}</p>} 
  {!Err && !isLoading && <Content
       items={item.filter(item => ((item.item).toLowerCase()).includes(Search.toLowerCase()))}
       onchange={handleCheck}
       onDel={handleDelete}
       setItem={setItem}
    /> }
    </main>
    <Footer count={item.length}/>
    </div>
  );
}

export default App;
