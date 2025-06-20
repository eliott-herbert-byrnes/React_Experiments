import React from 'react'
import Button from './Button'

const ImageClipBox = ({ src, className }) => {
    return (
        <div className={className}>
            <img src={src} />
        </div>
    )
}

const Contact = () => {
    return (
        <div id='contact' className='my-20 min-h-96 w-screen px-10'>
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox 
                    src='img/contact-1.webp'
                    className='contact-clip-path-1'
                    />
                    <ImageClipBox 
                    src='img/contact-2.webp'
                    className='contact-clip-path-2 lg:translate-y-40 translate-y-60'
                    />
                </div>
                <div className="absolute -top-40 left-20 w-60 overflow-hidden sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox 
                    src='img/swordman-partial.webp'
                    className='absolute md:scale-125'
                    />
                    <ImageClipBox 
                    src='img/swordman.webp'
                    className='sword-man-clip-path md:scale-125 '
                    />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-[10px] uppercase">join zentry</p>
                    <p className="special-font font-zentry text-5xl leading-[0.9] md:text-[6rem]">Let's <b>b</b><b>u</b>ild a <br />new era of <br />ga<b>m</b>ing to<b>g</b>ether</p>
                    <Button 
                    title='contact us'
                    containerClass='mt-10 cursor:pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact