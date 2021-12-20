import React from 'react'
import arrowIcon from '../assets/icons/icon-arrow.svg'

const Form = () => {
    return (
        <div>
            <form>
                <div className={classes.control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" required id="name" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" required id="email" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Message</label>
                    <input type="textarea" required id="message" />
                </div>
                <div className={classes.actions}>
                    <button className="button--arrow"></button>
                </div>
            </form>
        </div>
    )
}

export default Form
