import React from 'react'
import clsx from 'clsx'
import './Badge.css'

export default function Badge({ 
    children, 
    color = 'default', 
    className = '' }) {

    const colorClasses = {
        default: 'badge-default',
        red: 'badge-red',
        yellow: 'badge-yellow',
        green: 'badge-green',
        blue: 'badge-blue',
        indigo: 'badge-indigo',
        purple: 'badge-purple',
        pink: 'badge-pink'
    }


    return (
            <div className={clsx('badge-base', colorClasses[color], className)}>
                {children}
            </div>
    )
}