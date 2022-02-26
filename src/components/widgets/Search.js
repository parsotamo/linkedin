
const Search = (props) => {
  return (
    <form className={props.className}>
        <input type='text' placeholder='Search...' />
        <button className='search-btn' type='submit'>
        <img src='/images/search-icon.svg' alt='Search Icon' />
        </button>
    </form>
  )
}

export default Search