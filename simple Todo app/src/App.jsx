import { useState,useEffect } from "react";
import Form from "./components/Form";
import Posts from "./components/Posts";
import Api_Req from "./components/ApiReq";

function App() {
  const [posts,setPost] = useState([])
  const [text,setText] = useState('')
  const [err,setErr] = useState(null)
  const [isLoading,setIsLoading] = useState(true)
 

const Api_Url = 'http://localhost:3004/posts'
useEffect(() => {
  const fetchData = async () => {
    try{
      const response = await fetch(Api_Url)
      if(!response.ok) throw Error('Failed To fetch required Data')
      const data = await response.json()
      setPost(data)
      setErr(null)
    }catch (err){
      setErr(err)
    }finally{
      setIsLoading(false)
    }
    
  }
setTimeout(() => {
  (async () => await fetchData())()
},2000)

},[])

// Handle Post
    async function handleInput(e){
          e.preventDefault()
          const newId = posts.length ? posts[posts.length - 1].id + 1 : 1
          const newPost = {id: newId, text: text}
          setPost([...posts,newPost])
          setText('')

          const input_opt = {
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(newPost)
          }

          const results = await Api_Req(Api_Url,input_opt)
          if(results) setErr(results)
    }

    //Delete Post
   async function handleDelete(id) {
          const del = posts.filter((post) => post.id !== id)
          setPost(del)

          const delUrl = `${Api_Url}/${id}`
          const DelOpt = {method: 'DELETE'}
          const results = await Api_Req(delUrl,DelOpt)
          if(results) setErr(results)
    }
//Edit Post
/* function handleEdit(id) {
  const input = document.querySelector('.post-input');

  // Find the post with the matching id
  const postToEdit = posts.find((post) => post.id === id);

  if (postToEdit) {
      // Set the input field value to the post's text
      input.value = postToEdit.text;

      // Assuming you have a state variable for editing text
      setText(input.value);

      // Edit the post and update the state
      const updatedPosts = posts.map((post) => {
          if (post.id === id) {
              return { ...post, text: text };
          }
          return post;
      });

      setPost(updatedPosts);
  }
} */


  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1> 
      </header>
      <Form
       handleInput={handleInput}
       text={text}
       setText={setText}
      />
      
        <Posts
        setErr={setErr}
        isLoading={isLoading}
        handleDelete={handleDelete}
        posts={posts}
      />
      
       
    </div>
  );
}

export default App;
