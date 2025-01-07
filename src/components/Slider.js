import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card'
import 'swiper/css'; 
// Images
import ImageSlide1 from '../images/image 12.jpg';
import ImageSlide2 from '../images/wedding-photography 1.jpg';
import ImageSlide3 from '../images/mountain-bike 1.jpg';

export default function Slider() {
    const CardsData = [
        { availability: 'Sold Out', imageSrc: ImageSlide1, rating: '5.0', ratingNumber: '6', location: 'USA', title: 'Life lessons with Katie Zaferes', price: '136' },
        { availability: 'Online', imageSrc: ImageSlide2, rating: '5.0', ratingNumber: '30', location: 'USA', title: 'Learn wedding photography', price: '125' },
        { availability: '', imageSrc: ImageSlide3, rating: '4.8',ratingNumber: '2', location: 'USA', title: 'Group Mountain Biking', price: '50' }
    ];
    return (
        <div className='pb-8'>
            <Swiper
                slidesPerView={2.9} 
                loop={false} 
                slidesOffsetBefore={32}
            >
            {CardsData.map((card, index) => ( 
                <SwiperSlide key={index}>
                    <Card
                        availability={card.availability}
                        imageSrc={card.imageSrc}
                        rating={card.rating}
                        ratingNumber={card.ratingNumber}
                        location={card.location}
                        title={card.title}
                        price={card.price}
                    />
                </SwiperSlide>
            ))}
            </Swiper>
            
        </div>
    );
}