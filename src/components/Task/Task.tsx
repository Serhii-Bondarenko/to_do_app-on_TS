import React, {FC, useRef} from 'react';
import {useDispatch} from 'react-redux';

import './task.css';
import {completeTask, removeTask} from '../../store';
import {ITask} from '../../interfaces';

const Task:FC<{task: ITask}> = ({task}) => {

    const dispatch = useDispatch();

    const title = useRef<HTMLHeadingElement>(null!);

    const isComplete = () => {
        dispatch(completeTask({task}));
        title.current.classList.toggle('complete');
    }

    return (
        <li className={'task'}>
            <input type='checkbox' onChange={isComplete}/>
            <h3 ref={title}>{task.title}</h3>
            <button onClick={() => dispatch(removeTask({task}))}>&times;</button>
        </li>
    );
};

export {Task};