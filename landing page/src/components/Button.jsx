

function Button({text,bg,color,other}) {
  return (
    <button
     style={{
        backgroundColor: bg,
        color: color
     }}
     className={`btn ${other}`}>
        {text}
    </button>
  )
}

export default Button
