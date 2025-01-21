import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg'

export default function Slider() {
    let sliderData = [
       { id: 1,
        image: img1,
        title: "The perfect design for your website",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa reiciendis veritatis minima placeat nostrum iste hic fuga, quibusdam tenetur tempora rem fugit quas omnis dicta eum doloremque aliquid voluptatem adipisci sequi unde, est, molestias deleniti voluptatum! Distinctio, cumque voluptates?",
        link: "https://www.google.com"
    },
    { id: 2,
        image: img2,
        title: "The perfect design for your website",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa reiciendis veritatis minima placeat nostrum iste hic fuga, quibusdam tenetur tempora rem fugit quas omnis dicta eum doloremque aliquid voluptatem adipisci sequi unde, est, molestias deleniti voluptatum! Distinctio, cumque voluptates?",
        link: "https://www.google.com"
    },
    { id: 3,
        image: img1,
        title: "The perfect design for your website",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa reiciendis veritatis minima placeat nostrum iste hic fuga, quibusdam tenetur tempora rem fugit quas omnis dicta eum doloremque aliquid voluptatem adipisci sequi unde, est, molestias deleniti voluptatum! Distinctio, cumque voluptates?",
        link: "https://www.google.com"
    }
    ]

    return (
        <>
        <section id='slider' className='slider-blok'>
        <Carousel>
            {
                sliderData.map((item) => {
                    return (
                        <Carousel.Item key={item.id} interval={1000}>
                            <img src={item.image} alt={"slide" + item.id} className='w-100'/>
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a className='btn btn-primary' href={item.link}>Learn More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
        </section>
        </>
    )
}
