import React from "react";
import style from "./Child.module.scss"

// console.log(style);
export default function child() {
    return (
        <div>
            <ul>
                <li className={style.item}>child-1111</li>
                <li className={style.item}>child-2222</li>
            </ul>
        </div>
    );
}