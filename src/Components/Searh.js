import React from 'react';


const Search = (props) => {
    let newRefrea = React.createRef();
    let serVal = () => {
        let das = newRefrea.current.value;
        props.hanchang(das);
    };
debugger;
    return (
        <form>
            <input onChange={serVal} ref={newRefrea} type="text" placeholder="Имя героя..."/>
            <button type="submit"></button>
        </form>
    )
};


export default Search;