import React, {FC} from 'react';
import s from './MyModal.module.css';

type PropsType = {
    children: React.ReactChild | React.ReactNode,
    visible: boolean,
    setVisible: (bool:boolean) => void
}

const MyModal:FC<PropsType> = ({children,visible,setVisible}) => {

    const rootClasses = [s.myModal]

    if (visible){
        rootClasses.push(s.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={s.myModalContent} onClick={e=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;