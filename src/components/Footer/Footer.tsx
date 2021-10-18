import React, {FC} from 'react';
import s from './Footer.module.css'

const Footer:FC = () => {
    return (
            <div className={s.footerContainer}>
                <div className={s.footerBody}>
                    <div className={s.about}>
                        <span>This site is based on the free react/redux YouTube <a href="https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8" target='_blank' rel="noreferrer">course</a>.</span>
                        <span>In this course, class components are used, but I tried to use a functional approach</span>
                    </div>
                </div>
            </div>
    );
};

export default Footer;