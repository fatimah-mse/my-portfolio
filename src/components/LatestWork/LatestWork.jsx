import React from 'react'
import './LatestWork.css'
import { LatestWorkData } from '../../Data/LatestWorkData'
import CardComponent from '../CardComponent/CardComponent'
import TitleComponent from '../TitleComponent/TitleComponent'

export default function LatestWork() {
    return (
        <section className='FM-padding'>
            <TitleComponent title={'My latest work'}/>
            <div className='FM-latest-work'>
                {LatestWorkData.map((e, index) => {
                    return (
                        <CardComponent
                            key={index}
                            cardClass={'FM-card-29'}
                            img={e.img}
                            imgClass={'w-100'}
                            title={e.title}
                            desc={e.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}
