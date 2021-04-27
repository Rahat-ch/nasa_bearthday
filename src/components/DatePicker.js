import React, {useState, useEffect} from 'react'
import getImageProps from '../utils/getImageProps';

const DatePicker = ({ setSliderProps}) => {
    const [date, setDate] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const imageProps = await getImageProps(date)
        setSliderProps(imageProps)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label for="date">Choose a Date:</label>
            <input 
                type="date" 
                name="date" 
                id="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default DatePicker
