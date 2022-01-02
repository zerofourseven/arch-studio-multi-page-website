import React from 'react'
import { useState, useRef } from "react";
import arrowIcon from '../assets/icons/icon-arrow.svg';

const FormBlock = () => {   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();
    
    function submitHandler(event) {
        event.preventDefault(); //lets me handle submission fully with JS & React
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        setName('');
        setEmail('');
        setMessage('');
        setSubmitSuccess(true);

        const messageData = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage
        }

        console.log(messageData);

        //if connecting to some backend...
       /* fetch(
            "", //url to post the data to
            {
                method: "POST",
                body: JSON.stringify(messageData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );*/
    }


    return (
        <section className='container block form-block'>
            <h2 className='form-block__title'>Connect with us</h2>
            
            {submitSuccess ? 
                <div className='form-block__success-message'>
                    Message sent! 
                </div> 
            :
                <form className='form-block__form' onSubmit={submitHandler}>
                    <input 
                        className='form-block__form-name' 
                        type="text" 
                        value={name} 
                        onChange={(e) => {setName(e.target.value)}}
                        required 
                        ref={nameInputRef} 
                        placeholder='Name' /><span></span>
                    <input 
                        className='form-block__form-email' 
                        type="email" 
                        value={email} 
                        onChange={(e) => {setEmail(e.target.value)}}
                        required 
                        ref={emailInputRef} 
                        placeholder='Email' /><span></span>
                    <textarea 
                        className='form-block__form-message' 
                        rows="4" 
                        value={message} 
                        onChange={(e) => {setMessage(e.target.value)}}
                        required 
                        ref={messageInputRef} 
                        placeholder='Message' /><span></span>
                    <button className='button button--block form-block__submit' type='submit'> 
                        <img src={arrowIcon} alt='Submit form' className="button__arrow" />
                    </button>
                </form>
                
                }
        </section>
    )
}

export default FormBlock
