import s from './loader.module.css'

import React from 'react';

const Loader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.spinner}></div>
        </div>
    );
};

export default Loader;