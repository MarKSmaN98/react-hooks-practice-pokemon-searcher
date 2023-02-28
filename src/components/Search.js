import React from "react";

function Search({setSearch, filterSearch, search}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={e => {
          setSearch(e.target.value); 
          filterSearch(search)}}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
