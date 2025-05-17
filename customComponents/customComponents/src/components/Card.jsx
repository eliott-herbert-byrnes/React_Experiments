import React from 'react'
import clsx from 'clsx'
import defaultIcon from '../assets/icon-cloud.svg'
import './Card.css'

export default function Card({ title, text, icon = 'default', color = 'default' }) {

    const iconClasses = {
        default: defaultIcon,
        success: 'banner-success',
        warning: 'banner-warning',
        error:   'banner-error',
        neutral: 'banner-neutral'
    }

    const colorClasses = {
        default: 'icon-default',
        red: 'icon-red',
        green: 'icon-green'
    }

    return (
        <>
            <div className='card-layout'>
                <div className={clsx('icon-base', colorClasses[color])}>
                    <img src={iconClasses[icon]} alt='banner icon' />
                </div>
                <div className='card'>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}