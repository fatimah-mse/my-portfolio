import React from 'react'
import './CardComponent.css'

export default function CardComponent({cardClass ,img , imgClass , title , titleClass , desc , txtCenter}) {
    return (
        <div className={`FM-card ${cardClass}`}>
            <img className={`${imgClass} img-fluid`} src={img} alt="card-img" />
            <h5 className={`${titleClass} ${txtCenter} FM-h5`}>{title}</h5>
            <p className={`FM-p ${txtCenter} mb-0`}>{desc}</p>
        </div>
    )
}
