import React from 'react'
import './Logo.css'
import { LogoImages } from '../../Data/LogoImages'


export default function Logo() {
    return (
        <section className='FM-Logo-img'>
            {LogoImages.map((e,index) => {
                return <img key={index} src={e.src} alt="logo" />
            })}
        </section>
    )
}
