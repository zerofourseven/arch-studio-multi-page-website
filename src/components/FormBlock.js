import React from 'react'
import Button from './Button.js'
import { useRef } from "react";


const FormBlock = () => {
    const nameInputRef = useRef();
    
    function submitHandler(event) {
        
    }


    return (
        <section className='container block form-block'>
            <h2 className='form-block__title'>Connect with us</h2>
            <form className='fomr-block__form' onSubmit={submitHandler}>
                <input type="text" required ref={nameInputRef} placeholder='Name' />
                <input type="email" required  placeholder='Email' />
                <textarea rows="4" required placeholder='Message ' />
                <Button className='form-block__submit' btnClassname='button--block' arrow='true'/>
            </form>
        </section>
    )
}

export default FormBlock
