import s from './paginator.module.css'
import React, {FC, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {changePage} from "../../redux/reducers/usersReducer";

type PropsType = {
    totalItemsCount : number
    portionSize?: number
}


const Paginator: FC<PropsType> = ({totalItemsCount,portionSize=20}) => {

    const {pageSize,currentPage} = useTypedSelector(state => state.usersPage)
    const dispatch = useDispatch()

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const portionCount = Math.ceil(pagesCount/portionSize);

    const [portionNumber, setPortionNumber] = useState(1)

    const portionFirstPageNumber = (portionNumber - 1) * portionSize + 1
    const portionLastPageNumber = portionNumber * portionSize


    const pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


        return (
            <div className={s.wrap}>
                {portionNumber > 1 && <button className={s.navPageBtn} onClick={()=> setPortionNumber(portionNumber - 1)}>Сюда</button> }
                {pages.filter(p => p>=portionFirstPageNumber && p <= portionLastPageNumber)
                    .map(p => <span key={p}
                                      style={{padding: 4, cursor: 'pointer'}}
                                      className={currentPage === p ? s.selectedPage : undefined}
                                      onClick={() => dispatch(changePage(p))}>{p}</span>)}
                {portionCount > portionNumber && <button className={s.navPageBtn} onClick={()=> setPortionNumber(portionNumber + 1)}>Туда</button>}
            </div>
        );
};

export default Paginator;