import React from 'react'
import HeroComoponent from '../components/HeroComoponent/HeroComoponent'
import Logo from '../components/Logo/Logo'
import Skills from '../components/Skills/Skills'
import LatestWork from '../components/LatestWork/LatestWork'
import ClientsSec from '../components/ClientsSec/ClientsSec'
import HeroImg from '../images/HeroImg.jpg'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
        <>
            <HeroComoponent 
                        title={'Branding | Image making'}
                        name={'My awesome portfolio'}
                        desc={'And I made it myself! Yes. In Figma with Anima'}
                        img={HeroImg}
                        myclass={false}
            />
            <Logo />
            <Skills />
            <LatestWork />
            <ClientsSec />
            <ContactUs />
            <Footer />
        </>
    )
}
