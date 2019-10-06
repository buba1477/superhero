import React from "react";
import { dleePushCreateAction } from "./rdux-store/dlee-reducer";

let SwitchMarvel = prop => {
    const newArrMar = prop.state.marvel.marvel.filter(number => {
        return number.name.toLowerCase().indexOf(prop.state.sas.sas) !== -1;
    });

    return (
        <div className="ctalog">
            {newArrMar.map((item, index) => (
                <div className="catalog1">
                    <img
                        src={item.image}
                        onClick={() => prop.handler(dleePushCreateAction(item, index))}
                    ></img>

                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default SwitchMarvel;
