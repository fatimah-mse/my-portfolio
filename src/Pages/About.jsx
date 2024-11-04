import React from 'react'
import AboutSec from '../components/AboutSec/AboutSec'
import HeroComoponent from '../components/HeroComoponent/HeroComoponent'
import HeroImg from '../images/1.jpg'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

export default function About() {
    return (
        <>
            <HeroComoponent
                        title={'Web | Front-end Developer'}
                        name={'Mohammad'}
                        desc={'And I made it myself! Yes. In Figma with Anima'}
                        img={HeroImg}
                        myclass={true}
            />
            <AboutSec />
            <ContactUs />
            <Footer />
        </>
    )
}
