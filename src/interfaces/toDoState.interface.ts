import {ITask} from "./tasc.interface";

export interface IToDoState{
    inputValue: string;
    toDoList: ITask[];
    iterateTask: string | null;
}