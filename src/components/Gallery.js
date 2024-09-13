import React, { useState, useEffect } from 'react'
import './Gallery.css'

function Gallery() {

    const [images, setImages] = useState([]) //to store data


    useEffect(() => {

        const fetchImages = () => { //to load alll data for first render 
            const data = [
                {
                    id: 1,
                    url: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
                    title: 'Apple'

                },
                {
                    id: 2,
                    url: 'https://static.vecteezy.com/system/resources/previews/020/336/037/original/samsung-logo-samsung-icon-free-free-vector.jpg',
                    title: 'Samsung'

                },
                {
                    id: 3,
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/768px-Xiaomi_logo.svg.png',
                    title: 'Xiaomi'

                },
                {
                    id: 4,
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWmUV8HRwaOavdOGa_r_4EkvKnT3tAkMMvw&s',
                    title: 'Vivo'

                },
                {
                    id: 5,
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdaBZrv029AmYjQFhbIznRo8xdsxt6vYBiw&s',
                    title: 'Motorola'

                }
            ]
            setImages(data)

        }

        fetchImages()

    }, [])

    const handleDeleteImage = (id) => {
        setImages(images.filter((image) => image.id !== id))

    }

    return (
        <div>
            <h1 className='title'>Image Gallery</h1>

            {images.length > 0 ?
                (<div className='image-grid'>

                    {
                        images.map((image) => (
                            <div className='image-card' key={image.id}>
                                <img src={image.url} alt='logo' />
                                <div className='image-details'>
                                    <h3>{image.title}</h3>
                                    <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
                                </div>
                            </div>
                        ))

                    }



                </div>) :
                <p className='no-images'>No images found</p>
            }

        </div>
    )
}

export default Gallery