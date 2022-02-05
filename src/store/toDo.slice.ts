import {createSlice} from '@reduxjs/toolkit';

import {IToDoState} from '../interfaces';

const initialState: IToDoState = {
    inputValue: '',
    toDoList: [],
    iterateTask: null
}

const toDoSlice = createSlice({
    name: 'toDoSlice',

    initialState,

    reducers: {
        getData: (state, action) => {
            state.inputValue = action.payload;
            state.iterateTask = null;
        },

        handleData: (state, action) => {
            state.toDoList.push({id: new Date().getTime(), completed: false, title: action.payload.inputValue});
            state.inputValue = '';
            state.iterateTask = null;
        },

        removeTask: (state, action) => {
            const index = state.toDoList.findIndex(task => task.id === action.payload.task.id);
            state.toDoList.splice(index, 1);
        },

        completeTask: (state, action) => {
            const index = state.toDoList.findIndex(task => task.id === action.payload.task.id);
            state.toDoList[index] = {...state.toDoList[index], completed: !state.toDoList[index].completed};
        },

        catchCopy: (state, action) => {
            state.iterateTask = action.payload;
            state.inputValue = '';
        }
    }
});

const toDoReducer = toDoSlice.reducer;

export const {getData, handleData, removeTask, completeTask, catchCopy} = toDoSlice.actions;

export default toDoReducer;