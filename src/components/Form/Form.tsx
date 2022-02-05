import React, {FC} from 'react';
import {useDispatch} from 'react-redux';

import css from './form.module.css';
import {ITask} from '../../interfaces';
import {catchCopy, getData, handleData} from '../../store';
import {useCustomSelector} from '../../hooks';

const Form:FC = () => {

    const dispatch = useDispatch();

    const {inputValue, toDoList, iterateTask} = useCustomSelector(state => state.toDoReducer);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (inputValue) {

            if (toDoList.find((task:ITask) => task.title.toLowerCase().trim() === inputValue.toLowerCase().trim())) {
                dispatch(catchCopy(inputValue));
                return;
            }

            dispatch(handleData({inputValue: inputValue.trim()}));
        }
    }

    return (
        <>
            <form className={css.form} onSubmit={submit}>
                <div>
                    <input type='text' name={'toDo'} placeholder={'to do...'} value={inputValue}
                           onChange={(e) => dispatch(getData(e.target.value))}/>
                    <button>Add</button>
                </div>
                {iterateTask && <span>A "{iterateTask}" already exists</span>}
            </form>
        </>
    );
};

export {Form};