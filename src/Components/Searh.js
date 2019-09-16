import React from 'react';


const Search = (props) => {
    let newRefrea = React.createRef();
    let serVal = () => {
        let das = newRefrea.current.value;
        props.hanchang(das);

    };

    return (
        <form>
            <input onChange={serVal} ref={newRefrea} type="text" placeholder = "Поиск..." value={props.textarea}/>
            <button type="submit"></button>
        </form>
    )
};


export default Search;