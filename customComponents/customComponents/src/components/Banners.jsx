import React from 'react'
import clsx from 'clsx'
import defaultIcon from '../assets/icon-default.svg'
import successIcon from '../assets/icon-success.svg'
import warningIcon from '../assets/icon-warning.svg'
import errorIcon from '../assets/icon-error.svg'
import neutralIcon from '../assets/icon-neutral.svg'
import './Banners.css'

export default function Banners({ title, text, status = 'default', variant }) {

    const statusClasses = {
        default: 'banner-default',
        success: 'banner-success',
        warning: 'banner-warning',
        error: 'banner-error',
        neutral: 'banner-neutral'
    }

    const icons = {
        default: defaultIcon,
        success: successIcon,
        warning: warningIcon,
        error: errorIcon,
        neutral: neutralIcon
    }

    return (
        <>
            {variant === 'multi' ?
                <span className={clsx('banner-base', statusClasses[status])}>
                    <div className='banner-title'>
                        <img src={icons[status]} alt='banner icon' />
                        <h3>
                            {title}
                        </h3>
                    </div>
                    <p>{text}</p>
                </span>
                :
                <span className={clsx('banner-base', statusClasses[status])}>
                    <div className='banner-title'>
                        <img src={icons[status]} alt='banner icon' />
                        <h3>{title}</h3>
                    </div>
                </span>
            }
        </>
    )
}


