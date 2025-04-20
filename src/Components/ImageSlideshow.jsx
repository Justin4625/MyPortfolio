import { useState } from "react";

function ImageSlideshow({ images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
            <div className="navigation">
                <button onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    );
}

export default ImageSlideshow;