import React from 'react'
import './FloatingIcons.css'
import whatsapp from '../../media/whatsapp.svg'
import phone from '../../media/phone.svg'
import { phoneNumbers } from '../../data/phoneNumbers';
const FloatingIcons = () => {
    return (
        <div className='floating-icons'>
            <div className='floating-icon' onClick={() => window.open(`https://wa.me/+2${phoneNumbers[0]}`, '_blank')}>
                <img src={whatsapp} alt="" />
            </div>
            <div className='floating-icon phone' onClick={() => window.open(`tel:${phoneNumbers[0]}`, '_blank')}>
                <img src={phone} alt="" />
            </div>
        </div>
    )
}

export default FloatingIcons
