import React from 'react';
import s from './Listhero.module.css'

const Listhero = (props) => {


   
   
   
    return (
        <div className={s.listhero}>
            <div className='ctalog' >
            {props.dcd.map((item) =>
                <div className='catalog1'>
                    <img src={item.image}></img>

                </div>
            )
            }
            </div>
        </div>
    )

}

export default Listhero;
