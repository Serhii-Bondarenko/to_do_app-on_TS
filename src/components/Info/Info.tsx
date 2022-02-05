import React, {FC} from 'react';

import css from './info.module.css';
import {useCustomSelector} from '../../hooks';
import {ITask} from '../../interfaces';

const Info:FC = () => {

    const {toDoList} = useCustomSelector(state => state.toDoReducer);

    return (
        <>
            <div className={css.wrap}>
                <div>
                    <h2>All: {toDoList.length}</h2>
                </div>
                <div>
                    <h2>Completed: {toDoList.filter((task:ITask) => task.completed).length}</h2>
                </div>
            </div>
            <hr/>
        </>
    );
};

export {Info};