import React from 'react';


const SwitchMarvel = (props) => {

 /*   const Handler = (soc) => {
        var attribute = ;
        alert (attribute);
    }*/
    return (
        <div className='ctalog' >
            {props.marvel.map((item) =>
                <div className='catalog1'>
                    <img src={item.image} onClick={()=> props.handler(item)}></img>

                    <p>{item.name}</p>
                </div>
            )}
        </div>
    )
};


export default SwitchMarvel;