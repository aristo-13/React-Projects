import React from 'react'

function Footer({count}) {
   const date = new Date()
   const Today = date.getFullYear()

  return (
    <footer>
       <p>Copyright &copy;{Today}</p>
       <span>{count} List {count > 1 || count < 1 ? 'items' : 'item'}</span>
    </footer>
  )
}

export default Footer
