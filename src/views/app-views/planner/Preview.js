import React from 'react';
import s from './styles.module.css'

const Preview = ({item,onClick}) => {
    return (
        <div className={s.preview} onClick={onClick}>
            <img src={item.link}/>
            <span className={s.previewName}>{item.name}</span>
        </div>
    );
};

export default Preview;