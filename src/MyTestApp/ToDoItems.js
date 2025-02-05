import React, { useEffect } from "react";
import { useState } from 'react';

const ToDoItems = () => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');
    const [editRecordIndex, setEditRecordIndex] = useState(-1);

    useEffect(() => {
        if (editRecordIndex > -1) {
            setValue(items[editRecordIndex]);
        }

    }, [editRecordIndex]);

    useEffect(() => {
        console.log("First time loading", value);
        return () => {
            console.log("First time loading2", value);
        }
   }, [value]);

    const onAdd = () => {
        if (editRecordIndex == -1) {
        setItems(items.concat(value));
        setValue('');
        } else {
            setItems(items.map((item , i)=> {
                if (i === editRecordIndex) {
                    return value
                }
                return item;
            }));
            setEditRecordIndex(-1);
        }
    }

    const onDelete = (index) => {
        setItems(items.filter((item , i)=> i != index));
    }

    return <>
     <h3>Todo App</h3>
     {/* https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs */}
     {/* https://stackoverflow.com/questions/57285906/how-to-set-node-env-from-package-json-for-react */}
     <h3>Env: {process.env.NODE_ENV}</h3>
     <div>Add Item: <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/></div>
     <button onClick={onAdd} > {editRecordIndex === -1 ? 'Add' : 'Save'} </button>
     <br/>
     <hr/>
        {
            items.map((item, index)=> {
                return <div key={index}> <span>{item} </span> <button onClick={()=> setEditRecordIndex(index)}>Edit</button> <button onClick={()=> onDelete(index)}>Delete</button></div>
            } )
        }

    </>;

}

export default ToDoItems;
