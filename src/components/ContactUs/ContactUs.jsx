import React from 'react'
import './ContactUs.css'
import { FooterLinks } from '../../Data/FooterLinks'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import TitleComponent from '../TitleComponent/TitleComponent'

export default function ContactUs() {
    return (
        <footer className='MH-contact'>
            <div className='MH-contact-right-sec'>
                <TitleComponent title={'Let’s work together'}/>
                <p className="MH-p">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className='MH-contact-links'>
                    {FooterLinks.map((e,index) => {
                        return (
                            <Link className='MH-contact-link' key={index} to={'#'}><img src={e.img} alt='link'/></Link>
                        )
                    })}
                </div>
            </div>
            <Form />

        </footer>
    )
}