import React, {useState} from 'react';
import s from './Listhero.module.css';

export const Hero = props => {
    const [count, setCount] = useState(0);
    return <div className={s.catalog1}>
                    <div className ={s.gallery}>
                    <img src={props.item.image} onClick = {() => setCount (count +1)} />
                <span>{count}</span>
                    <span className={s.close} onClick= {() => props.handler(props.index)}>x</span>
                    
                    </div>
                </div>
    
}
