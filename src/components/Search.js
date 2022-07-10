const Search = (props) => {
    return(
        <div className="search">
           <input className="input" onChange={props.onChange} placeholder="  Enter Country Name..."/>
        </div>
    )
}

export default Search