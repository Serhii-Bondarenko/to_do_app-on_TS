import React, {FC} from 'react';

import css from './toDoList.module.css';
import {Task} from '../Task/Task';
import {ITask} from '../../interfaces';
import {useCustomSelector} from '../../hooks';

const ToDoList:FC = () => {

    const {toDoList} = useCustomSelector(state => state.toDoReducer);

    return (
        <div>
            <ol className={css.list}>
                {toDoList.map((task:ITask) => <Task key={task.id} task={task}/>).reverse()}
            </ol>
        </div>
    );
};

export {ToDoList};