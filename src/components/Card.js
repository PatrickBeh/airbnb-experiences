import React from 'react'
import Image1 from '../images/image 12.jpg'
import Star from '../images/Star 1.png'

export default function Card() {
    return (
        <div>
            <div className='relative'>
                <div className='bg-white d-flex justify-between items-center rounded-md absolute top-2 left-2 z-50 py-1 px-2'>
                    <h6 className='font-poppins text-xs text-zinc-800 leading-5 uppercase'>Sold Out</h6>
                </div>
                <img src={Image1} className='w-44 h-60 object-cover rounded-lg z-0' alt='Example' />
            </div>
            <div>
                <div className='w-full flex items-center justify-start gap-1 mt-2'>
                    <img src={Star} className='h-4 w-4' alt='Star'/>
                    <h5 className='font-poppins font-light text-xs text-zinc-800 leading-5 uppercase'>5.0</h5>
                    <h5 className='font-poppins font-light text-xs text-zinc-400 leading-4 uppercase'>(6)</h5>
                    <ul className="list-disc ml-4">
                        <li className='font-poppins font-light text-xs text-zinc-400 leading-4 uppercase'>USA</li>
                    </ul>
                </div>
                <h2 className='font-poppins font-light text-xs text-zinc-800 leading-5 py-0'>Life lessons with Katie Zaferes</h2>
                <h2 className='font-poppins font-light text-xs text-zinc-800 leading-5'><strong className='font-bold'>From $136 / </strong> person</h2>
            </div>
        </div>
    )
}