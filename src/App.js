import React, {useState} from 'react';
import DatePicker from './components/DatePicker'
import Slider from './components/Slider'
import './App.css';

function App() {
    const [sliderProps, setSliderProps] = useState(null)
    return (
        <div className="App">
        <DatePicker setSliderProps={setSliderProps} />
        {sliderProps && <Slider sliderProps={sliderProps} />}
        </div>
    )
}

export default App;
