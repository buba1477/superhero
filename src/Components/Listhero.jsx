import React from 'react';
import s from './Listhero.module.css'
import { Hero } from './Hero';

const Listhero = (props) => {


   
    return (
        <div className={s.listhero}>
            <div className={s.ctalog} >
            {
                props.dcd.map((item,index) =>
                
                <Hero key={'Hero'+index} handler = {props.handler} index = {index} item = {item}/>
            )
            }
            </div>
        </div>
    )

}

export default Listhero;
