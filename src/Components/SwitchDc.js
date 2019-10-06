import React from "react";
import { dleePushCreateAction } from "./rdux-store/dlee-reducer";

const SwitchDc = prop => {
    const newArr = prop.state.dc.dc.filter(number => {
        return number.name.toLowerCase().indexOf(prop.state.sas.sas) !== -1;
    });

    return (
        <div className="ctalog">
            {newArr.map((item, index) => (
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
export default SwitchDc;
