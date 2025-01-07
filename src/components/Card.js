import React from 'react'
import Star from '../images/Star 1.png'

export default function Card({ availability, imageSrc, rating, ratingNumber, location, title, price }) {
    return (
        <div>
            <div className='relative'>
                {availability ? (
                    <div className='bg-white flex justify-between items-center rounded-md absolute top-2 left-2 z-50 py-1 px-2'>
                        <h6 className='font-poppins text-xs text-zinc-800 leading-5 uppercase'>
                            {availability}
                        </h6>
                    </div>
                ) : null }
                <img src={imageSrc} className='w-44 h-60 object-cover rounded-lg z-0' alt='Example' />
            </div>
            <div>
                <div className='w-full flex items-center justify-start gap-1 mt-2'>
                    <img src={Star} className='h-4 w-4' alt='Star'/>
                    <h5 className='font-poppins font-light text-xs text-zinc-800 leading-5 uppercase'>
                        {rating} 
                    </h5>
                    <h5 className='font-poppins font-light text-xs text-zinc-400 leading-4 uppercase'>(
                        {ratingNumber})
                    </h5>
                    <ul className="list-disc ml-4">
                        <li className='font-poppins font-light text-xs text-zinc-400 leading-4 uppercase'>
                            {location}
                        </li>
                    </ul>
                </div>
                <h2 className='font-poppins font-light text-xs text-zinc-800 leading-5 py-0'>
                    {title} 
                </h2>
                <h2 className='font-poppins font-light text-xs text-zinc-800 leading-5'><strong className='font-bold'>From ${price} </strong>/ person</h2>
            </div>
        </div>
    )
}