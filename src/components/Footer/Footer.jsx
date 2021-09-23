import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.footerBody}>
                    <div className={s.about}>
                        <span>This site is based on the free react/redux YouTube <a href="https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8">course</a>.</span>
                        <span>In this course, class components are used, but I tried to use a functional approach</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;