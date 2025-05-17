import React from 'react'
import clsx from 'clsx'
import picIcon from '../assets/testimonial-icon.svg'
import defaultImg from '../assets/testimonial-image.png'
import './Testimonial.css'

export default function Testimonial({ text, name, employer, position, variant = 'image' }) {

    console.log(picIcon)

    return (
        <>
     { variant === 'image' ?
          <div className='testimonial-layout'>
                <div className='testimonial-image'>
                    <img src={defaultImg} alt='image of testimonial writer' />
                </div>
                <div className='testimonial-main'>
                    <img src={picIcon} alt='image of quotation marks' />
                    <h2>{text}</h2>
                    <p className='testimonial-name'>{name}</p>
                    <p>{employer}, {position}</p>
                </div>
            </div>
            : null }
        </>
    )
}