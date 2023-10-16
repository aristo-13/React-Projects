import {FaTrash,FaPen} from 'react-icons/fa'


function Posts( {posts,handleDelete,isLoading} ) {
  return (
    <div className="posts">
      {isLoading && <p className='loading'>Loading...</p>}
    {
     posts.map((post) => (
        <div
        key={post.id}
        className="post">
            <span>{post.text}</span>
            <div className='controlbtn'>
            <FaPen
              role='button'
            />
             <FaTrash
               role='button'
               onClick={() => handleDelete(post.id)}
            />
            </div> 
      </div>
     ))
    }
 </div>
  )
}

export default Posts
