import React from 'react'
import Image1 from '../images/image 28.png'
import Image2 from '../images/image 30.png'
import Image3 from '../images/image 26.png'
import Image4 from '../images/image 27.png'
import Image5 from '../images/image 29.png'
import Image6 from '../images/image 22.png'
import Image7 from '../images/image 23.png'
import Image8 from '../images/image 25.png'
import Image9 from '../images/image 24.png'

export default function Banner() {
    return(
        <div className='p-6 flex justify-center'>
            <div className='h-screen w-full max-h-60 max-w-400 grid grid-cols-5 gap-2'>
                <div className="h-full">
                    <img src={Image1} className='h-24 mt-12' />
                </div>
                <div className='flex flex-col h-full gap-2 pt-2'>
                    <img src={Image2} className='min-h-16' />
                    <img src={Image3} className='min-h-24' />
                </div>
                <div className='flex flex-col justify-end h-full gap-2'>
                    <img src={Image4} className='min-h-16' />
                    <img src={Image5} className='min-h-24' />
                </div>
                <div className='flex flex-col justify-start h-full gap-2'>
                    <img src={Image6} className='min-h-24' />
                    <img src={Image7} className='min-h-24' />
                </div>
                <div className='flex flex-col justify-center h-full gap-2'>
                    <img src={Image8} className='min-h-24' />
                    <img src={Image9} className='min-h-24' />
                </div>
            </div>
        </div>
    )
}