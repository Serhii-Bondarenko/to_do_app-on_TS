import React, {FC} from 'react';

import './layout.css';
import {Form} from '../Form/Form';
import {ToDoList} from '../ToDoList/ToDoList';
import {Info} from '../Info/Info';

const Layout:FC = () => {
    return (
        <div className={'wrapper'}>
            <Info/>
            <div className={'main'}>
                <Form/>
                <ToDoList/>
            </div>
        </div>
    );
};

export {Layout};