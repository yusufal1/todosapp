import React, { useState } from 'react';

const Form = () => {
    const [colors, setColors] = useState(['pink', 'purple', 'orange', 'blue', 'green']);

    return (
        <form className='form'>
            <textarea name="todo" id="todo" cols="100" rows="10" placeholder='Enter your note here...'></textarea>
            <div className='formFooter'>
                <ul className='colors'>
                    {
                        colors.map((color, index) => (
                            <li key={index} className='color' style={{backgroundColor: color}}>
                                
                            </li>
                        ))
                    }
                </ul>
                <button>ADD</button>
            </div>
        </form>
    );
}

export default Form;
