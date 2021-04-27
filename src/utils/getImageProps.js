const fetchData = async (year, month, day) => {
    const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${year}-${month}-${day}?api_key=d1G9Pc7urbC6hCDOID3CknC8AJTTINVaTuL0kYDI`)
    const result = await response.json()
    const imageArray = result.map(imageData => `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageData.image}.png`)
    return imageArray
}

let isBearthDay = true

const getImageProps = async (date) => {
    const today = new Date()
    const selectedDate = new Date(date)
    selectedDate.setDate(selectedDate.getDate() + 1)
    selectedDate.setFullYear(2021)
    let year = 2021
    if (today.getTime() < selectedDate.getTime()) year = 2020
    let month = ("0" + (selectedDate.getMonth() + 1)).slice(-2)
    let day = ("0" + selectedDate.getDate()).slice(-2)
    let images = await fetchData(year, month, day)
    if (images.length === 0) {
        isBearthDay = false
        selectedDate.setDate(selectedDate.getDate() + 1);
        getImageProps(selectedDate)
    }
    return {
        images,
        isBearthDay
    }
}

export default getImageProps
