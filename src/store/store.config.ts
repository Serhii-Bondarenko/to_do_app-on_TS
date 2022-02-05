import {configureStore, combineReducers} from '@reduxjs/toolkit';

import toDoReducer from './toDo.slice';

const rootReducer = combineReducers({
    toDoReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
