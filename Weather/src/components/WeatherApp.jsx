import { useState, useEffect } from "react"
import WeatherForm from "./WeatherForm"
import WeatherInfo from "./WeatherInfo"

const URL = import.meta.env.VITE_APP_URL
const KEY = import.meta.env.VITE_APP_KEY

export default function WeatherApp() {
    const [weather, setWeather] = useState(null)

    useEffect(function(){
        loadInfo()
    }, [])

    useEffect(function(){
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])

    async function loadInfo(city = 'london'){
        try {
            const request = await fetch(`${URL}key=${KEY}&q=${city}&aqi=no`)
            const data = await request.json()
            setWeather(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    function handleChangeCity(city){
        setWeather(null)
        loadInfo(city)
    }

    return (
        <div className="weather-app">
            <WeatherForm onChangeCity={handleChangeCity}/>
            {
                weather
                ? <WeatherInfo weather={weather}/>
                : <p>Cargando...</p>
            }
        </div>
    )
}