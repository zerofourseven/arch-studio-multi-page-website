import React from 'react'
import { locationData } from '../data/data'
import Button from './Button'
import Map from './Map'

const ContactDetailsBlock = () => {
    return (
        <>
            <section className='container block contact-details-block'>
                <h2 className='contact-details-block__title'>Contact Details</h2>
                <div className='contact-details-block__grid'>
                    {
                        locationData.map((location, index) => {
                        const {name, email, address, phone} = location;
                        return (

                            <div className='contact-details-block__location' key={index}>
                                <div>
                                    <p className='contact-details-block__location-name'>{name}</p>
                                    <p>Mail : {email}</p>
                                    <p>Address : {address}</p>
                                    <p>Phone : {phone}</p>
                                </div>
                                <Button className='location-button' text="view on map" arrow="true" altText="View on map" />

                            </div>
                        );
                        }
                        )
                    }
                </div>
            </section>
            <Map />
        </>
    )
}

export default ContactDetailsBlock
