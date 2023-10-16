import { FaPaperPlane } from "react-icons/fa"

function Form( {handleInput,text,setText} ) {
  return (
    <form onSubmit={handleInput}>
    <input
        className="post-input"
        type="text"
        placeholder="Enter something"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button
      className="send"
      ><FaPaperPlane /></button>
  </form>

  )
}

export default Form
