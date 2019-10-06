import React from "react";
import s from "./Listhero.module.css";
import { dleeDellCreateAction } from "./rdux-store/dlee-reducer";

const Listhero = props => {
    return (
        <div className={s.listhero}>
            <div className={s.ctalog}>
                {props.state.map((item, index) => (
                    <div className={s.catalog1}>
                        <div className={s.gallery}>
                            <img src={item.image} />
                            <span>{item.count}</span>
                            <span
                                className={s.close}
                                onClick={() => props.dispatch(dleeDellCreateAction(index))}
                            >x</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listhero;
