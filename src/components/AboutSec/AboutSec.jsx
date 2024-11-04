import React from 'react'
import './AboutSec.css'
import { AboutData } from '../../Data/AboutData'

export default function AboutSec() {
    return (
        <section className='FM-padding MH-about-sec'> 
            <p className='MH-about-desc'>When I was 5, I got adbucted by a unicorn family. When they returned me to earth, I joined a designer school. But, fo’ real, what I learned with my kidnaptive family really gave an edge to my creative language.</p>
            {AboutData.map((e,index) => {
                return (
                    <p key={index} className={`FM-p ${e.green ? 'MH-p-green' : ''}`}>{e.desc}</p>
                )
            })}
        </section>
    )
}
