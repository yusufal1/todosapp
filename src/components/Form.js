import React, { useState } from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';
import { nanoid } from 'nanoid';
import { FaCheck } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {
    const [colors, setColors] = useState(['pink', 'purple', 'orange', 'blue', 'green']);
    const [selectedColor, setSelectedColor] = useState('pink')
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({ id: nanoid(), title, color: selectedColor}))
        toast.success('🦄 Başarıyla Eklendi!', {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
            });
        setTitle('')
    }

    const chooseColor = (color) => {
        setSelectedColor(color)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <textarea name="todo" id="todo" cols="100" rows="10" placeholder='Enter your note here...' value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
            <div className='formFooter'>
                <ul className='colors'>
                    {
                        colors.map((color, index) => (
                            <li key={index} className='color' style={{backgroundColor: color}} onClick={() => chooseColor(color)}>
                                {
                                    color === selectedColor && <FaCheck size={18} color='white'/>
                                }
                            </li>
                        ))
                    }
                </ul>
                <button>ADD</button>
            </div>
            <ToastContainer />
        </form>
    );
}

export default Form;
