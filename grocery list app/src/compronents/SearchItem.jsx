
function SearchItem({search,setSearch}) {

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
         type="text" 
         role="searchbox"
         id="search"
         placeholder="search Item"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         />
    </form>
  )
}

export default SearchItem
