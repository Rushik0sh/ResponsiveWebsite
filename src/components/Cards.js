import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='/images/img-3.jpg'
                        text='Explore the waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services' />
                        <CardItem src='/images/img-1.jpg'
                        text='Explore the island and beaches'
                        label='Luxury'
                        path='/products' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='/images/img-5.jpg'
                        text='Explore the waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services' />
                        <CardItem src='/images/img-6.jpg'
                        text='Explore the island and beaches'
                        label='Relax'
                        path='/sign-up' />
                        <CardItem src='/images/img-7.jpg'
                        text='Explore the island and beaches'
                        label='Relax'
                        path='/products' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards