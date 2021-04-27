import React, {useState, useEffect} from 'react'

const Slider = ({sliderProps}) => {
const {images, isBearthDay} = sliderProps
const [activeIndex, setActiveIndex] = useState(0)
const [message, setMessage]= useState("This picture was taken on your BearthDay")
const isPrevDisabled = activeIndex === 0
const isNextDisabled = activeIndex === images.length - 1
const handleImageChange = (direction) => {
    if (direction === 'prev'){
        setActiveIndex(activeIndex -1)
    } else if (direction === 'next'){
        setActiveIndex(activeIndex + 1)
    }
}
useEffect(() => {
    if(!isBearthDay) setMessage("No pictures on your Bearthday! These pictures were taken slightly afterwards.")
},[isBearthDay])

return (
    <>
        <h1>{message}</h1>
        <div className="imageContainer">
        <button className="buttons" onClick={() => handleImageChange('prev')} disabled={isPrevDisabled}>Prev</button>
            <button className="buttons" onClick={() => handleImageChange('next')} disabled={isNextDisabled} >Next</button>
        <img className="earth" src={images[activeIndex]} alt="Planet Earth" />
        </div>
    </>
)
}

export default Slider