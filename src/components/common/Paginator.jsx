import s from './paginator.module.css'
import React, {useState} from 'react';

const Paginator = ({totalItemsCount,pageSize,changePage,currentPage,portionSize=20}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const portionCount = Math.ceil(pagesCount/portionSize);

    const [portionNumber, setPortionNumber] = useState(1)

    const portionFirstPageNumber = (portionNumber - 1) * portionSize + 1
    const portionLastPageNumber = portionNumber * portionSize


    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (pageNumber) => {
        changePage(pageNumber, pageSize)
    }
        return (
            <div className={s.wrap}>
                {portionNumber > 1 && <button className={s.navPageBtn} onClick={()=> setPortionNumber(portionNumber - 1)}>Сюда</button> }
                {pages.filter(p => p>=portionFirstPageNumber && p <= portionLastPageNumber)
                    .map(p => <span key={p}
                                      style={{padding: 4, cursor: 'pointer'}}
                                      className={currentPage === p ? s.selectedPage : null}
                                      onClick={() => onPageChanged(p)}>{p}</span>)}
                {portionCount > portionNumber && <button className={s.navPageBtn} onClick={()=> setPortionNumber(portionNumber + 1)}>Туда</button>}
            </div>
        );
};

export default Paginator;