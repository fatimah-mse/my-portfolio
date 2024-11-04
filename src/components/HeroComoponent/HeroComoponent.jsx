import React from 'react'
import './HeroComoponent.css'

export default function HeroComoponent({title , name , desc , img , myclass}) {
    return (
        <section className={`FM-padding FM-hero ${myclass ? 'FM-reverse FM-hero-bg' : ''}`}>
            <div className='FM-description'>
                <h5 className='FM-h5'>{title}</h5>
                <h1 className='FM-h1'>{name}</h1>
                <p className={`FM-p ${myclass ? 'FM-p-reverse' : ''}`}>{desc}</p>
            </div>
            <img className={`FM-img ${myclass ? 'FM-img-reverse text-start' : 'text-en'}`} src={img} alt="hero-img" />
        </section>
    )
}