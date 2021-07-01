import React, { useState } from "react";
import { Paging } from "./paging";

export const MyTodoBox = props =>{
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodo = () =>{
        const myTodolist = todoList;
        myTodolist.push(inputValue);
        setTodoList(myTodolist);
        setInputValue('');
    }

    return(
        <div>
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <input type="submit" value={"Add Todo"} onClick={() => addTodo()} />
            </div>
            {todoList.length > 0 && <ol>{
                todoList.map((item, i) => {
                    return (
                        <li key={i}>{item}</li>
                    )
                })}</ol>
            }
            <div>
                <h2>Paging</h2>
                <Paging/>
            </div>
        </div>
    )
}

