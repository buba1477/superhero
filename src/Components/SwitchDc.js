
import React from "react";

const SwitchDc = (prop) => {

    prop.dc.dis = prop.dc.dc.filter((number) => {
        return number.name.toLowerCase().indexOf(prop.dc.sas) !== -1;
    });


    return (
        <div className='ctalog'>

            {prop.dc.dis.map((item,index) =>
                <div className='catalog1'>
                    <img src={item.image} onClick={() => prop.handler(item,index)}></img>
                    <p>{item.name}</p>
                </div>
            )}
        </div>
    )
}
export default SwitchDc

