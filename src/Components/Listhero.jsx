import React from 'react';
import s from './Listhero.module.css'


const Listhero = (props) => {
    return (
        <div className={s.listhero}>
            <div className={s.ctalog} >
            {
                props.dcd.map((item,index) =>

                    <div className={s.catalog1}>
                        <div className ={s.gallery}>
                            <img src={item.image} />
                            <span>{item.count}</span>
                            <span className={s.close} onClick= {() => props.handler({index})}>x</span>

                        </div>
                    </div>
            )
            }
            </div>
        </div>
    )

}

export default Listhero;
