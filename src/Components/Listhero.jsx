import React from 'react';
import s from './Listhero.module.css'

const Listhero = (props) => {


   
   
   
    return (
        <div className={s.listhero}>
            <div className={s.ctalog} >
            {props.dcd.map((item) =>
                <div className={s.catalog1}>
                    <div className ={s.gallery}>
                    <img src={item.image}></img>
                    <span className={s.close}>x</span>
                    </div>
                </div>
            )
            }
            </div>
        </div>
    )

}

export default Listhero;
