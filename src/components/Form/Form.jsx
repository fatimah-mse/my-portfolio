import React from 'react'
import './Form.css'

export default function Form() {
    return (
        <form className='MH-form'>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <textarea placeholder='Type your message here'></textarea>
            <button className='MH-btn' type="submit">Submit</button>
        </form>
    )
}
