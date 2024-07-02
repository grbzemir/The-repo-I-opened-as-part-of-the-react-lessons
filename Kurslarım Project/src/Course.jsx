import React from 'react'

function Course({ course }) {

    const { id, title, description, price, link, image } = course; //Desctructuring
    return (
        <div className='course'>

            <div>

                <div className='course-image'><img src={image} width={250} height={150} /></div>
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} $</h3>
                <div className='course-link'><a href={link}>Satin Almak İçin Tiklayiniz</a></div>

            </div>

        </div>
    )
}

export default Course
