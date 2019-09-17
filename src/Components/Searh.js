import React from 'react';


const Search = (props) => {



    let serVal = (e) => {
        let das = e.target.value;
        props.hanchang(das);

    };

    return (
        <form>
            <input onChange={serVal} type="text" placeholder="Поиск..." value={props.state.sas} />
            <button type="submit"></button>
        </form>
    )
};


export default Search;