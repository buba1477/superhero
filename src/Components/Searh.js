import React from "react";
import { sasChangeCreateAction } from "./rdux-store/sas-reducer";

const Search = props => {
    let serVal = e => {
        let das = e.target.value;
        props.dispatch(sasChangeCreateAction(das));
    };

    return (
        <form>
            <input
                onChange={serVal}
                type="text"
                placeholder="Поиск..."
                value={props.state.sas.sas}
            />
            <button type="submit"></button>
        </form>
    );
};

export default Search;
