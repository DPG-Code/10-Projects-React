export default function WeatherInfo({weather}){
    return (
        <div className='info'>
            <p className='city'>{weather?.location.name}</p>
            <p className='country'>{weather?.location.country}</p>
            <img className='icon' src={weather?.current.condition.icon}alt={weather?.current.condition.text} />
            <p className='condition'>{weather?.current.condition.text}</p>
            <p className='temp'>{weather?.current.temp_c}º</p>
            <iframe
                className='map'
                title="map"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158939.0936303872!2d${weather?.location.lon}17!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1656239318091!5m2!1ses!2ses`}
                width="300"
                height="300"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}