
import React from "react";

const SwitchDc = (props) => {
let stoclee = () => {
    console.log();
};
    return (
        <div className='ctalog'>
            {/*CatalogHero*/}
            {props.dc.map((item) =>
                <div className='catalog1'>
                    <img src={item.image} onClick={()=> props.handler(item)}></img>
                    <p>{item.name}</p>
                </div>
            )}
        </div>
    )
}
export default SwitchDc

