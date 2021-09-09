import s from './paginator.module.css'
import React from 'react';

const Paginator = ({totalUsersCount,pageSize,changePage,currentPage}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (pageNumber) => {
        changePage(pageNumber, pageSize)
    }
        return (
            <div className={s.wrap}>
                {pages.map(p => <span key={p}
                                      style={{padding: 4, cursor: 'pointer'}}
                                      className={currentPage === p ? s.selectedPage : null}
                                      onClick={() => onPageChanged(p)}>{p}</span>)}
            </div>
        );
};

export default Paginator;