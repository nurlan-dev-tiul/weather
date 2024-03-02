import { useState } from 'react'
import { Form } from '../components/form';
import { Weather } from '../components/weather';
import { DaysList } from '../components/days';
import { IWeataherDataObj, IWeataherDays } from '../types/weather';

const Home = () => {

  const [weatherData, setWeatherData] = useState<IWeataherDataObj | null>(null);
  const [forecasts, setForecast] = useState<IWeataherDays[]>([]);

  const [city, setCity] = useState('');

  return (
    <div className='wrapper'>
      <Form 
        setWeatherData={setWeatherData} 
        setCity={setCity} 
        city={city} 
        setForecast={setForecast} 
      />
      <Weather weatherData={weatherData} />
      <div className='wave' />
      <DaysList forecasts={forecasts} />
    </div>
  )
}
export default Home;