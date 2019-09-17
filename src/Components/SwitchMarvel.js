import React from 'react';


let SwitchMarvel = (prop) => {
    prop.marvel.dis = prop.marvel.marvel.filter((number) => {
        return number.name.toLowerCase().indexOf(prop.marvel.sas) !== -1;
    });

    return (
        <div className='ctalog' >
            {prop.marvel.dis.map((item) =>
                <div className='catalog1'>
                    <img src={item.image} onClick={() => prop.handler(item)}></img>

                    <p>{item.name}</p>
                </div>
            )}
        </div>
    )

};


export default SwitchMarvel;